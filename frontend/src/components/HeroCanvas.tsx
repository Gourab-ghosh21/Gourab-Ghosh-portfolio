import React, { useRef, useEffect, useState } from 'react';

interface HeroCanvasProps {
  totalFrames?: number;
  className?: string;
  onLoadComplete?: () => void;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({
  totalFrames = 240,
  className = '',
  onLoadComplete,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(0);
  const targetFrameRef = useRef<number>(0);
  const animationFrameId = useRef<number | null>(null);

  // Preload frames
  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(4, '0');
      img.src = `/frames/frame_${frameNum}.jpg`;

      img.onload = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
        if (count === totalFrames && onLoadComplete) {
          onLoadComplete();
        }
      };

      // Fallback for missing/failed load
      img.onerror = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
      };

      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;

    return () => {
      isMounted = false;
    };
  }, [totalFrames, onLoadComplete]);

  // Render frame onto canvas
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Cover scale calculation
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Resize canvas according to container
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      renderFrame(targetFrameRef.current);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [loadedCount]);

  // Sync scroll position to frame index
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Map scroll ratio to frame range (0 to 239)
      const scrollRatio = Math.min(Math.max(scrollY / (window.innerHeight * 1.5), 0), 1);
      const frameIndex = Math.floor(scrollRatio * (totalFrames - 1));
      targetFrameRef.current = frameIndex;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalFrames]);

  // Smooth animation frame render loop
  useEffect(() => {
    let lastRenderedIndex = -1;

    const updateLoop = () => {
      const target = targetFrameRef.current;
      if (target !== lastRenderedIndex) {
        renderFrame(target);
        setCurrentFrameIndex(target);
        lastRenderedIndex = target;
      }
      animationFrameId.current = requestAnimationFrame(updateLoop);
    };

    animationFrameId.current = requestAnimationFrame(updateLoop);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [loadedCount]);

  // Mouse drag or hover scrubbing control over the canvas
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = Math.min(Math.max(x / rect.width, 0), 1);
    const frame = Math.floor(ratio * (totalFrames - 1));
    targetFrameRef.current = frame;
  };

  const progressPercent = Math.round((loadedCount / totalFrames) * 100);

  return (
    <div
      className={`relative overflow-hidden cursor-ew-resize group ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Loading state indicator */}
      {loadedCount < totalFrames && (
        <div className="absolute inset-0 bg-[#0A0A0C]/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center gap-3">
          <div className="w-12 h-12 border-2 border-[#FF5722]/20 border-t-[#FF5722] rounded-full animate-spin" />
          <span className="text-xs font-mono tracking-widest text-gray-400">
            LOADING FRAMES {progressPercent}%
          </span>
        </div>
      )}

      {/* Main Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]"
      />

      {/* Frame Scrubber Overlay Hint */}
      <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-[#0A0A0C]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-300">
          <span>DRAG / SCROLL TO ANIMATE PORTRAIT</span>
          <span className="text-[#FF5722] font-bold">
            FRAME {String(currentFrameIndex + 1).padStart(3, '0')} / {totalFrames}
          </span>
        </div>
      </div>
    </div>
  );
};
