import React, { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export const TestimonialSection: React.FC = () => {
  const { ref: sectionRef, isInView } = useInViewAnimation<HTMLElement>({ threshold: 0.1 });
  const [parallaxY, setParallaxY] = useState(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
      rafId.current = requestAnimationFrame(() => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Check if section is around viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Centered calculation: when rect is at center of screen, offset is 0
          const centerOffset = (rect.top + rect.height / 2) - (windowHeight / 2);
          // Scale to max offset 200px (-100px to +100px)
          const offset = Math.max(-100, Math.min(100, -centerOffset * 0.18));
          setParallaxY(offset);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [sectionRef]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 px-6 max-w-2xl mx-auto flex flex-col items-center text-center"
    >
      {/* Quote icon */}
      <div
        className={`mb-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        <Quote className="w-6 h-6 text-slate-900 mx-auto" />
      </div>

      {/* Large quote text */}
      <blockquote
        className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight font-sans mb-6 ${
          isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.2s' }}
      >
        &lsquo;Sourcing vanilla is easy. Finding the <span className="font-mondwest italic font-normal">right supplier</span> is not&rsquo;
      </blockquote>

      {/* Author */}
      <p
        className={`italic text-sm text-[#273C46] mb-8 ${
          isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.3s' }}
      >
        Super Vanilla Indonesia · Direct Origin Sourcing
      </p>

      {/* Company logos / key product types displayed as text */}
      <div
        className={`flex items-center justify-center gap-6 md:gap-10 mb-12 flex-wrap ${
          isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.4s' }}
      >
        <span
          className="font-medium text-slate-900 inline-block text-center tracking-tight"
          style={{ width: '100px', fontSize: '22px' }}
        >
          Planifolia
        </span>
        <span
          className="font-medium text-slate-900 inline-block text-center tracking-tight"
          style={{ width: '100px', fontSize: '22px' }}
        >
          Tahitensis
        </span>
        <span
          className="font-medium text-slate-900 inline-block text-center tracking-tight"
          style={{ width: '110px', fontSize: '22px' }}
        >
          Gourmet A
        </span>
      </div>

      {/* Parallax image */}
      <div
        className={`w-full flex justify-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.5s' }}
      >
        <div
          className="w-full max-w-xs rounded-2xl shadow-lg overflow-hidden transition-transform ease-out will-change-transform duration-75"
          style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=85"
            alt="Indonesian Vanilla Beans"
            className="w-full h-auto object-cover rounded-2xl"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
