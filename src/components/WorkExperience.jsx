import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { workExperience } from '../data/siteData';

const WorkExperience = () => {
  return (
    <section name='experience' className='w-full min-h-screen text-gray-300 bg-[#0a192f] py-24 px-6 sm:px-8'>
      <div className='max-w-[1100px] mx-auto'>
        <div className='pb-8'>
          <p className='text-3xl sm:text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>Work Experience</p>
          <p className='py-4 text-lg text-slate-300'>My Professional experience over the years.</p>
        </div>

        <div className='space-y-8'>
          {workExperience.map((work) => (
            <article
              key={work.id}
              className='bg-[#112240] border border-slate-700/70 p-6 md:p-8 rounded-2xl shadow-xl transition-transform duration-300 hover:-translate-y-1'
            >
              <div className='flex flex-col gap-2 mb-5'>
                <h3 className='text-xl md:text-2xl font-bold text-gray-100'>{work.company}</h3>
                <p className='text-slate-300'>{work.location} · {work.employmentType}</p>
              </div>

              <div className='mb-6'>
                <div className='flex flex-wrap items-center gap-2 sm:gap-4'>
                  {work.roles.map((role, index) => (
                    <React.Fragment key={`${role.title}-${role.start}`}>
                      <div className='bg-[#0b1b36] border border-slate-600 rounded-lg px-4 py-2'>
                        <p className='text-sm text-gray-100 font-semibold'>{role.title}</p>
                        <p className='text-xs text-slate-300'>{role.start} - {role.end}</p>
                      </div>
                      {index < work.roles.length - 1 && (
                        <div className='hidden sm:flex items-center gap-2 px-1'>
                          <span className='h-px w-8 bg-red-500/80'></span>
                          <span className='h-2.5 w-2.5 rounded-full bg-red-500'></span>
                          <span className='h-px w-8 bg-red-500/80'></span>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <ul className='space-y-3 mb-6'>
                {work.bullets.map((bullet) => (
                  <li key={bullet} className='text-slate-300 leading-relaxed flex gap-3'>
                    <span className='mt-2 h-2 w-2 rounded-full bg-red-500 flex-shrink-0'></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {work.shippedProducts && work.shippedProducts.length > 0 && (
                <div className='mb-6'>
                  <h4 className='text-base sm:text-lg font-semibold text-gray-100 mb-3'>End user-facing products shipped</h4>
                  <div className='flex flex-wrap gap-2'>
                    {work.shippedProducts.map((product) => (
                      <a
                        key={product.url}
                        href={product.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#0b1b36] border border-slate-500 text-slate-100 underline underline-offset-4 decoration-slate-300/70 hover:border-red-400 hover:text-white hover:decoration-red-300 transition-colors duration-200'
                      >
                        {product.label}
                        <FiExternalLink className='text-sm flex-shrink-0' aria-hidden='true' />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {work.disclosureNote && (
                <p className='mb-6 text-sm sm:text-base text-slate-400 leading-relaxed italic'>{work.disclosureNote}</p>
              )}

              <div className='flex flex-wrap gap-2'>
                {work.technologies.map((tech) => (
                  <span
                    key={tech}
                    className='px-3 py-1.5 rounded-full text-xs sm:text-sm bg-[#0b1b36] border border-slate-600 text-slate-200'
                  >
                    {tech}
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

export default WorkExperience;
