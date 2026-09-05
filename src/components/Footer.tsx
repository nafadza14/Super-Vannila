import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Button from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-slate-100 pt-12">
        {/* Left side: Start a chat primary button */}
        <div>
          <Button
            variant="primary"
            href="https://halaskastudio.com/./book"
            target="_blank"
          >
            Start a chat
          </Button>
        </div>

        {/* Right side: ArrowUpRight icon + two columns of links */}
        <div className="flex items-start gap-8 md:gap-16">
          <ArrowUpRight className="w-6 h-6 text-[#051A24] shrink-0 mt-1" />

          {/* Column 1: Services, Work, About */}
          <div className="flex flex-col gap-3">
            <a
              href="#services"
              className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
            >
              About
            </a>
          </div>

          {/* Column 2: x.com, LinkedIn */}
          <div className="flex flex-col gap-3">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
            >
              x.com
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
