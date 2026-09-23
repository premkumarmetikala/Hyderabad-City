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
    
    let lastFrameIndex = 1;

    const drawCover = (image: HTMLImageElement) => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = image.width / image.height;
      
      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > canvasRatio) {
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      } else {
        drawHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    };

    img.onload = function() {
      drawCover(img);
    }

    const updateImage = (index: number) => {
      if (index === lastFrameIndex) return;
      
      const targetImg = images[index];
      if (targetImg && targetImg.complete && targetImg.naturalWidth !== 0) {
        lastFrameIndex = index;
        drawCover(targetImg);
      }
    }

    const handleResize = () => {
      const targetImg = images[lastFrameIndex] || img;
      if (targetImg && targetImg.complete) {
        drawCover(targetImg);
      }
    };

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
    window.addEventListener('resize', handleResize);
    preloadImages();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-black pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};
