interface CharminarLogoProps {
  className?: string;
  badgeBg?: string;
  iconColor?: string;
}

export function CharminarLogo({
  className = 'w-6 h-6',
  badgeBg = 'bg-white',
  iconColor = 'text-black',
}: CharminarLogoProps) {
  return (
    <div
      className={`rounded-full ${badgeBg} ${iconColor} flex items-center justify-center shrink-0 overflow-hidden shadow-sm`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        className={className}
        aria-label="Charminar Hyderabad Logo"
      >
        {/* Base Plinths */}
        <rect x="29" y="79" width="9" height="1.8" rx="0.4" />
        <rect x="62" y="79" width="9" height="1.8" rx="0.4" />

        {/* Lower Minaret Pillars */}
        <rect x="30" y="60" width="7" height="19" />
        <rect x="63" y="60" width="7" height="19" />

        {/* Central Gateway with Ogee Arch Cutout */}
        <path d="M 37 57.5 L 63 57.5 L 63 80 L 58.5 80 L 58.5 66 C 58.5 61.5 54.5 59.8 50 61 C 45.5 59.8 41.5 61.5 41.5 66 L 41.5 80 L 37 80 Z" />

        {/* Lower Balconies (Left & Right) */}
        <path d="M 28 52 L 39 52 L 39 59.5 L 28 59.5 Z" />
        <path d="M 61 52 L 72 52 L 72 59.5 L 61 59.5 Z" />

        {/* White cutouts on lower balconies */}
        <rect x="29.5" y="53.5" width="1.8" height="4.2" rx="0.9" fill="#fff" />
        <rect x="32.5" y="53.5" width="2" height="4.2" rx="1" fill="#fff" />
        <rect x="35.5" y="53.5" width="2" height="4.2" rx="1" fill="#fff" />
        <rect x="62.5" y="53.5" width="2" height="4.2" rx="1" fill="#fff" />
        <rect x="65.5" y="53.5" width="2" height="4.2" rx="1" fill="#fff" />
        <rect x="68.5" y="53.5" width="1.8" height="4.2" rx="0.9" fill="#fff" />

        {/* Central Gallery Block */}
        <rect x="37" y="47" width="26" height="11" />
        {/* Central rosette medallion */}
        <circle cx="50" cy="55.5" r="1.3" fill="#fff" />
        {/* Gallery lower window cutouts */}
        <rect x="38.5" y="53.5" width="1.8" height="3.5" rx="0.9" fill="#fff" />
        <rect x="41.5" y="53.5" width="1.8" height="3.5" rx="0.9" fill="#fff" />
        <rect x="44.5" y="53.5" width="1.8" height="3.5" rx="0.9" fill="#fff" />
        <rect x="53.7" y="53.5" width="1.8" height="3.5" rx="0.9" fill="#fff" />
        <rect x="56.7" y="53.5" width="1.8" height="3.5" rx="0.9" fill="#fff" />
        <rect x="59.7" y="53.5" width="1.8" height="3.5" rx="0.9" fill="#fff" />

        {/* Upper Parapet 8 Arched Crenels */}
        <rect x="38.5" y="49" width="1.8" height="2.5" rx="0.9" fill="#fff" />
        <rect x="41.5" y="49" width="1.8" height="2.5" rx="0.9" fill="#fff" />
        <rect x="44.5" y="49" width="1.8" height="2.5" rx="0.9" fill="#fff" />
        <rect x="47.5" y="49" width="1.8" height="2.5" rx="0.9" fill="#fff" />
        <rect x="50.7" y="49" width="1.8" height="2.5" rx="0.9" fill="#fff" />
        <rect x="53.7" y="49" width="1.8" height="2.5" rx="0.9" fill="#fff" />
        <rect x="56.7" y="49" width="1.8" height="2.5" rx="0.9" fill="#fff" />
        <rect x="59.7" y="49" width="1.8" height="2.5" rx="0.9" fill="#fff" />

        {/* Middle Minaret Shafts */}
        <rect x="30.5" y="45" width="6" height="7.5" />
        <rect x="63.5" y="45" width="6" height="7.5" />

        {/* Middle Balconies */}
        <rect x="29" y="39.5" width="9" height="5.5" />
        <rect x="62" y="39.5" width="9" height="5.5" />
        <rect x="30.2" y="40.5" width="1.8" height="3.5" rx="0.9" fill="#fff" />
        <rect x="32.6" y="40.5" width="1.8" height="3.5" rx="0.9" fill="#fff" />
        <rect x="35.0" y="40.5" width="1.8" height="3.5" rx="0.9" fill="#fff" />
        <rect x="63.2" y="40.5" width="1.8" height="3.5" rx="0.9" fill="#fff" />
        <rect x="65.6" y="40.5" width="1.8" height="3.5" rx="0.9" fill="#fff" />
        <rect x="68.0" y="40.5" width="1.8" height="3.5" rx="0.9" fill="#fff" />

        {/* Upper Tier Shafts */}
        <rect x="31" y="33" width="5" height="6.5" />
        <rect x="64" y="33" width="5" height="6.5" />

        {/* Upper Lantern / Balcony */}
        <rect x="30" y="29.5" width="7" height="3.5" />
        <rect x="63" y="29.5" width="7" height="3.5" />
        <rect x="31" y="30.2" width="1.3" height="2.2" rx="0.6" fill="#fff" />
        <rect x="32.8" y="30.2" width="1.3" height="2.2" rx="0.6" fill="#fff" />
        <rect x="34.7" y="30.2" width="1.3" height="2.2" rx="0.6" fill="#fff" />
        <rect x="64" y="30.2" width="1.3" height="2.2" rx="0.6" fill="#fff" />
        <rect x="65.8" y="30.2" width="1.3" height="2.2" rx="0.6" fill="#fff" />
        <rect x="67.7" y="30.2" width="1.3" height="2.2" rx="0.6" fill="#fff" />

        {/* Minaret Domes & Spires */}
        <path d="M 31 29.5 C 31 24 36 24 36 29.5 Z" />
        <path d="M 64 29.5 C 64 24 69 24 69 29.5 Z" />
        {/* Finial / Spire */}
        <path d="M 33.5 24.5 L 33.5 19" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="33.5" cy="22" r="0.6" />
        <path d="M 66.5 24.5 L 66.5 19" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="66.5" cy="22" r="0.6" />
      </svg>
    </div>
  );
}
