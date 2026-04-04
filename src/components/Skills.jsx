import React from 'react';
import { skillsByCategory } from '../data/siteData';

const Skills = () => {
  return (
    <section name='skills' className='w-full min-h-screen bg-[#081324] text-gray-300 py-24 px-6 sm:px-8'>
      <div className='max-w-[1100px] mx-auto'>
        <div className='pb-8'>
          <p className='text-3xl sm:text-4xl font-bold inline border-b-4 border-red-600'>Skills</p>
          <p className='py-4 text-lg text-slate-300'>Technologies I use across frontend, backend, and delivery workflows.</p>
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
          {skillsByCategory.map((group) => (
            <article
              key={group.category}
              className='bg-[#112240] border border-slate-700/70 rounded-2xl p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1'
            >
              <h3 className='text-xl font-bold text-white mb-5'>{group.category}</h3>
              <div className='flex flex-wrap gap-2'>
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1.5 rounded-full text-sm font-medium bg-[#0b1b36] border border-slate-600 text-slate-200'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
