import React from 'react';
import { education } from '../data/siteData';

const Education = () => {
  return (
    <section name='education' className='w-full min-h-screen bg-[#081324] text-gray-300 py-24 px-6 sm:px-8'>
      <div className='max-w-[1000px] mx-auto'>
        <div className='pb-8'>
          <p className='text-3xl sm:text-4xl font-bold inline border-b-4 border-red-600'>Education</p>
          <p className='py-4 text-lg text-slate-300'>Academic foundation and coursework relevant to modern software engineering.</p>
        </div>

        <article className='bg-[#112240] border border-slate-700/70 rounded-2xl p-6 sm:p-8 shadow-xl'>
          <h3 className='text-2xl font-bold text-gray-100'>{education.degree}</h3>
          <p className='text-red-400 font-medium mt-1'>{education.minor}</p>
          <p className='text-slate-300 mt-2'>{education.institution}</p>
          <p className='text-slate-400'>{education.location} · {education.period}</p>

          <div className='mt-6'>
            <h4 className='text-lg font-semibold text-gray-100 mb-2'>Thesis</h4>
            <p className='text-slate-300 leading-relaxed'>{education.thesis}</p>
          </div>

          <div className='mt-6'>
            <h4 className='text-lg font-semibold text-gray-100 mb-3'>Key Coursework</h4>
            <ul className='space-y-2'>
              {education.coursework.map((item) => (
                <li key={item} className='text-slate-300 flex gap-3'>
                  <span className='mt-2 h-2 w-2 rounded-full bg-red-500 flex-shrink-0'></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Education;
