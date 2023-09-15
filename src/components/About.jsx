import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi, nice to meet you. Learn about me and my hobbies. Feel free to take a look around my profile.</p>
            </div>
            <div>
              <p>
                I have a strong enthusiasm for crafting exceptional applications
                that enhances the quality of life for those around me. I really enjoy
                perfecting a design into interactive interface which has been my method of
                working in the past.<br/>
                Besides coding, I love playing video games in my free time. I like
                to travel and go for a hike with my friends if I have a free weekend
                or when I am on a vacation. I also occasionally like cooking.🙂
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
