/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
import QuoteModal from './components/QuoteModal';

const marqueeImages = [
  'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80',
];

// Duplicated 8 images (total 16) for seamless continuous marquee
const allMarqueeImages = [...marqueeImages, ...marqueeImages];

export default function App() {
  const { ref: heroRef, isInView: heroInView } = useInViewAnimation<HTMLElement>({ threshold: 0.1 });
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

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
          Super Vanilla
        </h1>

        {/* Tagline */}
        <p
          className={`font-mono text-xs md:text-sm text-[#051A24] mb-2 uppercase tracking-wide ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          Indonesian Vanilla · Direct from Origin
        </p>

        {/* Main Heading */}
        <div
          className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight whitespace-nowrap ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          <div>
            Premium Indonesian
          </div>
          <div>
            <span className="font-mondwest italic font-normal">vanilla beans,</span> sourced at origin.
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
            Super Vanilla is an Indonesian vanilla supplier and exporter providing premium vanilla
            beans directly from Indonesia for food manufacturers, extract producers, flavor houses, and global wholesale buyers.
          </p>
          <p>
            From Indonesian farms to your production line, we focus on quality sourcing, careful
            curing, consistent specifications, and reliable export fulfillment across international markets.
          </p>
          <p className="font-medium text-[#051A24]">
            Direct Indonesian Origin · Wholesale &amp; Bulk Supply · Export-Ready
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
            onClick={() => setIsQuoteModalOpen(true)}
          >
            Request a quote
          </Button>
          <Button
            variant="secondary"
            href="#projects"
          >
            Explore beans
          </Button>
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
