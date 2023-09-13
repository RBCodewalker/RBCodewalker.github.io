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

import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Photo from '../assets/Me.jpeg';
// import { useHistory } from 'react-router-dom';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-center items-center h-full'>
        {/* Photo */}
        <div className="sm:w-1/2 relative mb-4 sm:mb-0">
          <img src={Photo} alt="Rajdeep Bastakoti" className="w-full rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-tl from-[#0a192f] via-transparent to-[#0a192f]"></div>
        </div>
        
        {/* Text */}
        <div className="sm:w-1/2 text-center sm:text-left sm:pl-8">
          <p className='text-pink-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
            Hi, my name is
          </p>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#ccd6f6]'>
            Rajdeep Bastakoti
          </h1>
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#8892b0]'>
            I'm a Full Stack Developer.
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[700px] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
            I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.
          </p>
          <div>
            <button className='text-white group border-2 px-4 sm:px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-2 sm:ml-3 ' />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;



