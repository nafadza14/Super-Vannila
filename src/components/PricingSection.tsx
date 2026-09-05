import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import Button from './Button';

export const PricingSection: React.FC = () => {
  const { ref: sectionRef, isInView } = useInViewAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="w-full py-12 px-6"
    >
      <div className="max-w-4xl mx-auto md:ml-auto md:mr-auto lg:mr-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:justify-end">
          {/* Card 1: Dark */}
          <div
            className={`bg-[#051A24] rounded-[40px] pl-10 pr-10 md:pr-24 pt-8 pb-10 shadow-[inset_0_2px_6px_rgba(255,255,255,0.15)] flex flex-col justify-between ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            <div>
              <h3 className="text-[22px] font-medium text-[#F6FCFF] mb-4">
                Monthly Partnership
              </h3>
              <p className="text-sm md:text-base text-[#E0EBF0] leading-relaxed mb-8">
                A dedicated creative design team.
                <br />
                You work directly with Viktor.
              </p>
            </div>

            <div>
              <div className="mb-6">
                <div className="text-2xl font-semibold text-[#F6FCFF]">$5,000</div>
                <div className="text-sm text-[#E0EBF0]/80">Monthly</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="primary"
                  href="https://halaskastudio.com/./book"
                  target="_blank"
                  className="!px-6 !py-2.5 text-sm"
                >
                  Start a chat
                </Button>
                <Button
                  variant="secondary"
                  href="https://halaskastudio.com/./book"
                  target="_blank"
                  className="!px-6 !py-2.5 text-sm"
                >
                  How it works
                </Button>
              </div>
            </div>
          </div>

          {/* Card 2: Light */}
          <div
            className={`bg-white rounded-[40px] pl-10 pr-10 md:pr-24 pt-8 pb-10 shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex flex-col justify-between ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <div>
              <h3 className="text-[22px] font-medium text-[#0D212C] mb-4">
                Custom Project
              </h3>
              <p className="text-sm md:text-base text-[#051A24]/75 leading-relaxed mb-8">
                Fixed scope, fixed timeline.
                <br />
                Same team, same standards.
              </p>
            </div>

            <div>
              <div className="mb-6">
                <div className="text-2xl font-semibold text-[#0D212C]">$5,000</div>
                <div className="text-sm text-[#051A24]/60">Minimum</div>
              </div>

              <div>
                <Button
                  variant="tertiary"
                  href="https://halaskastudio.com/./book"
                  target="_blank"
                  className="!px-6 !py-2.5 text-sm"
                >
                  Start a chat
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
