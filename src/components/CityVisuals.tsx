import { useState } from 'react';

interface CityImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClass?: string;
  overlayGradient?: boolean;
}

export function HighResCityImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  aspectClass = 'w-full h-full',
  overlayGradient = true,
}: CityImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-neutral-950 flex items-center justify-center ${aspectClass}`}>
      {/* Skeleton / ambient dark backdrop */}
      <div
        className={`absolute inset-0 bg-neutral-900 transition-opacity duration-700 ${
          loaded ? 'opacity-0' : 'opacity-100 animate-pulse'
        }`}
      />

      {/* Real Image */}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          className={`${className} transition-all duration-700 hover:scale-105 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        /* Fallback architectural graphic if network hiccups */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-neutral-900 to-black">
          <svg viewBox="0 0 100 100" className="w-16 h-16 text-white/30 mb-2" fill="none" stroke="currentColor">
            <path d="M20 90V40L50 20L80 40V90H20Z" strokeWidth="2" />
            <path d="M35 90V60H65V90" strokeWidth="2" />
            <circle cx="50" cy="40" r="8" strokeWidth="2" />
          </svg>
          <span className="text-xs text-white/50 font-medium">{alt}</span>
        </div>
      )}

      {/* Subtle Dark Vignette matching pure black aesthetic */}
      {overlayGradient && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      )}
    </div>
  );
}

// 1. High Resolution Charminar - Iconic Vertical & Architectural Views
export const CHARMINAR_HERO = "https://upload.wikimedia.org/wikipedia/commons/7/71/Charminar_Hyderabad_1.jpg";
export const CHARMINAR_FRONT = "https://upload.wikimedia.org/wikipedia/commons/a/af/Charminar-front.jpg";
export const LAAD_BAZAAR_CHARMINAR = "https://upload.wikimedia.org/wikipedia/commons/8/86/Laad_Bazaar.jpg";

// 2. City Portraits & Dreamers (high-res portraits of Indian innovators and city youth)
export const DREAMER_PORTRAIT_1 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80";
export const DREAMER_PORTRAIT_2 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80";
export const DREAMER_PORTRAIT_3 = "https://images.unsplash.com/photo-1582233479366-6d38bc390a08?auto=format&fit=crop&w=1200&q=80";
export const DREAMER_PORTRAIT_4 = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80";

// 3. Hyderabad Dream Landmarks (Cyberabad, Golconda, Chowmahalla)
export const HYDERABAD_CYBERABAD_SKYLINE = "https://upload.wikimedia.org/wikipedia/commons/5/57/Aerial_view_of_Durgam_cheruvu_and_Hitech_CIty.jpg";
export const GOLCONDA_FORT = "https://upload.wikimedia.org/wikipedia/commons/c/cd/Golconda_Fort_Hyderabad.jpg";
export const CHOWMAHALLA_PALACE = "https://upload.wikimedia.org/wikipedia/commons/c/ce/Chowmahalla_Palace_01.jpg";
