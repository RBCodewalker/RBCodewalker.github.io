import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-20'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-6 sm:px-8'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-red-600'>
              About
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8 mt-8'>
            <div className='text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed'>
              <p>Hi, nice to meet you. Learn about me and my hobbies. Feel free to take a look around my profile.</p>
            </div>
            <div className='text-base md:text-lg leading-relaxed'>
              <p className='mb-4'>
                I have a strong enthusiasm for crafting exceptional applications
                that enhances the quality of life for those around me. I really enjoy
                perfecting a design into interactive interface which has been my method of
                working in the past.
              </p>
              <p>
                Besides coding, I love playing video games in my free time. I like
                to travel and go for a hike with my friends if I have a free weekend
                or when I am on a vacation. I also occasionally like cooking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
