/**
 * High-fidelity vector illustrations recreating the botanical and landscape visual cards
 * from the reference design on pure black backgrounds.
 */

export function AmberFlowerVisual({ className = "w-full h-full" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-neutral-950 flex items-center justify-center ${className}`}>
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-radial from-amber-500/20 via-orange-950/10 to-transparent blur-xl" />
      
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="amberPetalGrad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#D97706" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#78350F" stopOpacity="0.1" />
          </radialGradient>
          <radialGradient id="amberPetalGrad2" cx="30%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#451A03" stopOpacity="0" />
          </radialGradient>
          <filter id="bloomGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer ambient blur petals */}
        <g filter="url(#bloomGlow)" opacity="0.6">
          <ellipse cx="200" cy="200" rx="140" ry="85" transform="rotate(35 200 200)" fill="url(#amberPetalGrad1)" />
          <ellipse cx="200" cy="200" rx="130" ry="75" transform="rotate(-40 200 200)" fill="url(#amberPetalGrad2)" />
        </g>

        {/* Detailed organic flower petal curves */}
        <g opacity="0.9">
          {/* Petal 1 */}
          <path
            d="M 200 200 C 130 110, 110 50, 180 30 C 240 15, 270 90, 200 200 Z"
            fill="url(#amberPetalGrad2)"
            opacity="0.85"
          />
          {/* Petal 2 */}
          <path
            d="M 200 200 C 270 120, 340 100, 360 160 C 375 220, 300 250, 200 200 Z"
            fill="url(#amberPetalGrad1)"
            opacity="0.9"
          />
          {/* Petal 3 */}
          <path
            d="M 200 200 C 280 270, 320 330, 250 360 C 190 380, 170 300, 200 200 Z"
            fill="url(#amberPetalGrad2)"
            opacity="0.85"
          />
          {/* Petal 4 */}
          <path
            d="M 200 200 C 120 280, 70 310, 45 250 C 25 190, 110 160, 200 200 Z"
            fill="url(#amberPetalGrad1)"
            opacity="0.88"
          />
          {/* Petal 5 */}
          <path
            d="M 200 200 C 160 130, 80 120, 95 60 C 110 10, 190 100, 200 200 Z"
            fill="url(#amberPetalGrad2)"
            opacity="0.75"
          />
        </g>

        {/* Center glowing pistil and stamen core */}
        <circle cx="200" cy="200" r="28" fill="#FFFBEB" opacity="0.9" />
        <circle cx="200" cy="200" r="16" fill="#F59E0B" />
        
        {/* Fine petal veins */}
        <path d="M 200 200 Q 220 120 230 60" stroke="#FFF7ED" strokeWidth="1.2" opacity="0.5" strokeLinecap="round" />
        <path d="M 200 200 Q 270 180 330 170" stroke="#FFF7ED" strokeWidth="1.2" opacity="0.5" strokeLinecap="round" />
        <path d="M 200 200 Q 150 260 120 310" stroke="#FFF7ED" strokeWidth="1.2" opacity="0.5" strokeLinecap="round" />
        <path d="M 200 200 Q 120 170 60 180" stroke="#FFF7ED" strokeWidth="1.2" opacity="0.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function HighlandForestVisual({ className = "w-full h-full" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-neutral-950 flex items-center justify-center ${className}`}>
      {/* Sky/Atmosphere gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-emerald-950/40 to-neutral-950" />
      
      {/* Fog mist layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-stone-900/40" />
      
      <svg
        viewBox="0 0 500 650"
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="forestMistGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#1E293B" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#022C22" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Distant mountain ridges in mist */}
        <path d="M 0 320 Q 130 250 250 280 T 500 270 L 500 650 L 0 650 Z" fill="#14211D" opacity="0.5" />
        <path d="M 0 370 Q 180 320 340 350 T 500 330 L 500 650 L 0 650 Z" fill="#0C1F1A" opacity="0.7" />

        {/* Forest Pines - Background layer */}
        <g opacity="0.5" fill="#112F25">
          {[20, 60, 110, 160, 210, 260, 310, 370, 420, 460].map((x, i) => (
            <path
              key={`pine-bg-${i}`}
              d={`M ${x} ${380 + (i % 3) * 15} L ${x + 22} ${450 + (i % 3) * 15} L ${x - 22} ${450 + (i % 3) * 15} Z
                 M ${x} ${430 + (i % 3) * 15} L ${x + 28} ${500 + (i % 3) * 15} L ${x - 28} ${500 + (i % 3) * 15} Z`}
            />
          ))}
        </g>

        {/* Foreground sharp pines and fir trees */}
        <g opacity="0.85" fill="#064E3B">
          {[40, 100, 180, 240, 320, 400, 460].map((x, i) => (
            <g key={`pine-fg-${i}`}>
              <polygon points={`${x},${440 + (i % 2) * 20} ${x + 28},${530 + (i % 2) * 20} ${x - 28},${530 + (i % 2) * 20}`} />
              <polygon points={`${x},${510 + (i % 2) * 20} ${x + 36},${600 + (i % 2) * 20} ${x - 36},${600 + (i % 2) * 20}`} />
            </g>
          ))}
        </g>

        {/* Atmospheric mist drifting across */}
        <ellipse cx="250" cy="420" rx="260" ry="40" fill="#E2E8F0" opacity="0.08" />
        <ellipse cx="180" cy="500" rx="240" ry="35" fill="#E2E8F0" opacity="0.06" />
      </svg>
    </div>
  );
}

