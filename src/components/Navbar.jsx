import React from 'react';
import { Link } from 'react-scroll';
import resume from '../assets/resume.pdf';
import { checkpoints } from '../data/siteData';

const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 w-full bg-[#081324]/90 backdrop-blur-md border-b border-slate-700/60 z-50'>
      <div className='max-w-[1200px] mx-auto px-4 sm:px-6 py-3'>
        <div className='hidden md:flex items-center justify-between gap-6'>
          <p className='text-gray-100 font-semibold text-sm lg:text-base tracking-wide'>Rajdeep Bastakoti</p>

          <nav aria-label='Main checkpoints' className='flex-1'>
            <ul className='flex items-center justify-center gap-2 lg:gap-3'>
              {checkpoints.map((checkpoint) => (
                <li key={checkpoint.id} className='p-0'>
                  <Link
                    to={checkpoint.sectionName}
                    spy={true}
                    smooth={true}
                    duration={450}
                    offset={-96}
                    activeClass='checkpoint-link-active'
                    className='checkpoint-link'
                  >
                    {checkpoint.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={resume}
            target='_blank'
            rel='noopener noreferrer'
            className='checkpoint-link whitespace-nowrap'
          >
            Resume
          </a>
        </div>

        <div className='md:hidden space-y-3'>
          <div className='flex items-center justify-between'>
            <p className='text-gray-100 font-semibold text-sm'>Rajdeep Bastakoti</p>
            <a
              href={resume}
              target='_blank'
              rel='noopener noreferrer'
              className='checkpoint-link text-xs'
            >
              Resume
            </a>
          </div>

          <nav aria-label='Mobile checkpoints' className='overflow-x-auto no-scrollbar'>
            <ul className='flex items-center gap-2 min-w-max pr-2'>
              {checkpoints.map((checkpoint) => (
                <li key={checkpoint.id} className='p-0'>
                  <Link
                    to={checkpoint.sectionName}
                    spy={true}
                    smooth={true}
                    duration={450}
                    offset={-118}
                    activeClass='checkpoint-link-active'
                    className='checkpoint-link text-xs'
                  >
                    {checkpoint.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
