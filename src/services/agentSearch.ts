import { Opportunity, StudentProfile } from '../types';
import { OPPORTUNITIES } from '../data/opportunities';
import { UNIVERSITIES } from '../data/universities';

export interface AgentSearchResult {
  matchedIds: string[];
  conversationalSummary: string;
  matchedExplanations: Array<{
    opportunityId: string;
    whyItFits: string;
    keyHighlights: string[];
  }>;
}

export function executeSemanticAgentSearch(
  query: string,
  profile: StudentProfile
): AgentSearchResult {
  const q = query.toLowerCase().trim();
  const opportunities = [...OPPORTUNITIES];

  // Score each opportunity based on query match + profile affinity
  const scored = opportunities.map((opp) => {
    let score = 0;
    const uni = UNIVERSITIES.find((u) => u.id === opp.universityId);
    const uniName = uni ? uni.name.toLowerCase() : '';
    const uniShort = uni ? uni.shortName.toLowerCase() : '';
    const country = opp.hostCountry.toLowerCase();
    const field = opp.field.toLowerCase();
    const title = opp.title.toLowerCase();
    const dept = opp.department.toLowerCase();
    const snapshot = opp.snapshot.toLowerCase();
    const stipend = opp.stipendType.toLowerCase();

    // 1. Direct Field and Keyword match
    if (q.includes('robot') || q.includes('mechatronic') || q.includes('drone') || q.includes('slam')) {
      if (field.includes('robotics')) score += 45;
    }
    if (q.includes('cs') || q.includes('computer') || q.includes('ai') || q.includes('software') || q.includes('intelligence') || q.includes('code') || q.includes('neural')) {
      if (field.includes('computer science') || title.includes('neural') || title.includes('ai')) score += 45;
    }
    if (q.includes('bio') || q.includes('pharma') || q.includes('crispr') || q.includes('gene') || q.includes('plant') || q.includes('crop') || q.includes('life')) {
      if (field.includes('biotechnology')) score += 45;
    }
    if (q.includes('energy') || q.includes('wind') || q.includes('grid') || q.includes('renewable') || q.includes('hydrogen') || q.includes('power') || q.includes('solar')) {
      if (field.includes('energy') || title.includes('hydro')) score += 45;
    }
    if (q.includes('material') || q.includes('ceramic') || q.includes('nanotech') || q.includes('polymer')) {
      if (field.includes('materials') || title.includes('polymer') || title.includes('ceramic')) score += 45;
    }
    if (q.includes('math') || q.includes('iot') || q.includes('crypto') || q.includes('quantum') || q.includes('embedded')) {
      if (field.includes('mathematics') || title.includes('cryptography') || title.includes('iot')) score += 45;
    }

    // 2. Goal matches
    if (q.includes('intern') || q.includes('research')) {
      if (opp.goal === 'Research Internship') score += 25;
    }
    if (q.includes('master') || q.includes('degree') || q.includes('scholarship') || q.includes('msc')) {
      if (opp.goal === "Master's Degree Scholarship") score += 25;
    }
    if (q.includes('summer') || q.includes('short') || q.includes('school')) {
      if (opp.goal === 'Summer School') score += 30;
    }
    if (q.includes('exchange') || q.includes('semester')) {
      if (opp.goal === 'Exchange Semester') score += 25;
    }

    // 3. Negative constraint: "without german" or "no german"
    if (q.includes('without german') || q.includes('no german')) {
      if (country === 'germany' && opp.languageRequirement.toLowerCase().includes('german')) {
        score -= 20;
      }
      if (opp.languageRequirement.toLowerCase().includes('english') && country !== 'germany') {
        score += 20;
      }
      // BTU Cottbus has English B2 instruction
      if (country === 'germany' && opp.languageRequirement.toLowerCase().includes('english b2')) {
        score += 15; // Still viable because instruction is in English!
      }
    }

    // 4. Financial constraint: "full stipend", "fully funded", "funded", "stipend"
    if (q.includes('stipend') || q.includes('funded') || q.includes('grant') || q.includes('bolsa')) {
      if (opp.stipendAmount.includes('€1,') || opp.stipendAmount.includes('100%') || opp.stipendAmount.includes('All Expenses')) {
        score += 20;
      }
    }

    // 5. Geographic keywords
    if (q.includes('italy') || q.includes('catania') || q.includes('sicily')) {
      if (country === 'italy') score += 40;
    }
    if (q.includes('poland') || q.includes('poznan')) {
      if (country === 'poland') score += 40;
    }
    if (q.includes('finland') || q.includes('vaasa') || q.includes('scandinavia') || q.includes('nordic')) {
      if (country === 'finland' || country === 'sweden') score += 40;
    }
    if (q.includes('spain') || q.includes('cantabria') || q.includes('santander')) {
      if (country === 'spain') score += 40;
    }
    if (q.includes('germany') || q.includes('cottbus') || q.includes('brandenburg')) {
      if (country === 'germany') score += 35;
    }
    if (q.includes('france') || q.includes('valenciennes')) {
      if (country === 'france') score += 40;
    }
    if (q.includes('sweden') || q.includes('karlstad')) {
      if (country === 'sweden') score += 40;
    }
    if (q.includes('portugal') || q.includes('viseu')) {
      if (country === 'portugal') score += 40;
    }
    if (q.includes('greece') || q.includes('peloponnese')) {
      if (country === 'greece') score += 40;
    }
    if (q.includes('brazil') || q.includes('viçosa') || q.includes('ufv') || q.includes('minas')) {
      if (country === 'brazil') score += 40;
    }

    // 6. Profile alignment bonus
    if (opp.field === profile.field) score += 20;
    if (profile.goals && profile.goals.includes(opp.goal)) {
      score += 15;
    } else if (opp.goal === profile.goal) {
      score += 15;
    } else if (profile.isLurking || profile.goal === 'Campus News & Lurking') {
      score += 10;
    }

    // Word token match in title & snapshot
    const tokens = q.split(/\s+/).filter((t) => t.length > 3);
    for (const token of tokens) {
      if (title.includes(token) || snapshot.includes(token) || dept.includes(token)) {
        score += 8;
      }
    }

    return { opp, score };
  });

  // Sort by highest score
  scored.sort((a, b) => b.score - a.score);

  // Take the top matches (top 2 to 4)
  const topMatches = scored.slice(0, 3).map((s) => s.opp);
  const matchedIds = topMatches.map((o) => o.id);

  // Generate personalized, encouraging conversational reasoning
  const uniCount = UNIVERSITIES.length;
  const greeting = `${topMatches.length} matching STEM opportunities found across UFV & EUNICE partners:`;

  const explanations = topMatches.map((opp) => {
    const uni = UNIVERSITIES.find((u) => u.id === opp.universityId);
    let why = '';
    const highlights: string[] = [];

    if (opp.id === 'opp-catania-robotics-01') {
      why = `Perfeita correspondência para robótica e mechatronics na University of Catania (Itália). As aulas e pesquisas são conduzidas 100% em inglês (English B2), dispensando o alemão ou italiano avançado. O laboratório PeRCeiVe Lab tem bolsa Erasmus+ ICM de €1.050/mês garantida pelo convênio bilateral.`;
      highlights.push('Bolsa €1.050/mês', 'Totalmente em Inglês B2', 'Transferência de 30 ECTS');
    } else if (opp.id === 'opp-poznan-ai-03') {
      why = `Na Poznań University of Technology (Polônia), o foco em IA em borda para veículos conectados oferece co-autoria em conferências internacionais e remuneração mensal de €1.050, com forte integração para graduandos e pós-graduandos em computação.`;
      highlights.push('Bolsa integral Erasmus+', 'Clusters GPU NVIDIA', '30 ECTS reconhecidos');
    } else if (opp.id === 'opp-vaasa-energy-02') {
      why = `No epicentro nórdico de transição energética (Vaasa, Finlândia), oferece bolsa de mestrado completa com isenção total de anuidade mais €1.200/mês para moradia, ideal para quem busca redes inteligentes e hidrogênio verde.`;
      highlights.push('100% Isenção de Anuidade', 'Bolsa de €1.200/mês', 'Parcerias com Wärtsilä');
    } else if (opp.id === 'opp-karlstad-crypto-08') {
      why = `A Karlstad University (Suécia) lidera a pesquisa europeia em segurança e computação quântica. O programa de mestrado cobre integralmente as mensalidades e oferece bolsa sueca de ~€1.150/mês.`;
      highlights.push('Bolsa SEK 13.000/mês', 'Laboratório PriSec', 'Isenção de anuidade');
    } else if (opp.id === 'opp-btu-aero-06') {
      why = `Na BTU Cottbus-Senftenberg (Alemanha), esta posição de propulsão elétrica aeronáutica aceita proficiência apenas em inglês (English B2). Oferece €1.150/mês via DAAD/EUNICE e passe livre para toda a malha de trens de Berlim-Brandemburgo.`;
      highlights.push('Instrução em Inglês B2', 'Bolsa DAAD €1.150/mês', 'Passe livre regional');
    } else if (opp.id === 'opp-mons-biotech-04') {
      why = `Na University of Mons (Bélgica), esta vaga de biomateriais e bio-catálise conta com bolsa de €1.100/mês e seguro de saúde internacional financiado pelo governo valão, com uso de microscopia de força atômica.`;
      highlights.push('Bolsa €1.100/mês', 'Laboratório de Novos Materiais', 'Ambiente internacional');
    } else if (opp.id === 'opp-uphf-trans-07') {
      why = `A Escola de Verão da UPHF (França) tem todas as despesas de alojamento e alimentação pagas, além de ajuda de custo de €400, com estudos práticos em simuladores de alta velocidade do CNRS.`;
      highlights.push('Tudo pago + €400', '4 semanas intensivas', 'Certificado EUNICE 6 ECTS');
    } else if (opp.id === 'opp-cantabria-ocean-05') {
      why = `No IHCantabria (Espanha), estuda-se hidrodinâmica marinha e eólica offshore no maior tanque de ondas da Europa, com bolsa Erasmus+ de €1.050/mês em Santander.`;
      highlights.push('Bolsa €1.050/mês', 'Maior flume de ondas da Europa', '30 ECTS convalidados');
    } else if (opp.id === 'opp-viseu-agro-11') {
      why = `No Politécnico de Viseu (Portugal), estudantes da UFV encontram total afinidade idiomática, custo de vida amigável e robótica aplicada à viticultura com bolsa Erasmus+ de €1.050/mês.`;
      highlights.push('Sem barreira idiomática', 'Bolsa €1.050/mês', 'Viseu melhor qualidade de vida');
    } else if (opp.id === 'opp-ufv-agrobiotech-09' || opp.id === 'opp-ufv-comp-12') {
      why = `Na UFV (Viçosa, Brasil), o programa recebe acadêmicos europeus e brasileiros para pesquisa de ponta no BIOAGRO ou DPI, com bolsas CAPES-PrInt/FAPEMIG de R$ 3.200/mês e moradia universitária inclusa.`;
      highlights.push('Bolsa R$ 3.200/mês', 'Moradia universitária inclusa', 'Liderança internacional');
    } else {
      why = `${opp.title} at ${uni?.name || opp.hostCountry} aligns directly with your STEM focus in ${opp.field}. It provides ${opp.stipendAmount} support and verified credit recognition.`;
      highlights.push(opp.stipendAmount, opp.languageRequirement, `${opp.deadlineCountdownDays} days left`);
    }

    return {
      opportunityId: opp.id,
      whyItFits: why,
      keyHighlights: highlights,
    };
  });

  return {
    matchedIds,
    conversationalSummary: greeting,
    matchedExplanations: explanations,
  };
}
