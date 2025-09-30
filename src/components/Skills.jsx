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
  const skills = [
    { icon: HTML, name: 'HTML' },
    { icon: CSS, name: 'CSS' },
    { icon: JavaScript, name: 'JavaScript' },
    { icon: ReactImg, name: 'React' },
    { icon: GitHub, name: 'GitHub' },
    { icon: Flask, name: 'Flask' },
    { icon: Node, name: 'Node.js' },
    { icon: Angular, name: 'Angular' },
    { icon: Tailwind, name: 'Tailwind' },
    { icon: Bootstrap, name: 'Bootstrap' },
    { icon: TypeScript, name: 'TypeScript' },
    { icon: Figma, name: 'Figma' },
  ];

  return (
    <div name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-20'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-6 sm:px-8 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-red-600'>Skills</p>
              <p className='py-4 text-lg'>These are the technologies I have worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center'>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className='shadow-lg shadow-[#040c16] hover:shadow-red-600/50 hover:scale-110 transition-all duration-300 rounded-lg p-6 bg-[#112240]'
                >
                  <img className='w-16 h-16 mx-auto object-contain' src={skill.icon} alt={`${skill.name} icon`} />
                  <p className='mt-4 font-semibold text-sm'>{skill.name}</p>
                </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default Skills;
