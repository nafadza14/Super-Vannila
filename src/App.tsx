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
import CatalogDownloadSection from './components/CatalogDownloadSection';
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
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6 sm:pt-10 md:pt-14 pb-4 flex flex-col items-start text-left"
      >
        {/* Main Heading (Rata Kiri) */}
        <h1
          className={`text-3xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.12] sm:leading-[1.08] text-[#0D212C] font-sans tracking-tight max-w-4xl text-left mb-5 sm:mb-6 ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          Premium Indonesian <br className="hidden sm:inline" />
          <span className="font-mondwest italic font-normal text-[#051A24]">vanilla beans,</span> sourced direct at origin.
        </h1>

        {/* Description / Value Proposition (Rata Kiri) */}
        <div
          className={`max-w-2xl text-sm sm:text-base md:text-lg text-[#051A24]/80 leading-relaxed text-left flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8 ${
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

        {/* Action Buttons (Rata Kiri & Mobile Friendly) */}
        <div
          className={`w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-2 ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <Button
            variant="primary"
            onClick={() => setIsQuoteModalOpen(true)}
            className="w-full sm:w-auto text-center justify-center !px-7 !py-3.5 text-sm md:text-base font-medium shadow-button-primary min-h-[46px]"
          >
            Request a wholesale quote
          </Button>
          <Button
            variant="secondary"
            href="#products"
            className="w-full sm:w-auto text-center justify-center !px-6 !py-3.5 text-sm md:text-base font-medium min-h-[46px]"
          >
            Explore grades &amp; specs
          </Button>
        </div>
      </section>

      {/* 2. INFINITE MARQUEE (FOTO YANG BERJALAN - LANGSUNG NAMPAK DI HERO) */}
      <section className="w-full overflow-hidden mt-3 sm:mt-6 mb-8 sm:mb-12 md:mb-14 select-none" aria-label="Selected vanilla origin showcase">
        <div className="animate-marquee">
          {allMarqueeImages.map((imageUrl, idx) => (
            <div key={`marquee-${idx}`} className="mx-2 sm:mx-3 shrink-0">
              <img
                src={imageUrl}
                alt={`Vanilla origin showcase ${idx + 1}`}
                className="h-[230px] sm:h-[300px] md:h-[420px] w-[180px] sm:w-[250px] md:w-[350px] object-cover rounded-xl sm:rounded-2xl shadow-md"
                loading={idx < 4 ? 'eager' : 'lazy'}
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 3. QUICK SPECS HIGHLIGHTS (DI BAWAH FOTO YANG BERJALAN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-6 md:py-8">
        <div className="w-full max-w-5xl mx-auto py-6 sm:py-8 px-5 sm:px-8 md:px-10 rounded-2xl sm:rounded-3xl bg-slate-50/70 border border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8 text-left">
          <div>
            <div className="font-mono text-[11px] sm:text-xs text-[#051A24]/60 uppercase tracking-wider">Grades</div>
            <div className="font-sans font-semibold text-sm sm:text-base md:text-lg text-[#051A24] mt-1">Gourmet A &amp; Grade B</div>
            <div className="text-[11px] sm:text-xs text-[#051A24]/70 mt-0.5">16–22cm Gourmet Pods</div>
          </div>
          <div>
            <div className="font-mono text-[11px] sm:text-xs text-[#051A24]/60 uppercase tracking-wider">Moisture</div>
            <div className="font-sans font-semibold text-sm sm:text-base md:text-lg text-[#051A24] mt-1">25% – 35%</div>
            <div className="text-[11px] sm:text-xs text-[#051A24]/70 mt-0.5">Slow solar-cured</div>
          </div>
          <div>
            <div className="font-mono text-[11px] sm:text-xs text-[#051A24]/60 uppercase tracking-wider">Vanillin Content</div>
            <div className="font-sans font-semibold text-sm sm:text-base md:text-lg text-[#051A24] mt-1">&gt; 2.0% Natural</div>
            <div className="text-[11px] sm:text-xs text-[#051A24]/70 mt-0.5">CoA Lab Verified</div>
          </div>
          <div>
            <div className="font-mono text-[11px] sm:text-xs text-[#051A24]/60 uppercase tracking-wider">Fulfillment</div>
            <div className="font-sans font-semibold text-sm sm:text-base md:text-lg text-[#051A24] mt-1">FOB &amp; CIF Global</div>
            <div className="text-[11px] sm:text-xs text-[#051A24]/70 mt-0.5">Phytosanitary Certified</div>
          </div>
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

      {/* 7. DOWNLOAD CATALOG SECTION (DIRECTLY ABOVE PARTNER WITH US) */}
      <CatalogDownloadSection onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* 8. PARTNER SECTION */}
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
