import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import Button from './Button';

interface PricingSectionProps {
  onOpenQuote?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenQuote }) => {
  const { ref: sectionRef, isInView } = useInViewAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="wholesale"
      ref={sectionRef}
      className="w-full py-8 sm:py-12 px-4 sm:px-6 scroll-mt-24"
    >
      <div id="services" className="sr-only" />
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Dark */}
          <div
            className={`bg-[#051A24] rounded-3xl md:rounded-[40px] p-6 sm:p-8 md:pl-10 md:pr-14 shadow-[inset_0_2px_6px_rgba(255,255,255,0.15)] flex flex-col justify-between ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            <div>
              <h3 className="text-xl sm:text-[22px] font-medium text-[#F6FCFF] mb-3 sm:mb-4">
                Wholesale &amp; Bulk Supply
              </h3>
              <p className="text-sm md:text-base text-[#E0EBF0] leading-relaxed mb-6 sm:mb-8">
                Direct supply for extract producers, food manufacturers &amp; distributors.
                <br />
                Custom moisture, vanillin specs &amp; full export documentation.
              </p>
            </div>

            <div>
              <div className="mb-5 sm:mb-6">
                <div className="text-xl sm:text-2xl font-semibold text-[#F6FCFF]">Wholesale</div>
                <div className="text-xs sm:text-sm text-[#E0EBF0]/80">Custom FOB / CIF Pricing</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="primary"
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto justify-center !px-6 !py-3 sm:!py-2.5 text-sm min-h-[44px]"
                >
                  Request a quote
                </Button>
                <Button
                  variant="secondary"
                  href="#products"
                  className="w-full sm:w-auto justify-center !px-6 !py-3 sm:!py-2.5 text-sm min-h-[44px]"
                >
                  Our process
                </Button>
              </div>
            </div>
          </div>

          {/* Card 2: Light */}
          <div
            className={`bg-white rounded-3xl md:rounded-[40px] p-6 sm:p-8 md:pl-10 md:pr-14 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col justify-between ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <div>
              <h3 className="text-xl sm:text-[22px] font-medium text-[#0D212C] mb-3 sm:mb-4">
                Gourmet Grade A Beans
              </h3>
              <p className="text-sm md:text-base text-[#051A24]/75 leading-relaxed mb-6 sm:mb-8">
                Selected whole pods for bakeries, confectionery &amp; specialty brands.
                <br />
                Plump, oily texture, high aroma &amp; rich vanillin crystallization.
              </p>
            </div>

            <div>
              <div className="mb-5 sm:mb-6">
                <div className="text-xl sm:text-2xl font-semibold text-[#0D212C]">Grade A</div>
                <div className="text-xs sm:text-sm text-[#051A24]/60">Export-grade packaging</div>
              </div>

              <div>
                <Button
                  variant="tertiary"
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto justify-center !px-6 !py-3 sm:!py-2.5 text-sm min-h-[44px]"
                >
                  Request a quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
