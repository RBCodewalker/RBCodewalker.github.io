import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import TypeScript from '../assets/ts.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Angular from '../assets/angular.png';
import Flask from '../assets/flask.svg';
import Bootstrap from '../assets/bootstrap.png';
import Figma from '../assets/figma.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-red-600 '>Skills</p>
              <p className='py-4'>These are the technologies I have worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-2'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-1000'>
                  <img className='w-10 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-2'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-2'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-2'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-2'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={Flask} alt="HTML icon" />
                  <p className='my-2'>FLASK</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-2'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={Angular} alt="HTML icon" />
                  <p className='my-2'>ANGULAR</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-2'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={Bootstrap} alt="HTML icon" />
                  <p className='my-2'>BOOTSTRAP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={TypeScript} alt="HTML icon" />
                  <p className='my-2'>TYPESCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={Figma} alt="HTML icon" />
                  <p className='my-2'>FIGMA</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