export function BotanicalFoliageVisual({ className = "w-full h-full" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-neutral-950 flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-radial from-emerald-900/30 via-neutral-950 to-neutral-950" />
      
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.75">
          {/* Main leaf stalk */}
          <path d="M 60 280 Q 180 200 320 60" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
          
          {/* Leaf fronds */}
          {[
            { x: 100, y: 240, dx: 30, dy: -25, r: 18 },
            { x: 130, y: 215, dx: -25, dy: -20, r: -22 },
            { x: 170, y: 180, dx: 35, dy: -20, r: 24 },
            { x: 205, y: 150, dx: -30, dy: -18, r: -26 },
            { x: 240, y: 120, dx: 30, dy: -15, r: 20 },
            { x: 275, y: 90, dx: -25, dy: -12, r: -18 },
            { x: 310, y: 65, dx: 20, dy: -10, r: 15 },
          ].map((l, i) => (
            <ellipse
              key={i}
              cx={l.x + l.dx}
              cy={l.y + l.dy}
              rx={22}
              ry={11}
              transform={`rotate(${l.r} ${l.x + l.dx} ${l.y + l.dy})`}
              fill="#10B981"
              opacity="0.8"
            />
          ))}
        </g>
        
        {/* Soft morning dew circles */}
        <circle cx="210" cy="140" r="3" fill="#FFFFFF" opacity="0.7" />
        <circle cx="280" cy="85" r="2.5" fill="#FFFFFF" opacity="0.6" />
      </svg>
    </div>
  );
}

export function ChamomileVisual({ className = "w-full h-full" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-neutral-950 flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-radial from-amber-500/15 via-neutral-950 to-neutral-950" />
      
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(200, 150)">
          {/* White delicate petals */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="-55"
              rx="12"
              ry="45"
              transform={`rotate(${deg})`}
              fill="#FFFFFF"
              opacity={i % 2 === 0 ? "0.85" : "0.7"}
            />
          ))}
          {/* Golden pollen center */}
          <circle cx="0" cy="0" r="26" fill="#F59E0B" />
          <circle cx="0" cy="0" r="18" fill="#FBBF24" opacity="0.9" />
          <circle cx="3" cy="-3" r="12" fill="#FEF08A" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

export function MistyForestVisual({ className = "w-full h-full" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-neutral-950 flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-800/20 to-neutral-950" />
      <svg
        viewBox="0 0 400 600"
        className="w-full h-full object-cover"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.6">
          {/* Slender misty pine trunks */}
          {[60, 110, 170, 230, 290, 350].map((x, i) => (
            <line
              key={i}
              x1={x}
              y1="40"
              x2={x + (i % 2 === 0 ? 8 : -6)}
              y2="580"
              stroke="#A8A29E"
              strokeWidth={i % 3 === 0 ? "4" : "2"}
              opacity={0.3 + (i % 3) * 0.2}
            />
          ))}
        </g>
        {/* Soft fog horizontal bands */}
        <rect x="0" y="240" width="400" height="120" fill="#E7E5E4" opacity="0.07" />
        <rect x="0" y="380" width="400" height="100" fill="#E7E5E4" opacity="0.05" />
      </svg>
    </div>
  );
}
