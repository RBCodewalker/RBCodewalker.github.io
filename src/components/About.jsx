import React from 'react';
import { profile } from '../data/siteData';

const About = () => {
  return (
    <section name='about' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-24 px-6 sm:px-8'>
      <div className='max-w-[1000px] mx-auto'>
        <p className='text-3xl sm:text-4xl font-bold inline border-b-4 border-red-600'>About</p>

        <div className='grid md:grid-cols-2 gap-8 mt-10'>
          <div className='bg-[#112240] rounded-2xl border border-slate-700/70 p-6 sm:p-8 shadow-xl'>
            <p className='text-xl sm:text-2xl font-semibold leading-relaxed text-gray-100'>{profile.aboutIntro}</p>
          </div>

          <div className='space-y-5 bg-[#112240] rounded-2xl border border-slate-700/70 p-6 sm:p-8 shadow-xl'>
            {profile.aboutDetails.map((item) => (
              <p key={item} className='text-base sm:text-lg leading-relaxed text-slate-300'>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
