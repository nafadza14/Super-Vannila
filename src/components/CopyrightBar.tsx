import React from 'react';
import { COMPANY_INFO } from '../data/company';

export const CopyrightBar: React.FC = () => {
  return (
    <div className="w-full pb-28 pt-4 px-6 border-t border-slate-200/60 bg-slate-50/70">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs md:text-sm text-[#051A24]/70 font-mono">
        <span>© {new Date().getFullYear()} {COMPANY_INFO.legalName} ({COMPANY_INFO.brandName})</span>
        <span>Kemranjen, Banyumas, Central Java 53194 · Indonesia</span>
      </div>
    </div>
  );
};

export default CopyrightBar;

