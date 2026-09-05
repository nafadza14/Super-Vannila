/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useInViewAnimation } from './hooks/useInViewAnimation';
import Navbar from './components/Navbar';
import Button from './components/Button';
import TestimonialSection from './components/TestimonialSection';
import PricingSection from './components/PricingSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import ProjectsSection from './components/ProjectsSection';
import PartnerSection from './components/PartnerSection';
import Footer from './components/Footer';
import CopyrightBar from './components/CopyrightBar';
import BottomNav from './components/BottomNav';
import QuoteModal from './components/QuoteModal';
import { HERO_MARQUEE_PHOTOS } from './data/photos';

// Duplicated 13 images for seamless continuous marquee loop
const allMarqueeImages = [...HERO_MARQUEE_PHOTOS, ...HERO_MARQUEE_PHOTOS];

export default function App() {
  const { ref: heroRef, isInView: heroInView } = useInViewAnimation<HTMLElement>({ threshold: 0.1 });
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#051A24] font-sans antialiased overflow-x-hidden selection:bg-[#051A24] selection:text-white">
      {/* 0. DIRECT NAVIGATION NAVBAR */}
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* 1. HERO SECTION (RATA KIRI / LEFT-ALIGNED) */}
      <section
        ref={heroRef}
        className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 md:pt-14 pb-4 flex flex-col items-start text-left"
      >
        {/* Origin Pill / Badge */}
        <div
          className={`inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#051A24]/5 border border-[#051A24]/10 text-xs font-mono uppercase tracking-wider text-[#051A24] mb-5 ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          Indonesian Vanilla Origin · Direct Bulk &amp; Wholesale Exporter
        </div>

        {/* Main Heading (Rata Kiri) */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.08] text-[#0D212C] font-sans tracking-tight max-w-4xl text-left mb-6 ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          Premium Indonesian <br className="hidden sm:inline" />
          <span className="font-mondwest italic font-normal text-[#051A24]">vanilla beans,</span> sourced direct at origin.
        </h1>

        {/* Description / Value Proposition (Rata Kiri) */}
        <div
          className={`max-w-2xl text-base md:text-lg text-[#051A24]/80 leading-relaxed text-left flex flex-col gap-4 mb-8 ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          <p>
            Super Vanilla is an Indonesian vanilla grower, curer, and international exporter. We supply export-grade Gourmet Planifolia and Tahitensis beans directly to global food manufacturers, extract producers, flavor houses, and wholesale distributors.
          </p>
          <p>
            From volcanic soil farms across Indonesia to your processing facility, we guarantee consistent vanillin content, controlled moisture curing, and streamlined phytosanitary &amp; export clearance.
          </p>
        </div>

        {/* Action Buttons (Rata Kiri) */}
        <div
          className={`flex flex-wrap items-center gap-3 sm:gap-4 mb-10 ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <Button
            variant="primary"
            onClick={() => setIsQuoteModalOpen(true)}
            className="!px-7 !py-3.5 text-sm md:text-base font-medium shadow-button-primary"
          >
            Request a wholesale quote
          </Button>
          <Button
            variant="secondary"
            href="#products"
            className="!px-6 !py-3.5 text-sm md:text-base font-medium"
          >
            Explore grades &amp; specs
          </Button>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#051A24] px-4 py-3 rounded-full hover:bg-slate-100 transition-colors border border-slate-200"
          >
            <span>WhatsApp Export Desk</span>
            <span className="text-slate-400">→</span>
          </a>
        </div>

        {/* Quick Specs Highlights (Rata Kiri) */}
        <div
          className={`w-full max-w-4xl pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          <div>
            <div className="font-mono text-xs text-[#051A24]/60 uppercase">Grades</div>
            <div className="font-sans font-semibold text-base sm:text-lg text-[#051A24] mt-0.5">Gourmet A &amp; Grade B</div>
            <div className="text-xs text-[#051A24]/70 mt-0.5">16–22cm Gourmet Pods</div>
          </div>
          <div>
            <div className="font-mono text-xs text-[#051A24]/60 uppercase">Moisture</div>
            <div className="font-sans font-semibold text-base sm:text-lg text-[#051A24] mt-0.5">25% – 35%</div>
            <div className="text-xs text-[#051A24]/70 mt-0.5">Slow solar-cured</div>
          </div>
          <div>
            <div className="font-mono text-xs text-[#051A24]/60 uppercase">Vanillin Content</div>
            <div className="font-sans font-semibold text-base sm:text-lg text-[#051A24] mt-0.5">&gt; 2.0% Natural</div>
            <div className="text-xs text-[#051A24]/70 mt-0.5">CoA Lab Verified</div>
          </div>
          <div>
            <div className="font-mono text-xs text-[#051A24]/60 uppercase">Fulfillment</div>
            <div className="font-sans font-semibold text-base sm:text-lg text-[#051A24] mt-0.5">FOB &amp; CIF Global</div>
            <div className="text-xs text-[#051A24]/70 mt-0.5">Phytosanitary Certified</div>
          </div>
        </div>
      </section>

      {/* 2. INFINITE MARQUEE */}
      <section className="w-full overflow-hidden mt-16 md:mt-20 mb-16 select-none" aria-label="Selected vanilla origin showcase">
        <div className="animate-marquee">
          {allMarqueeImages.map((imageUrl, idx) => (
            <div key={`marquee-${idx}`} className="mx-3 shrink-0">
              <img
                src={imageUrl}
                alt={`Vanilla origin showcase ${idx + 1}`}
                className="h-[280px] md:h-[500px] w-[240px] md:w-[420px] object-cover rounded-2xl shadow-lg"
                loading={idx < 4 ? 'eager' : 'lazy'}
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 3. TESTIMONIAL QUOTE SECTION */}
      <TestimonialSection />

      {/* 4. PRICING SECTION */}
      <PricingSection onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* 5. TESTIMONIAL CAROUSEL */}
      <TestimonialCarousel />

      {/* 6. PROJECTS SECTION */}
      <ProjectsSection />

      {/* 7. PARTNER SECTION */}
      <PartnerSection onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* 8. FOOTER */}
      <Footer onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* 9. COPYRIGHT BAR */}
      <CopyrightBar />

      {/* 10. FIXED BOTTOM NAV */}
      <BottomNav onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* Quotation Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
