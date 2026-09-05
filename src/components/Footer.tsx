import React from 'react';
import { Instagram, Facebook, Linkedin, AtSign, ArrowUpRight } from 'lucide-react';
import Button from './Button';
import { COMPANY_INFO } from '../data/company';

interface FooterProps {
  onOpenQuote?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer className="w-full pt-12 sm:pt-16 pb-28 sm:pb-24 px-4 sm:px-6 border-t border-slate-200/80 bg-slate-50/40">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8">
        {/* Left Column: Brand, PT Name, Head Office, CTA */}
        <div className="md:col-span-5 flex flex-col items-start gap-4">
          <div className="flex flex-col">
            <span className="font-mondwest text-2xl sm:text-3xl font-semibold text-[#051A24] tracking-tight">
              {COMPANY_INFO.brandName}
            </span>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#051A24]/90 mt-1">
              {COMPANY_INFO.legalName}
            </span>
          </div>

          <div className="text-sm text-[#051A24]/75 leading-relaxed mt-1 max-w-sm">
            <div className="font-mono text-xs font-semibold uppercase text-[#051A24] mb-1">
              Head Office:
            </div>
            <div className="font-medium text-[#051A24]">{COMPANY_INFO.headOffice.title}</div>
            <div>{COMPANY_INFO.headOffice.address}</div>
            <div>{COMPANY_INFO.headOffice.postalCode}</div>
          </div>

          <div className="pt-2 w-full sm:w-auto">
            <Button
              variant="primary"
              onClick={onOpenQuote}
              className="w-full sm:w-auto justify-center !px-6 !py-3 text-sm shadow-sm min-h-[44px]"
            >
              Request a wholesale quote
            </Button>
          </div>
        </div>

        {/* Middle Column: Direct Page Navigation */}
        <div className="md:col-span-3 flex flex-col gap-2 pt-2 md:pt-0">
          <span className="font-mono text-xs uppercase tracking-wider text-[#051A24]/60 font-semibold mb-1">
            Navigation
          </span>
          <a href="#products" className="text-sm text-[#051A24] hover:opacity-70 transition-opacity py-1.5 flex items-center min-h-[36px]">
            Vanilla Beans &amp; Grades
          </a>
          <a href="#wholesale" className="text-sm text-[#051A24] hover:opacity-70 transition-opacity py-1.5 flex items-center min-h-[36px]">
            Wholesale &amp; Supply
          </a>
          <a href="#about" className="text-sm text-[#051A24] hover:opacity-70 transition-opacity py-1.5 flex items-center min-h-[36px]">
            Direct Origin &amp; Curing
          </a>
          <a href="#reviews" className="text-sm text-[#051A24] hover:opacity-70 transition-opacity py-1.5 flex items-center min-h-[36px]">
            Buyer Reviews
          </a>
          <a href="#contact" className="text-sm text-[#051A24] hover:opacity-70 transition-opacity py-1.5 flex items-center min-h-[36px]">
            Contact &amp; Inquiry
          </a>
        </div>

        {/* Right Column: Direct Channels & Social Media */}
        <div className="md:col-span-4 flex flex-col gap-5 pt-2 md:pt-0">
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-xs uppercase tracking-wider text-[#051A24]/60 font-semibold mb-1">
              Direct Contact
            </span>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-mono text-[#051A24] hover:opacity-70 transition-opacity py-1"
            >
              <span>WhatsApp: {COMPANY_INFO.whatsappNumber}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#051A24]/60" />
            </a>
            <a
              href="https://supervanilla.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[#051A24] hover:opacity-70 transition-opacity py-1"
            >
              <span>Official Website: supervanilla.id</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#051A24]/60" />
            </a>
          </div>

          <div className="flex flex-col gap-2.5 pt-2 border-t border-slate-200/80">
            <span className="font-mono text-xs uppercase tracking-wider text-[#051A24]/60 font-semibold mb-1">
              Connect With Us
            </span>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#051A24] hover:text-emerald-700 transition-colors py-2 min-h-[44px]"
                aria-label="Instagram @sup.ervanilla"
              >
                <Instagram className="w-4 h-4 text-[#051A24]/80" />
                <span>Instagram</span>
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#051A24] hover:text-emerald-700 transition-colors py-2 min-h-[44px]"
                aria-label="Facebook Super Vanilla"
              >
                <Facebook className="w-4 h-4 text-[#051A24]/80" />
                <span>Facebook</span>
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#051A24] hover:text-emerald-700 transition-colors py-2 min-h-[44px]"
                aria-label="LinkedIn Super Vanilla"
              >
                <Linkedin className="w-4 h-4 text-[#051A24]/80" />
                <span>LinkedIn</span>
              </a>
              <a
                href={COMPANY_INFO.socials.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#051A24] hover:text-emerald-700 transition-colors py-2 min-h-[44px]"
                aria-label="Threads @sup.ervanilla"
              >
                <AtSign className="w-4 h-4 text-[#051A24]/80" />
                <span>Threads</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

