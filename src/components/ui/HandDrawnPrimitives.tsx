import React from 'react';
import { WOBBLY_RADIUS } from '../../theme/handDrawnTokens';

// Tape Strip Decoration
export const TapeStrip: React.FC<{ className?: string; rotation?: string }> = ({
  className = '',
  rotation = '-rotate-2',
}) => (
  <div
    className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#ffffff]/80 border border-dashed border-[#2d2d2d]/40 shadow-xs pointer-events-none z-20 ${rotation} ${className}`}
    style={{ borderRadius: WOBBLY_RADIUS.tape }}
    aria-hidden="true"
  />
);

// Thumbtack / Pushpin Decoration
export const Thumbtack: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff4d4d] border-2 border-[#2d2d2d] shadow-[1px_1px_0px_#2d2d2d] pointer-events-none z-20 ${className}`}
    aria-hidden="true"
  >
    <div className="w-1 h-1 rounded-full bg-white/60 absolute top-0.5 left-0.5" />
  </div>
);

// Hand-Drawn Doodle Arrow SVG
export const DoodleArrow: React.FC<{
  className?: string;
  direction?: 'down-right' | 'right' | 'up-left';
}> = ({ className = '', direction = 'down-right' }) => {
  return (
    <svg
      className={`w-12 h-12 text-[#2d2d2d] ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === 'down-right' && (
        <>
          <path
            d="M 15 20 Q 35 15 55 35 T 75 75"
            strokeDasharray="6 4"
          />
          <path d="M 55 75 L 77 77 L 72 55" />
        </>
      )}
      {direction === 'right' && (
        <>
          <path d="M 10 50 Q 50 45 80 50" strokeDasharray="6 4" />
          <path d="M 65 35 L 85 50 L 65 65" />
        </>
      )}
    </svg>
  );
};

// Hand-Drawn Squiggle Divider SVG
export const DoodleSquiggle: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#2d2d2d',
}) => (
  <svg
    className={`w-28 h-4 ${className}`}
    viewBox="0 0 140 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 10 Q 18 2, 34 10 T 66 10 T 98 10 T 130 10 T 138 10"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

// HandDrawnCard Container
interface HandDrawnCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  decoration?: 'tape' | 'tack' | 'none';
  variant?: 'white' | 'post-it' | 'muted';
  rotation?: string;
  borderWidth?: string;
  isInteractive?: boolean;
}

export const HandDrawnCard: React.FC<HandDrawnCardProps> = ({
  children,
  decoration = 'none',
  variant = 'white',
  rotation = '',
  borderWidth = 'border-2',
  isInteractive = false,
  className = '',
  style,
  ...props
}) => {
  const bgStyle =
    variant === 'post-it'
      ? 'bg-[#fff9c4]'
      : variant === 'muted'
      ? 'bg-[#e5e0d8]'
      : 'bg-white';

  const interactiveStyle = isInteractive
    ? 'hover:-rotate-1 hover:shadow-hard-lg transition-transform duration-100 cursor-pointer'
    : '';

  return (
    <div
      className={`relative ${bgStyle} ${borderWidth} border-[#2d2d2d] shadow-hard ${rotation} ${interactiveStyle} ${className}`}
      style={{
        borderRadius: WOBBLY_RADIUS.card,
        ...style,
      }}
      {...props}
    >
      {decoration === 'tape' && <TapeStrip />}
      {decoration === 'tack' && <Thumbtack />}
      {children}
    </div>
  );
};

// HandDrawnButton
interface HandDrawnButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'sketch';
  size?: 'sm' | 'md' | 'lg';
}

export const HandDrawnButton: React.FC<HandDrawnButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  style,
  ...props
}) => {
  let colorStyles = '';
  if (variant === 'primary') {
    // White background, hover fills with red correction marker #ff4d4d
    colorStyles = 'bg-white text-[#2d2d2d] hover:bg-[#ff4d4d] hover:text-white';
  } else if (variant === 'secondary') {
    // Muted old paper background, hovers to blue #2d5da1
    colorStyles = 'bg-[#e5e0d8] text-[#2d2d2d] hover:bg-[#2d5da1] hover:text-white';
  } else if (variant === 'accent') {
    // Direct Red marker
    colorStyles = 'bg-[#ff4d4d] text-white hover:bg-[#e03838]';
  } else {
    colorStyles = 'bg-transparent text-[#2d2d2d] hover:bg-[#fff9c4]';
  }

  const sizeStyles =
    size === 'sm'
      ? 'px-3.5 py-2 text-base min-h-[48px]'
      : size === 'lg'
      ? 'px-8 py-3.5 text-xl font-bold min-h-[52px]'
      : 'px-5 py-2.5 text-lg font-semibold min-h-[48px]';

  return (
    <button
      className={`btn-hand-drawn inline-flex items-center justify-center gap-2 font-hand select-none ${sizeStyles} ${colorStyles} ${className}`}
      style={{
        borderRadius: WOBBLY_RADIUS.button,
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

// HandDrawnBadge / Sticky Tag
export const HandDrawnBadge: React.FC<{
  children: React.ReactNode;
  variant?: 'yellow' | 'red' | 'blue' | 'white' | 'green';
  className?: string;
}> = ({ children, variant = 'yellow', className = '' }) => {
  const bgStyles =
    variant === 'yellow'
      ? 'bg-[#fff9c4] text-[#2d2d2d]'
      : variant === 'red'
      ? 'bg-[#ff4d4d] text-white'
      : variant === 'blue'
      ? 'bg-[#2d5da1] text-white'
      : variant === 'green'
      ? 'bg-[#c8f7c5] text-[#2d2d2d]'
      : 'bg-white text-[#2d2d2d]';

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 border-2 border-[#2d2d2d] shadow-hard-sm font-hand text-sm font-bold tracking-wide min-h-[32px] ${bgStyles} ${className}`}
      style={{ borderRadius: WOBBLY_RADIUS.badge }}
    >
      {children}
    </span>
  );
};

// HandDrawnInput
export const HandDrawnInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className = '', style, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`w-full min-h-[48px] px-4 py-2.5 bg-white border-2 border-[#2d2d2d] text-[#2d2d2d] placeholder-[#2d2d2d]/40 font-hand text-base md:text-lg focus:outline-hidden focus:border-[#2d5da1] focus:ring-2 focus:ring-[#2d5da1]/20 shadow-hard-sm transition-all ${className}`}
      style={{
        borderRadius: WOBBLY_RADIUS.input,
        ...style,
      }}
      {...props}
    />
  );
});
HandDrawnInput.displayName = 'HandDrawnInput';
