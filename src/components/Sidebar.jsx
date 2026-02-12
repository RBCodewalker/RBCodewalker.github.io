import React from 'react';

function Sidebar({ children, className = '' }) {
  return (
    <aside className={`w-[311px] shrink-0 border-r border-theme-stroke hidden md:flex ${className}`}>
      {children}
    </aside>
  );
}

export default Sidebar;
