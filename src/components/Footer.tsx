import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Button from './Button';

interface FooterProps {
  onOpenQuote?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer className="w-full py-12 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-slate-100 pt-12">
        {/* Left side: Request a quote primary button */}
        <div>
          <Button
            variant="primary"
            onClick={onOpenQuote}
          >
            Request a quote
          </Button>
        </div>

        {/* Right side: ArrowUpRight icon + two columns of links */}
        <div className="flex items-start gap-8 md:gap-16">
          <ArrowUpRight className="w-6 h-6 text-[#051A24] shrink-0 mt-1" />

          {/* Column 1: Vanilla Beans, Wholesale, Direct Origin */}
          <div className="flex flex-col gap-3">
            <a
              href="#products"
              className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
            >
              Vanilla Beans
            </a>
            <a
              href="#services"
              className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
            >
              Wholesale Supply
            </a>
            <a
              href="#about"
              className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
            >
              Direct Origin
            </a>
          </div>

          {/* Column 2: supervanilla.id, WhatsApp */}
          <div className="flex flex-col gap-3">
            <a
              href="https://supervanilla.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
            >
              supervanilla.id
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
            >
              WhatsApp Desk
            </a>
            <button
              type="button"
              onClick={onOpenQuote}
              className="text-base text-[#051A24] hover:opacity-70 transition-opacity text-left cursor-pointer"
            >
              Export Inquiries
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
