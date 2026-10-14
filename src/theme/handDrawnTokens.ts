/**
 * Hand-Drawn Design System Tokens
 * Authentic imperfection, warm paper textures, wobbly borders, and hard offset shadows.
 */

export const HAND_DRAWN_COLORS = {
  bg: '#fdfbf7', // Warm Paper
  foreground: '#2d2d2d', // Soft Pencil Black (never pure black)
  muted: '#e5e0d8', // Old Paper / Erased Pencil
  accent: '#ff4d4d', // Red Correction Marker
  secondaryAccent: '#2d5da1', // Blue Ballpoint Pen
  postIt: '#fff9c4', // Post-it Note Yellow
  postItBorder: '#ebd670',
  border: '#2d2d2d', // Pencil Lead
  paperWhite: '#ffffff',
  highlighterGreen: '#c8f7c5',
} as const;

export const WOBBLY_RADIUS = {
  button: '255px 15px 225px 15px / 15px 225px 15px 255px',
  buttonAlt: '15px 255px 15px 225px / 255px 15px 225px 15px',
  card: '24px 16px 22px 18px / 18px 24px 16px 22px',
  cardAlt: '18px 24px 16px 22px / 22px 16px 24px 18px',
  cardSpacious: '28px 18px 26px 20px / 20px 28px 18px 26px',
  badge: '255px 15px 225px 15px / 15px 225px 15px 255px',
  input: '20px 14px 18px 16px / 16px 20px 14px 18px',
  circle: '50% 48% 52% 49% / 49% 51% 48% 52%',
  tape: '2px 3px 2px 3px',
} as const;

export const HARD_SHADOWS = {
  sm: '2px 2px 0px 0px #2d2d2d',
  base: '4px 4px 0px 0px #2d2d2d',
  lg: '8px 8px 0px 0px #2d2d2d',
  pressed: '0px 0px 0px 0px #2d2d2d',
} as const;
