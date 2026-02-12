import React from 'react';
import { FaTimes } from 'react-icons/fa';

function TabBar({ tabs = [], activeTab, onTabClose }) {
  return (
    <div className="border-b border-theme-stroke flex items-start">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`flex items-center gap-[12px] px-[24px] py-[12px] border-r border-theme-stroke text-body-md ${
            activeTab === tab.id ? 'text-heading' : 'text-theme-fg'
          }`}
        >
          <span>{tab.label}</span>
          {onTabClose && (
            <button
              onClick={() => onTabClose(tab.id)}
              className="text-theme-fg hover:text-heading transition-colors"
              aria-label={`Close ${tab.label}`}
            >
              <FaTimes size={12} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default TabBar;
