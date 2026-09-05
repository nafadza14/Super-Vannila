import React, { useState, useRef, useEffect } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface PartnerSectionProps {
  onOpenQuote?: () => void;
}

const marqueeImages = [
  'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80',
];

interface ThumbnailItem {
  id: number;
  x: number;
  y: number;
  rotation: number;
  image: string;
  createdAt: number;
}

export const PartnerSection: React.FC<PartnerSectionProps> = ({ onOpenQuote }) => {
  const { ref: sectionRef, isInView } = useInViewAnimation<HTMLElement>({ threshold: 0.1 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [thumbnails, setThumbnails] = useState<ThumbnailItem[]>([]);
  const lastSpawnTime = useRef<number>(0);
  const imageIndexRef = useRef<number>(0);
  const nextId = useRef<number>(1);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const now = performance.now();
    if (now - lastSpawnTime.current < 80) return; // 80ms throttle minimum
    lastSpawnTime.current = now;

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotation = Math.random() * 20 - 10; // -10 to +10 deg
    const image = marqueeImages[imageIndexRef.current % marqueeImages.length];
    imageIndexRef.current += 1;

    const newItem: ThumbnailItem = {
      id: nextId.current++,
      x,
      y,
      rotation,
      image,
      createdAt: Date.now(),
    };

    setThumbnails((prev) => [...prev, newItem]);
  };

  // Clean up thumbnails older than 1000ms with requestAnimationFrame
  useEffect(() => {
    let animId: number;

    const cleanLoop = () => {
      const now = Date.now();
      setThumbnails((prev) => {
        const filtered = prev.filter((item) => now - item.createdAt < 1000);
        return filtered.length === prev.length ? prev : filtered;
      });
      animId = requestAnimationFrame(cleanLoop);
    };

    animId = requestAnimationFrame(cleanLoop);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 px-6"
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className={`relative max-w-7xl mx-auto py-32 md:py-48 rounded-[40px] shadow-card-light bg-white border border-slate-100 overflow-hidden flex flex-col items-center justify-center text-center select-none ${
          isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.1s' }}
      >
        {/* Mouse trail floating thumbnails */}
        {thumbnails.map((item) => {
          const age = Date.now() - item.createdAt;
          const progress = Math.min(1, Math.max(0, age / 1000));
          const opacity = 1 - progress;
          const scale = 1 - progress * 0.4;

          return (
            <div
              key={item.id}
              className="absolute pointer-events-none rounded-xl overflow-hidden shadow-2xl z-10 will-change-transform"
              style={{
                left: `${item.x}px`,
                top: `${item.y}px`,
                width: '160px',
                height: '110px',
                transform: `translate(-50%, -50%) rotate(${item.rotation}deg) scale(${scale})`,
                opacity,
              }}
            >
              <img
                src={item.image}
                alt="preview"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          );
        })}

        {/* Centered Heading in PP Mondwest serif */}
        <h2 className="font-mondwest text-[48px] md:text-[64px] lg:text-[80px] text-[#0D212C] leading-none mb-12 tracking-tight z-20">
          Partner with us
        </h2>

        {/* CTA Button */}
        <button
          type="button"
          onClick={onOpenQuote}
          className="z-20 inline-flex items-center gap-4 bg-[#051A24] text-white rounded-full pl-3 pr-8 py-2.5 shadow-button-primary hover:bg-[#092736] transition-transform duration-200 active:scale-[0.98] cursor-pointer"
        >
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
            alt="Export Procurement Lead"
            className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
          />
          <span className="font-sans text-base font-medium">Talk to our export team</span>
        </button>
      </div>
    </section>
  );
};

export default PartnerSection;
