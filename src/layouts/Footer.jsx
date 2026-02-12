import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="border-t border-theme-stroke flex items-center justify-between">
      {/* Left: social links */}
      <div className="flex items-center">
        <div className="border-r border-theme-stroke px-[24px] py-[16px]">
          <span className="text-body-md text-theme-fg">find me in:</span>
        </div>
        {/* <a
          href="https://x.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-r border-theme-stroke p-[16px] text-theme-fg hover:text-heading transition-colors"
          aria-label="X (Twitter)"
        >
          <FaTwitter size={24} />
        </a> */}
        <a
          href="https://www.linkedin.com/in/rajdeepbastakoti/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-r border-theme-stroke p-[16px] text-theme-fg hover:text-heading transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      {/* Right: GitHub */}
      <a
        href="https://github.com/RBCodewalker"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-[8px] border-l border-theme-stroke px-[32px] py-[16px] text-theme-fg hover:text-heading transition-colors"
      >
        <span className="text-body-md hidden sm:inline">@rajdeep-bastakoti</span>
        <FaGithub size={24} />
      </a>
    </footer>
  );
}

export default Footer;
