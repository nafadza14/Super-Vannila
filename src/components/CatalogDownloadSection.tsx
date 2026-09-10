import React, { useState } from 'react';
import { Download, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { generateCatalogPdf } from '../utils/generateCatalogPdf';
import { CATALOG_INFO } from '../data/catalogData';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import CatalogPreviewModal from './CatalogPreviewModal';

interface CatalogDownloadSectionProps {
  onOpenQuote?: () => void;
}

export const CatalogDownloadSection: React.FC<CatalogDownloadSectionProps> = ({ onOpenQuote }) => {
  const { ref: sectionRef, isInView } = useInViewAnimation<HTMLElement>({ threshold: 0.1 });
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    try {
      generateCatalogPdf();
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.error('Download error:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section
      id="catalog"
      ref={sectionRef}
      className="w-full py-8 sm:py-12 px-4 sm:px-6 scroll-mt-24"
      aria-label="Official B2B Export Catalog"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-8 sm:mb-10 text-left ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          <div className="font-mono text-xs sm:text-sm text-[#051A24]/60 uppercase tracking-wider mb-2">
            Official B2B Export Catalog · 2026 Edition
          </div>
          <h2 className="font-mondwest text-3xl sm:text-4xl md:text-5xl text-[#0D212C] leading-tight tracking-tight mb-3">
            Mastering Vanilla Beyond the Farm
          </h2>
          <p className="text-sm md:text-base text-[#051A24]/75 leading-relaxed max-w-2xl">
            Complete technical catalog detailing botanical matrices, tiered FOB &amp; CIF pricing, curing specifications, moisture benchmarks, and certified export compliance from Indonesia.
          </p>
        </div>

        {/* Dual Card Layout matching site pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Dark Card (Export Catalog PDF) */}
          <div
            className={`bg-[#051A24] rounded-3xl md:rounded-[40px] p-6 sm:p-8 md:pl-10 md:pr-12 text-white shadow-[inset_0_2px_6px_rgba(255,255,255,0.15)] flex flex-col justify-between ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.15s' }}
          >
            <div>
              <div className="font-mono text-[11px] sm:text-xs text-white/60 uppercase tracking-wider mb-2">
                Super Vanilla · 8 Pages
              </div>
              <h3 className="text-xl sm:text-[22px] font-medium text-[#F6FCFF] mb-3">
                B2B Export Catalog &amp; Price List
              </h3>
              <p className="text-sm text-[#E0EBF0]/80 leading-relaxed mb-6">
                Direct export specifications for importers, industrial extractors, and food manufacturers worldwide.
              </p>

              {/* Monochromatic Specs List */}
              <div className="space-y-2 text-xs sm:text-sm text-[#E0EBF0]/90 border-t border-white/10 pt-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Diagnostic Matrix</span>
                  <span className="font-medium text-white">Planifolia vs. Tahitensis</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Wholesale Pricing</span>
                  <span className="font-medium text-white">Tiered FOB &amp; CIF</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Lab Documentation</span>
                  <span className="font-medium text-white">CoA &amp; Phytosanitary</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Harmonized Tariff</span>
                  <span className="font-mono text-[11px] text-white">HS 0905.10 / 0905.20</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs text-white/60 font-mono mb-4">
                Printable PDF · Instant Download
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="w-full sm:w-auto flex-1 bg-white text-[#051A24] font-medium text-sm rounded-full px-5 py-3 hover:bg-slate-100 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] disabled:opacity-75"
                >
                  {downloadSuccess ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-[#051A24]" />
                      <span>Downloaded</span>
                    </>
                  ) : isDownloading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#051A24] border-t-transparent rounded-full animate-spin" />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 text-[#051A24]" />
                      <span>Download PDF</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(true)}
                  className="w-full sm:w-auto border border-white/20 text-white font-medium text-sm rounded-full px-5 py-3 hover:bg-white/10 transition-colors inline-flex items-center justify-center cursor-pointer active:scale-[0.98]"
                >
                  Read online
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Light Card (Direct Origin Specifications) */}
          <div
            className={`bg-white rounded-3xl md:rounded-[40px] p-6 sm:p-8 md:pl-10 md:pr-12 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col justify-between text-[#0D212C] ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <div>
              <div className="font-mono text-[11px] sm:text-xs text-[#051A24]/60 uppercase tracking-wider mb-2">
                {CATALOG_INFO.legalEntity}
              </div>
              <h3 className="text-xl sm:text-[22px] font-medium text-[#0D212C] mb-3">
                Direct Origin Specifications
              </h3>
              <p className="text-sm text-[#051A24]/75 leading-relaxed mb-6">
                Direct supply network spanning 328 certified farmers across 314 volcanic agricultural yards in Indonesia.
              </p>

              {/* Monochromatic Specs List */}
              <div className="space-y-2 text-xs sm:text-sm text-[#051A24]/85 border-t border-slate-100 pt-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-[#051A24]/60">Monthly Capacity</span>
                  <span className="font-semibold text-[#0D212C]">13 Tons / Month</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#051A24]/60">Moisture Range</span>
                  <span className="font-semibold text-[#0D212C]">28%–35% (A) · 20%–25% (B)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#051A24]/60">Vanillin Concentration</span>
                  <span className="font-semibold text-[#0D212C]">&gt; 2.0% Natural (HPLC)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#051A24]/60">Export Packaging</span>
                  <span className="font-semibold text-[#0D212C]">1–5 kg Vacuum Sealed</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs text-[#051A24]/60 font-mono mb-4">
                FOB Jakarta / Surabaya · CIF Worldwide
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto flex-1 bg-[#051A24] text-white font-medium text-sm rounded-full px-5 py-3 hover:bg-[#092736] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <span>Request a quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${CATALOG_INFO.contact.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto border border-slate-200 text-[#051A24] font-medium text-sm rounded-full px-5 py-3 hover:bg-slate-50 transition-colors inline-flex items-center justify-center cursor-pointer active:scale-[0.98]"
                >
                  Export Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Monochrome Preview Modal */}
      <CatalogPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        onOpenQuote={onOpenQuote}
      />
    </section>
  );
};

export default CatalogDownloadSection;
