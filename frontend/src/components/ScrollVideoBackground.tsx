import React, { useEffect, useRef, useCallback } from 'react';

const TOTAL_FRAMES = 240;

const getFrameUrl = (index: number): string => {
  const padded = String(index + 1).padStart(4, '0');
  return `/frames/frame_${padded}.jpg`;
};

export const ScrollVideoBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesCache = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const isAnimatingRef = useRef<boolean>(false);
  const lastRenderedIndexRef = useRef<number>(-1);

  // Helper to draw an image to canvas maintaining cover aspect ratio
  const renderImage = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    if (w === 0 || h === 0) return;

    const imgW = img.naturalWidth || 1280;
    const imgH = img.naturalHeight || 720;
    const imgRatio = imgW / imgH;
    const canvasRatio = w / h;

    let drawW = w;
    let drawH = h;
    let offX = 0;
    let offY = 0;

    if (canvasRatio > imgRatio) {
      drawH = w / imgRatio;
      offY = (h - drawH) / 2;
    } else {
      drawW = h * imgRatio;
      offX = (w - drawW) / 2;
    }

    ctx.drawImage(img, offX, offY, drawW, drawH);
  }, []);

  // Draw frame by index with fallback to closest cached frame
  const drawFrame = useCallback((frameIdx: number) => {
    const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIdx));
    const cachedImg = imagesCache.current[clamped];

    if (cachedImg && cachedImg.complete && cachedImg.naturalWidth > 0) {
      if (lastRenderedIndexRef.current === clamped) return;
      lastRenderedIndexRef.current = clamped;
      renderImage(cachedImg);
      return;
    }

    // Fallback: Find closest loaded frame to avoid flickering
    let closestImg: HTMLImageElement | null = null;
    let minDiff = Infinity;
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const candidate = imagesCache.current[i];
      if (candidate && candidate.complete && candidate.naturalWidth > 0) {
        const diff = Math.abs(i - clamped);
        if (diff < minDiff) {
          minDiff = diff;
          closestImg = candidate;
        }
      }
    }

    if (closestImg) {
      renderImage(closestImg);
    }
  }, [renderImage]);

  // Load a single frame into cache
  const loadFrame = useCallback((index: number, priority = false): Promise<HTMLImageElement> => {
    if (imagesCache.current[index]) {
      return Promise.resolve(imagesCache.current[index]!);
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = getFrameUrl(index);

      if (priority && 'decode' in img) {
        img.decode()
          .then(() => {
            imagesCache.current[index] = img;
            resolve(img);
          })
          .catch(() => {
            img.onload = () => {
              imagesCache.current[index] = img;
              resolve(img);
            };
            img.onerror = reject;
          });
      } else {
        img.onload = () => {
          imagesCache.current[index] = img;
          resolve(img);
        };
        img.onerror = reject;
      }
    });
  }, []);

  // Preload frames in window around current index
  const preloadNearbyFrames = useCallback((centerIndex: number, windowSize = 15) => {
    const start = Math.max(0, centerIndex - 5);
    const end = Math.min(TOTAL_FRAMES - 1, centerIndex + windowSize);
    for (let i = start; i <= end; i++) {
      loadFrame(i);
    }
  }, [loadFrame]);

  // Handle Canvas Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      lastRenderedIndexRef.current = -1; // force redraw
      drawFrame(Math.round(currentFrameRef.current));
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  // Initial Load: Frame 1 immediately as poster
  useEffect(() => {
    loadFrame(0, true).then((firstImg) => {
      renderImage(firstImg);
      // Preload initial buffer
      for (let i = 1; i < 20; i++) {
        loadFrame(i);
      }
    });

    // Progressive background loader for the remainder in chunks
    let chunkIndex = 20;
    const intervalId = setInterval(() => {
      if (chunkIndex >= TOTAL_FRAMES) {
        clearInterval(intervalId);
        return;
      }
      for (let i = chunkIndex; i < Math.min(TOTAL_FRAMES, chunkIndex + 10); i++) {
        loadFrame(i);
      }
      chunkIndex += 10;
    }, 200);

    return () => clearInterval(intervalId);
  }, [loadFrame, renderImage]);

  // Scroll driven animation loop with lerp smoothing
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      // Show static poster frame if reduced motion preferred
      loadFrame(0).then(renderImage);
      return;
    }

    const animationLoop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) < 0.04) {
        currentFrameRef.current = targetFrameRef.current;
        drawFrame(Math.round(currentFrameRef.current));
        isAnimatingRef.current = false;
        return;
      }

      currentFrameRef.current += diff * 0.22;
      drawFrame(Math.round(currentFrameRef.current));
      requestAnimationFrame(animationLoop);
    };

    const handleScroll = () => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const scrollFraction = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      const target = Math.min(
        Math.floor(scrollFraction * (TOTAL_FRAMES - 1)),
        TOTAL_FRAMES - 1
      );

      targetFrameRef.current = target;
      preloadNearbyFrames(target, 12);

      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true;
        requestAnimationFrame(animationLoop);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [drawFrame, loadFrame, renderImage, preloadNearbyFrames]);

  return (
    <div
      id="scroll-video-background-container"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Cinematic High-Performance Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block"
      />

      {/* Dark Readability Overlay */}
      <div className="absolute inset-0 bg-[#0A0A0C]/75 backdrop-blur-[0.5px]" />

      {/* Vignette & Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C]/85 via-[#0A0A0C]/40 to-[#0A0A0C]/90" />

      {/* Ambient Orange Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF5722]/10 rounded-full blur-[160px]" />
    </div>
  );
};

export default ScrollVideoBackground;
