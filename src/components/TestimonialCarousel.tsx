import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

const baseTestimonials: Testimonial[] = [
  {
    name: 'Michael Thorne',
    role: 'Procurement Director',
    company: 'Pacific Flavor Labs (USA)',
    quote:
      'Super Vanilla delivers consistent moisture and vanillin levels shipment after shipment. Their direct origin sourcing and transparent export documentation gave us full supply chain confidence.',
    avatar:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Hélène Laurent',
    role: 'Master Pastry & Sourcing Lead',
    company: 'Maison Gourmande (France)',
    quote:
      'The gourmet Grade A Planifolia beans from Super Vanilla have an incredible oily sheen and rich vanillin aroma. Our pastry network relies completely on their quality.',
    avatar:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Dr. Kenji Sato',
    role: 'Head of R&D',
    company: 'Kyoto Botanical Extracts (Japan)',
    quote:
      'Finding reliable Grade B beans for extract production with zero synthetic additives was challenging until we partnered with Super Vanilla. Truly export-grade quality.',
    avatar:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Sarah Jenkins',
    role: 'VP Operations',
    company: 'Artisan Confectionery (Australia)',
    quote:
      'Their communication and export handling to Melbourne was seamless. Phytosanitary certificates and vacuum packaging arrived in pristine commercial condition.',
    avatar:
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Tobias Weber',
    role: 'Ingredient Sourcing Manager',
    company: 'Bavarian Dairy & Foods (Germany)',
    quote:
      'Direct connection to Indonesian vanilla origins without middleman markups. Super Vanilla is now our primary trusted partner for all bulk vanilla bean procurement.',
    avatar:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

// Tripled for infinite scroll effect
const testimonials: Testimonial[] = [
  ...baseTestimonials,
  ...baseTestimonials,
  ...baseTestimonials,
];

export const TestimonialCarousel: React.FC = () => {
  const { ref: sectionRef, isInView } = useInViewAnimation<HTMLElement>({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(baseTestimonials.length);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(427.5);
  const gap = 24;

  // Update card width on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) {
          setCardWidth(Math.max(280, window.innerWidth - 48));
        } else {
          setCardWidth(427.5);
        }
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      // When reaching near end of tripled array, seamlessly reset to middle
      if (next >= testimonials.length - 2) {
        return baseTestimonials.length;
      }
      return next;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      if (next < 0) {
        return baseTestimonials.length * 2 - 1;
      }
      return next;
    });
  }, []);

  // Auto-scrolling interval: 3s, pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const offset = currentIndex * (cardWidth + gap);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header row */}
      <div
        className={`px-6 mb-12 max-w-6xl mx-auto md:max-w-4xl md:ml-auto md:mr-12 lg:mr-24 flex flex-col sm:flex-row sm:items-end justify-between gap-6 ${
          isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.1s' }}
      >
        <div>
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight">
            What <span className="font-mondwest italic font-normal">buyers</span> say
          </h2>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-black text-black" />
              ))}
            </div>
            <span className="font-sans font-medium text-sm text-[#0D212C]">Verified B2B Export</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center text-[#0D212C] hover:bg-[#051A24] hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center text-[#0D212C] hover:bg-[#051A24] hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Track */}
      <div className="w-full px-6 overflow-hidden">
        <div
          className="flex gap-6 will-change-transform"
          style={{
            transform: `translateX(-${offset}px)`,
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {testimonials.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="bg-white rounded-[32px] md:rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-6 md:pl-10 md:pr-24 py-8 flex flex-col justify-between shrink-0 transition-opacity duration-300"
              style={{ width: `${cardWidth}px`, minHeight: '280px' }}
            >
              <div>
                {/* SVG Quote mark icon */}
                <div className="mb-6 text-[#0D212C]/80">
                  <svg
                    width="28"
                    height="22"
                    viewBox="0 0 28 22"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.7 21.6C2.6 21.6 0 17.7 0 12.3C0 5.4 5.3 0 11.8 0C13.2 0 14.1 0.7 14.1 1.9C14.1 3 13.3 3.9 12 4.3C7.9 5.6 5.8 8.6 5.6 12C6.4 11.5 7.4 11.2 8.5 11.2C11.8 11.2 14.1 13.5 14.1 16.6C14.1 19.6 11.4 21.6 7.7 21.6ZM21.6 21.6C16.5 21.6 13.9 17.7 13.9 12.3C13.9 5.4 19.2 0 25.7 0C27.1 0 28 0.7 28 1.9C28 3 27.2 3.9 25.9 4.3C21.8 5.6 19.7 8.6 19.5 12C20.3 11.5 21.3 11.2 22.4 11.2C25.7 11.2 28 13.5 28 16.6C28 19.6 25.3 21.6 21.6 21.6Z" />
                  </svg>
                </div>

                <p className="text-base text-[#0D212C] leading-relaxed mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author row */}
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#0D212C]/10"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-semibold text-sm text-[#0D212C]">{item.name}</div>
                  <div className="text-xs text-[#0D212C]/60">
                    &rarr; {item.role}, {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
