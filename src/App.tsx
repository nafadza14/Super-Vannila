/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useInViewAnimation } from './hooks/useInViewAnimation';
import Button from './components/Button';
import TestimonialSection from './components/TestimonialSection';
import PricingSection from './components/PricingSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import ProjectsSection from './components/ProjectsSection';
import PartnerSection from './components/PartnerSection';
import Footer from './components/Footer';
import CopyrightBar from './components/CopyrightBar';
import BottomNav from './components/BottomNav';

const marqueeGifs = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
];

// Duplicated 8 GIF images (total 16) for seamless continuous marquee
const allMarqueeGifs = [...marqueeGifs, ...marqueeGifs];

export default function App() {
  const { ref: heroRef, isInView: heroInView } = useInViewAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white text-[#051A24] font-sans antialiased overflow-x-hidden selection:bg-[#051A24] selection:text-white">
      {/* 1. HERO SECTION */}
      <section
        ref={heroRef}
        className="max-w-[440px] mx-auto px-6 pt-12 md:pt-16 flex flex-col"
      >
        {/* Logo text */}
        <h1
          className={`font-mondwest text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-[#051A24] tracking-tight mb-4 ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          Viktor Oddy
        </h1>

        {/* Tagline */}
        <p
          className={`font-mono text-xs md:text-sm text-[#051A24] mb-2 ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          The creative studio of Viktor Oddy
        </p>

        {/* Main Heading */}
        <div
          className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight whitespace-nowrap ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          <div>
            Build the <span className="font-mondwest italic font-normal">next wave,</span>
          </div>
          <div>
            <span className="font-mondwest italic font-normal">the bold way.</span>
          </div>
        </div>

        {/* Description: Three paragraphs */}
        <div
          className={`flex flex-col gap-6 text-sm md:text-base text-[#051A24] leading-relaxed mt-5 md:mt-6 ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <p>
            I spent seven years at Apple crafting products used by over a billion people. I founded
            Vortex Studio to bring that same level of thinking to innovators shaping what comes next.
          </p>
          <p>
            The studio is deliberately small. I guide the creative vision on every project, backed by a
            veteran design crew that moves fast without cutting corners.
          </p>
          <p className="font-medium text-[#051A24]">
            Projects start at $5,000 per month.
          </p>
        </div>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6 ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          <Button
            variant="primary"
            href="https://halaskastudio.com/./book"
            target="_blank"
          >
            Start a chat
          </Button>
          <Button
            variant="secondary"
            href="#projects"
          >
            View projects
          </Button>
        </div>
      </section>

      {/* 2. INFINITE MARQUEE */}
      <section className="w-full overflow-hidden mt-16 md:mt-20 mb-16 select-none" aria-label="Selected works showcase">
        <div className="animate-marquee">
          {allMarqueeGifs.map((gifUrl, idx) => (
            <div key={`marquee-${idx}`} className="mx-3 shrink-0">
              <img
                src={gifUrl}
                alt={`Project preview ${idx + 1}`}
                className="h-[280px] md:h-[500px] object-cover rounded-2xl shadow-lg"
                loading={idx < 4 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 3. TESTIMONIAL QUOTE SECTION */}
      <TestimonialSection />

      {/* 4. PRICING SECTION */}
      <PricingSection />

      {/* 5. TESTIMONIAL CAROUSEL */}
      <TestimonialCarousel />

      {/* 6. PROJECTS SECTION */}
      <ProjectsSection />

      {/* 7. PARTNER SECTION */}
      <PartnerSection />

      {/* 8. FOOTER */}
      <Footer />

      {/* 9. COPYRIGHT BAR */}
      <CopyrightBar />

      {/* 10. FIXED BOTTOM NAV */}
      <BottomNav />
    </div>
  );
}
