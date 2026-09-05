import React from 'react';
import Button from './Button';
import { COMPANY_INFO } from '../data/company';

interface BottomNavProps {
  onOpenQuote?: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ onOpenQuote }) => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[96vw]">
      <div className="bg-white/95 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 shadow-floating-nav flex items-center gap-2 sm:gap-3.5 border border-slate-200/90 backdrop-blur-md">
        {/* "SV" letters in PP Mondwest serif */}
        <a
          href="#"
          aria-label="Scroll to top"
          className="font-mondwest text-xl sm:text-2xl font-semibold text-[#051A24] select-none hover:opacity-80 transition-opacity tracking-tighter pl-1"
        >
          SV
        </a>

        {/* "Request a quote" primary button */}
        <Button
          variant="primary"
          onClick={onOpenQuote}
          className="!px-3.5 sm:!px-5 !py-2 text-xs sm:text-sm whitespace-nowrap shadow-sm min-h-[38px] flex items-center"
        >
          Request a quote
        </Button>

        {/* WA Desk button directly to the right */}
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-mono text-xs sm:text-sm font-medium text-[#051A24] border border-slate-200 hover:bg-slate-100/90 px-3 sm:px-4 py-2 rounded-full transition-colors whitespace-nowrap min-h-[38px]"
          aria-label="WhatsApp Export Desk"
        >
          WA Desk
        </a>
      </div>
    </aside>
  );
};

export default BottomNav;

