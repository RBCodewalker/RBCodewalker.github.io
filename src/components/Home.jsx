import React, { useEffect, useRef } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import Photo from '../assets/Me.jpeg';
import { profile } from '../data/siteData';

const Home = () => {
  const typewriterRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const roles = ['Software Developer', 'Design Perfectionist', 'Tech Enthusiast'];
    const element = typewriterRef.current;

    if (!element) {
      return;
    }

    const canMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia === 'function';
    const reduceMotion = canMatchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;
    if (reduceMotion) {
      element.textContent = roles[0];
      return;
    }

    let currentIndex = 0;
    let isActive = true;

    const animateRole = () => {
      if (!isActive || !element) {
        return;
      }

      const currentRole = roles[currentIndex];
      const timeline = gsap.timeline({
        onComplete: () => {
          currentIndex = (currentIndex + 1) % roles.length;
          animateRole();
        },
      });

      timelineRef.current = timeline;

      for (let i = 0; i <= currentRole.length; i += 1) {
        timeline.call(() => {
          if (element) {
            element.textContent = currentRole.substring(0, i);
          }
        });
        timeline.to({}, { duration: 0.055 });
      }

      timeline.to({}, { duration: 1.2 });

      for (let i = currentRole.length; i >= 0; i -= 1) {
        timeline.call(() => {
          if (element) {
            element.textContent = currentRole.substring(0, i);
          }
        });
        timeline.to({}, { duration: 0.04 });
      }
    };

    animateRole();

    return () => {
      isActive = false;
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <section
      name='home'
      className='relative w-full min-h-screen bg-gradient-to-br from-[#091427] via-[#0a192f] to-[#122947] text-gray-200 px-6 sm:px-8 pt-36 pb-16'
    >
      <div className='max-w-[1200px] mx-auto grid md:grid-cols-[1.2fr_0.8fr] items-center gap-10'>
        <div className='space-y-6'>
          <p className='text-red-400 tracking-wide text-sm uppercase'>Hello, my name is</p>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'>{profile.name}</h1>
          <h2 className='text-xl sm:text-2xl text-slate-300 font-semibold'>{profile.title}</h2>
          <p className='text-lg sm:text-xl text-slate-200 font-semibold'>
            I am a <span ref={typewriterRef} className='text-red-400'></span>
            <span className='text-red-400 animate-pulse'>|</span>
          </p>
          <p className='text-base sm:text-lg leading-relaxed text-slate-300 max-w-[720px]'>{profile.summary}</p>

          <div className='flex flex-wrap items-center gap-4'>
            <Link
              to='experience'
              smooth='easeOutCubic'
              duration={260}
              offset={-96}
              className='group inline-flex h-12 min-w-[170px] items-center justify-center gap-2 rounded-full border border-slate-300/50 bg-slate-900/45 px-5 text-slate-100 font-semibold transition-all duration-300 hover:cursor-pointer hover:border-red-400 hover:bg-red-500/15'
            >
              Find Out More
              <HiArrowNarrowRight className='text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-45' />
            </Link>
            <Link
              to='contact'
              smooth='easeOutCubic'
              duration={260}
              offset={-96}
              className='inline-flex h-12 min-w-[170px] items-center justify-center rounded-full border border-slate-300/50 bg-slate-900/45 px-5 text-slate-100 font-semibold transition-all duration-300 hover:cursor-pointer hover:border-red-400 hover:bg-red-500/15'
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className='mx-auto md:ml-auto w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-red-500/30 shadow-[0_24px_90px_rgba(14,165,233,0.2)]'>
          <img src={Photo} alt='Rajdeep Bastakoti' className='w-full h-full object-cover' />
        </div>
      </div>

      <div className='hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center'>
        <Link to='about' smooth='easeOutCubic' duration={260} offset={-96} className='cursor-pointer'>
          <div className='w-8 h-12 border-2 border-slate-400 rounded-full flex justify-center p-2'>
            <div className='w-1 h-3 bg-red-500 rounded-full animate-scroll'></div>
          </div>
          <p className='text-slate-400 text-sm mt-2'>Scroll</p>
        </Link>
      </div>

      <div className='md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center'>
        <Link to='about' smooth='easeOutCubic' duration={220} offset={-118} className='cursor-pointer flex flex-col items-center'>
          <svg width='50' height='60' viewBox='0 0 50 60' className='animate-finger-swipe'>
            <ellipse cx='25' cy='45' rx='8' ry='10' fill='#9ca3af' opacity='0.8' />
            <rect x='21' y='35' width='8' height='15' rx='3' fill='#9ca3af' opacity='0.8' />
            <path
              d='M25 5 L25 28 M18 12 L25 5 L32 12'
              stroke='#ef4444'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              fill='none'
            />
          </svg>
          <p className='text-slate-400 text-sm mt-1 font-medium'>Swipe up</p>
        </Link>
      </div>
    </section>
  );
};

export default Home;
