import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

function AccordionSection({ label, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="w-full">
      <button
        className="flex items-center gap-[12px] w-full px-[24px] py-[12px] text-body-md text-heading hover:bg-ide-slate-800/30 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <FaChevronRight
          size={12}
          className={`text-theme-fg transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
        />
        <span>{label}</span>
      </button>
      {open && (
        <div className="flex flex-col gap-[8px] p-[12px]">
          {children}
        </div>
      )}
    </div>
  );
}

export default AccordionSection;
