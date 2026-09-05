import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Button from './Button';
import { COMPANY_INFO } from '../data/company';

interface NavbarProps {
  onOpenQuote?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Products & Grades', href: '#products' },
    { label: 'Wholesale & Supply', href: '#wholesale' },
    { label: 'Origin & Curing', href: '#about' },
    { label: 'Buyer Reviews', href: '#reviews' },
    { label: 'Contact Desk', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group select-none"
          aria-label="Super Vanilla Homepage"
        >
          <span className="font-mondwest text-2xl md:text-[26px] font-semibold text-[#051A24] tracking-tight group-hover:opacity-80 transition-opacity">
            Super Vanilla
          </span>
        </a>

        {/* Desktop Direct Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#051A24]/80">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#051A24] transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#051A24] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-mono font-medium text-[#051A24] hover:bg-slate-100 px-3.5 py-2 rounded-full transition-colors border border-slate-200"
            aria-label="Direct Export WhatsApp Chat"
          >
            WA Desk
          </a>

          <Button
            variant="primary"
            onClick={onOpenQuote}
            className="!px-5 !py-2 text-xs md:text-sm whitespace-nowrap shadow-sm"
          >
            Request a quote
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenQuote?.()}
            className="sm:hidden px-3 py-1.5 text-xs font-medium bg-[#051A24] text-white rounded-full"
          >
            Quote
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 text-[#051A24] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 flex flex-col gap-4 animate-fade-in-up shadow-lg">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-mono uppercase text-[#051A24]/60">
              Direct Page Navigation
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
              Export Ready
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-[#051A24] hover:text-emerald-700 py-1.5 flex items-center justify-between transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <Button
              variant="primary"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuote?.();
              }}
              className="w-full justify-center !py-2.5 text-sm"
            >
              Request a quote
            </Button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-xs font-mono font-medium text-[#051A24] py-2.5 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <span>WA Desk (Direct Chat)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
