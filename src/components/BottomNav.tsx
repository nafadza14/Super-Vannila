import React from 'react';
import Button from './Button';
import { COMPANY_INFO } from '../data/company';

interface BottomNavProps {
  onOpenQuote?: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ onOpenQuote }) => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
      <div className="bg-white/95 rounded-full px-4 sm:px-6 py-2 shadow-floating-nav flex items-center gap-3 sm:gap-4 border border-slate-200/90 backdrop-blur-md">
        {/* "SV" letters in PP Mondwest serif */}
        <a
          href="#"
          aria-label="Scroll to top"
          className="font-mondwest text-2xl font-semibold text-[#051A24] select-none hover:opacity-80 transition-opacity tracking-tighter pl-1"
        >
          SV
        </a>

        {/* "Request a quote" primary button */}
        <Button
          variant="primary"
          onClick={onOpenQuote}
          className="!px-4 sm:!px-6 !py-2 text-xs sm:text-sm whitespace-nowrap shadow-sm"
        >
          Request a quote
        </Button>

        {/* WA Desk button directly to the right */}
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-mono text-xs sm:text-sm font-medium text-[#051A24] border border-slate-200 hover:bg-slate-100/90 px-3.5 sm:px-5 py-2 rounded-full transition-colors whitespace-nowrap"
          aria-label="WhatsApp Export Desk"
        >
          WA Desk
        </a>
      </div>
    </aside>
  );
};

export default BottomNav;

