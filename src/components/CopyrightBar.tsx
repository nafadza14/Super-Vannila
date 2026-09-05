import React from 'react';

export const CopyrightBar: React.FC = () => {
  return (
    <div className="w-full pb-24 pt-4 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-row justify-between items-center text-sm text-[#051A24]">
        <span>Super Vanilla Indonesia (supervanilla.id)</span>
        <span>Jakarta · Bali · Alor, Indonesia</span>
      </div>
    </div>
  );
};

export default CopyrightBar;
