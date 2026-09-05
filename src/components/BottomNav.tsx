import React from 'react';
import Button from './Button';

export const BottomNav: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white rounded-full px-6 sm:px-8 py-2.5 shadow-floating-nav flex items-center gap-6 sm:gap-8 border border-slate-100/80 backdrop-blur-md">
        {/* "V" letter in PP Mondwest serif */}
        <a
          href="#"
          aria-label="Scroll to top"
          className="font-mondwest text-2xl font-semibold text-[#051A24] select-none hover:opacity-80 transition-opacity"
        >
          V
        </a>

        {/* "Start a chat" primary button */}
        <Button
          variant="primary"
          href="https://halaskastudio.com/./book"
          target="_blank"
          className="!px-6 !py-2 text-sm"
        >
          Start a chat
        </Button>
      </div>
    </aside>
  );
};

export default BottomNav;
