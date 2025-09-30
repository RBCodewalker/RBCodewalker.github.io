// import React from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';
// import Photo from '../assets/Me.jpeg';


// const Home = () => {
//   return (
//     <div name='home' className='w-full h-screen bg-[#0a192f]'>
//       {/* Container */}
//       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
//         <p className='text-pink-600'>Hi, my name is</p>
//         <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
//           Rajdeep Bastakoti
//         </h1>
//         <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
//           I'm a Full Stack Developer.
//         </h2>
//         <p className='text-[#8892b0] py-4 max-w-[700px]'>
//           I’m a full-stack developer specializing in building (and occasionally
//           designing) exceptional digital experiences. Currently, I’m focused on
//           building responsive full-stack web applications.
//         </p>
//         <div>
//           <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
//             View Work
//             <span className='group-hover:rotate-90 duration-300'>
//               <HiArrowNarrowRight className='ml-3 ' />
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';
// import Photo from '../assets/Me.jpeg';

// const Home = () => {
//   return (
//     <div name='home' className='w-full h-screen bg-[#0a192f]'>
//       {/* Container */}
//       <div className='max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row justify-center items-center h-full'>
//         {/* Photo */}
//         <div className="md:w-1/2">
//           <img src={Photo} alt="Rajdeep Bastakoti" className="w-full rounded-full" />
//         </div>
        
//         {/* Text */}
//         <div className="md:w-1/2 text-center md:text-left md:pl-8">
//           <p className='text-pink-600'>Hi, my name is</p>
//           <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
//             Rajdeep Bastakoti
//           </h1>
//           <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
//             I'm a Full Stack Developer.
//           </h2>
//           <p className='text-[#8892b0] py-4 max-w-[700px]'>
//             I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.
//           </p>
//           <div>
//             <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
//               View Work
//               <span className='group-hover:rotate-90 duration-300'>
//                 <HiArrowNarrowRight className='ml-3 ' />
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';
// import Photo from '../assets/Me.jpeg';

// const Home = () => {
//   return (
//     <div name='home' className='w-full h-screen bg-[#0a192f]'>
//       {/* Container */}
//       <div className='max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row justify-center items-center h-full'>
//         {/* Photo */}
//         <div className="md:w-1/2 relative">
//           <img src={Photo} alt="Rajdeep Bastakoti" className="w-full rounded-full" />
//           <div className="absolute inset-0 bg-gradient-to-tl from-[#0a192f] via-transparent to-[#0a192f]"></div>
//         </div>
        
//         {/* Text */}
//         <div className="md:w-1/2 text-center md:text-left md:pl-8">
//           <p className='text-pink-600'>Hi, my name is</p>
//           <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
//             Rajdeep Bastakoti
//           </h1>
//           <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
//             I am a Frontend Developer.
//           </h2>
//           <p className='text-[#8892b0] py-4 max-w-[700px]'>
//             I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.
//           </p>
//           <div>
//             <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
//               View Work
//               <span className='group-hover:rotate-90 duration-300'>
//                 <HiArrowNarrowRight className='ml-3 ' />
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useRef } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Photo from '../assets/Me.jpeg';
import { Link } from 'react-scroll';
import gsap from 'gsap';

const Home = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const roles = ['Developer', 'Designer', 'Tech Enthusiast'];
    let currentIndex = 0;
    let isAnimating = true;

    const animateText = () => {
      if (!isAnimating) return;

      const text = roles[currentIndex];
      const element = typewriterRef.current;

      if (!element) return;

      const timeline = gsap.timeline();

      // Type each character
      let currentText = '';
      for (let i = 0; i <= text.length; i++) {
        timeline.add(() => {
          currentText = text.substring(0, i);
          if (element) element.textContent = currentText;
        });
        timeline.to({}, { duration: 0.08 });
      }

      // Pause after typing
      timeline.to({}, { duration: 2 });

      // Erase animation
      for (let i = text.length; i >= 0; i--) {
        timeline.add(() => {
          if (element) element.textContent = text.substring(0, i);
        });
        timeline.to({}, { duration: 0.05 });
      }

      // Pause before next word
      timeline.to({}, { duration: 0.3 });

      timeline.call(() => {
        if (isAnimating) {
          currentIndex = (currentIndex + 1) % roles.length;
          animateText();
        }
      });
    };

    animateText();

    return () => {
      isAnimating = false;
      gsap.killTweensOf(typewriterRef.current);
      gsap.killTweensOf({});
    };
  }, []);

  return (
    <div name='home' className='w-full min-h-screen bg-[#0a192f] py-20 md:py-0 relative'>
      {/* Container */}
      <div className='max-w-[1200px] mx-auto px-6 sm:px-8 flex flex-col-reverse md:flex-row-reverse justify-between items-center min-h-screen md:h-screen gap-6 md:gap-10'>
        {/* Text */}
        <div className="flex-1 text-center md:text-left w-full">
          <p className='text-red-600 text-sm md:text-base mb-2'>
            Hi, my name is
          </p>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#ccd6f6] mb-3 leading-tight'>
            Rajdeep Bastakoti
          </h1>
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#8892b0] mb-4 leading-tight flex justify-center md:justify-start'>
            <span className="whitespace-nowrap">I am a <span ref={typewriterRef} className="text-red-500"></span><span className="text-red-500 animate-pulse">|</span></span>
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[600px] text-base md:text-lg leading-relaxed mx-auto md:mx-0'>
          I am a frontend developer with some experience in backend as well as an eye for excellent interface design. I am focused on learning and improving my skills. Explore my profile!
          </p>
          <div className='flex justify-center md:justify-start mt-6'>
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 border-gray-300 px-6 py-3 flex items-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 rounded'>
                My Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
            </Link>
          </div>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
          <img
            src={Photo}
            alt="Rajdeep Bastakoti"
            className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-red-600/20 hover:border-red-600/40 transition-all duration-300"
          />
        </div>
      </div>

      {/* Scroll Indicator - Desktop */}
      <div className='hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce'>
        <Link to='about' smooth={true} duration={500} className='cursor-pointer'>
          <div className='w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center p-2'>
            <div className='w-1 h-3 bg-red-500 rounded-full animate-scroll'></div>
          </div>
          <p className='text-gray-400 text-sm mt-2'>Scroll</p>
        </Link>
      </div>

      {/* Scroll Indicator - Mobile */}
      <div className='md:hidden absolute bottom-[12rem] left-1/2 transform -translate-x-1/2 flex flex-col items-center'>
        <Link to='about' smooth={true} duration={500} className='cursor-pointer flex flex-col items-center'>
          <div className='relative'>
            <svg
              width="50"
              height="60"
              viewBox="0 0 50 60"
              className='animate-finger-swipe'
            >
              {/* Finger/Hand */}
              <ellipse cx="25" cy="45" rx="8" ry="10" fill="#9ca3af" opacity="0.8"/>
              <rect x="21" y="35" width="8" height="15" rx="3" fill="#9ca3af" opacity="0.8"/>

              {/* Arrow pointing up */}
              <path
                d="M25 5 L25 28 M18 12 L25 5 L32 12"
                stroke="#ef4444"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <p className='text-gray-400 text-sm mt-1 font-medium'>Swipe up</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;



