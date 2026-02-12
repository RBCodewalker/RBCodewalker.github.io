import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: '_hello', path: '/' },
  { label: '_about-me', path: '/about' },
  { label: '_projects', path: '/projects' },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="border-b border-theme-stroke flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center">
        <div className="px-[24px] py-[16px] shrink-0">
          <span className="text-body-md text-theme-fg">rajdeep_bastakoti</span>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center flex-1">
        {navItems.map((item) => {
          const isActive = item.path === '/'
            ? location.pathname === '/'
            : location.pathname.startsWith(item.path);
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`border-l border-theme-stroke px-[32px] py-[16px] text-body-md transition-colors ${
                isActive
                  ? 'text-heading border-b-[3px] border-b-primary'
                  : 'text-theme-fg hover:text-heading border-b-[3px] border-b-transparent'
              }`}
            >
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      {/* Contact (right side, desktop) */}
      <NavLink
        to="/contact"
        className={`hidden md:flex border-l border-theme-stroke px-[32px] py-[16px] text-body-md transition-colors ${
          location.pathname === '/contact'
            ? 'text-heading border-b-[3px] border-b-primary'
            : 'text-theme-fg hover:text-heading border-b-[3px] border-b-transparent'
        }`}
      >
        _contact-me
      </NavLink>

      {/* Mobile hamburger */}
      <button
        className="md:hidden px-[24px] py-[16px] text-theme-fg"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-theme-bg border-b border-theme-stroke z-50 md:hidden">
          {[...navItems, { label: '_contact-me', path: '/contact' }].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block border-b border-theme-stroke px-[24px] py-[16px] text-body-md ${
                (item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path))
                  ? 'text-heading'
                  : 'text-theme-fg'
              }`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
