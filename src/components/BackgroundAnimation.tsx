import React, { useEffect, useRef } from 'react';

export const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const frameCount = 432;
    // Images are in the public/root directory (same level as index.html)
    // In Vite, assets in public/ are served at the root path, but since the images are just in the root,
    // they are served directly.
    const currentFrame = (index: number) => `/${index.toString().padStart(4, '0')}.jpg`;

    const images: HTMLImageElement[] = [];

    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images[i] = img;
      }
    };

    const img = new Image();
    img.src = currentFrame(1);
    
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    }

    let lastFrameIndex = 1;

    const updateImage = (index: number) => {
      if (index === lastFrameIndex) return;
      
      const targetImg = images[index];
      if (targetImg && targetImg.complete && targetImg.naturalWidth !== 0) {
        // Image is fully loaded, safe to draw
        lastFrameIndex = index;
        ctx.drawImage(targetImg, 0, 0);
      }
    }

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      
      const scrollFraction = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;
      
      const frameIndex = Math.min(
        frameCount,
        Math.max(1, Math.ceil(scrollFraction * frameCount))
      );
      
      requestAnimationFrame(() => updateImage(frameIndex));
    };

    window.addEventListener('scroll', handleScroll);
    preloadImages();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-black pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full object-cover" />
    </div>
  );
};
