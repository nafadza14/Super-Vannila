import React, { useState } from 'react';
import { X, Download, ChevronLeft, ChevronRight, FileText, CheckCircle2 } from 'lucide-react';
import { CATALOG_PAGES, CATALOG_INFO } from '../data/catalogData';
import { generateCatalogPdf } from '../utils/generateCatalogPdf';

interface CatalogPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote?: () => void;
}

export const CatalogPreviewModal: React.FC<CatalogPreviewModalProps> = ({
  isOpen,
  onClose,
  onOpenQuote,
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const currentPage = CATALOG_PAGES[currentPageIndex];
  const totalPages = CATALOG_PAGES.length;

  const handleDownload = () => {
    setIsDownloading(true);
    try {
      generateCatalogPdf();
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#051A24]/75 backdrop-blur-sm animate-fade-in-up"
      role="dialog"
      aria-modal="true"
      aria-label="Super Vanilla Export Catalog Viewer"
    >
      <div
        className="bg-white rounded-3xl md:rounded-[36px] max-w-4xl w-full p-4 sm:p-6 md:p-8 shadow-2xl border border-slate-200 max-h-[92vh] flex flex-col relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
              <FileText className="w-5 h-5 text-[#051A24]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mondwest text-xl md:text-2xl font-semibold text-[#051A24]">
                  Super Vanilla Catalog
                </span>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-slate-100 text-[#051A24] font-medium border border-slate-200">
                  {CATALOG_INFO.edition}
                </span>
              </div>
              <p className="text-xs text-[#051A24]/60 font-mono hidden sm:block">
                {CATALOG_INFO.legalEntity} · Page {currentPageIndex + 1} of {totalPages}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Download Button */}
            <button
              type="button"
              onClick={handleDownload}
              disabled={isDownloading}
              className="inline-flex items-center gap-2 bg-[#051A24] hover:bg-[#0D212C] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors shadow-sm active:scale-95 cursor-pointer disabled:opacity-75"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span className="hidden sm:inline">Downloaded</span>
                </>
              ) : isDownloading ? (
                <span>Generating...</span>
              ) : (
                <>
                  <Download className="w-4 h-4 text-white" />
                  <span className="hidden sm:inline">Download PDF</span>
                  <span className="sm:hidden">PDF</span>
                </>
              )}
            </button>

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close catalog viewer"
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-[#051A24] hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Section Navigation Tabs (Horizontal Scrollable) */}
        <div className="flex items-center gap-1.5 py-3 border-b border-slate-200 overflow-x-auto no-scrollbar shrink-0">
          {CATALOG_PAGES.map((page, idx) => (
            <button
              key={page.id}
              type="button"
              onClick={() => setCurrentPageIndex(idx)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                currentPageIndex === idx
                  ? 'bg-[#051A24] text-white'
                  : 'bg-white text-[#051A24]/70 hover:bg-slate-100 hover:text-[#051A24] border border-slate-200'
              }`}
            >
              {idx + 1}. {page.tag || page.title}
            </button>
          ))}
        </div>

        {/* Modal Body - Page Content Display */}
        <div className="flex-1 overflow-y-auto py-5 pr-1 text-left space-y-6">
          {/* Header of Active Page */}
          <div className="bg-slate-50/60 rounded-2xl p-5 sm:p-6 border border-slate-200 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#051A24]/70 font-semibold">
                {currentPage.tag} · Section {currentPageIndex + 1}
              </span>
              <span className="text-[11px] font-mono text-[#051A24]/50">
                HS Code 0905.10.00 / 0905.20.00
              </span>
            </div>
            <h3 className="font-mondwest text-2xl sm:text-3xl text-[#051A24] font-semibold leading-tight">
              {currentPage.title}
            </h3>
            {currentPage.subtitle && (
              <p className="text-xs sm:text-sm text-[#051A24]/75 mt-1 font-medium">
                {currentPage.subtitle}
              </p>
            )}

            {/* Paragraphs */}
            <div className="mt-4 space-y-2 text-xs sm:text-sm text-[#051A24]/80 leading-relaxed">
              {currentPage.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Metrics Grid if available */}
          {currentPage.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {currentPage.metrics.map((m, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-3.5 border border-slate-200 flex flex-col justify-between"
                >
                  <div className="font-mono text-[10px] uppercase text-[#051A24]/60 font-semibold">
                    {m.label}
                  </div>
                  <div className="font-mondwest text-xl sm:text-2xl font-bold text-[#051A24] my-1">
                    {m.value}
                  </div>
                  {m.desc && <div className="text-[10px] text-[#051A24]/60">{m.desc}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Highlights List if available */}
          {currentPage.highlights && (
            <div className="space-y-3">
              {currentPage.highlights.map((h, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 border border-slate-200 flex gap-3 items-start"
                >
                  <div className="w-6 h-6 rounded-full bg-slate-100 text-[#051A24] text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5 border border-slate-200">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#051A24]">{h.title}</h4>
                    <p className="text-xs text-[#051A24]/75 mt-1 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Table if available */}
          {currentPage.table && (
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#051A24] text-white font-mono text-[11px] uppercase tracking-wider">
                      {currentPage.table.headers.map((h, i) => (
                        <th key={i} className="py-3 px-4 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {currentPage.table.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={rIdx % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-slate-50/50 hover:bg-slate-100'}
                      >
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`py-2.5 px-4 text-[#051A24] ${
                              cIdx === 0
                                ? 'font-semibold'
                                : cIdx === row.length - 1
                                ? 'font-mono font-semibold'
                                : ''
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Bottom callout in Dark (#051A24) */}
          <div className="bg-[#051A24] text-white rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="text-white text-xs font-mono uppercase tracking-wider font-semibold">
                Direct Origin Compliance
              </div>
              <p className="text-xs text-white/80 mt-1 max-w-md leading-relaxed">
                All export parameters are verified by {CATALOG_INFO.legalEntity}. FOB &amp; CIF export agreements provided with phytosanitary inspection and CoA.
              </p>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={handleDownload}
                className="bg-white text-[#051A24] font-medium text-xs px-4 py-2.5 rounded-full transition-colors hover:bg-slate-100 flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#051A24]" />
                <span>Save Full PDF</span>
              </button>
              {onOpenQuote && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenQuote();
                  }}
                  className="bg-white/10 hover:bg-white/20 text-white text-xs px-4 py-2.5 rounded-full transition-colors border border-white/20 cursor-pointer"
                >
                  Request Quote
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Footer Navigation Controls */}
        <div className="pt-3 border-t border-slate-200 flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={() => setCurrentPageIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentPageIndex === 0}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 text-xs font-medium text-[#051A24] hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <span className="text-xs font-mono text-[#051A24]/70">
            {currentPageIndex + 1} of {totalPages}
          </span>

          <button
            type="button"
            onClick={() => setCurrentPageIndex((prev) => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPageIndex === totalPages - 1}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 text-xs font-medium text-[#051A24] hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogPreviewModal;
