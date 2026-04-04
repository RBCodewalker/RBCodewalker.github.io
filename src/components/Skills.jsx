import React from 'react';
import {
  FaBolt,
  FaCodeBranch,
  FaDatabase,
  FaFilm,
  FaLayerGroup,
  FaMapMarkedAlt,
  FaMobileAlt,
  FaPaintBrush,
  FaReact,
  FaRocket,
  FaTools,
  FaVideo,
  FaWaveSquare,
} from 'react-icons/fa';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import javascriptIcon from '../assets/javascript.png';
import typescriptIcon from '../assets/ts.png';
import reactIcon from '../assets/react.png';
import angularIcon from '../assets/angular.png';
import nodeIcon from '../assets/node.png';
import flaskIcon from '../assets/flask.png';
import mongoIcon from '../assets/mongo.png';
import awsIcon from '../assets/aws.png';
import githubIcon from '../assets/github.png';
import figmaIcon from '../assets/figma.png';
import firebaseIcon from '../assets/firebase.png';
import { skillsByCategory } from '../data/siteData';

const assetIconMap = {
  HTML: htmlIcon,
  CSS: cssIcon,
  JavaScript: javascriptIcon,
  TypeScript: typescriptIcon,
  React: reactIcon,
  Angular: angularIcon,
  'Node.js': nodeIcon,
  Flask: flaskIcon,
  MongoDB: mongoIcon,
  AWS: awsIcon,
  Git: githubIcon,
  Figma: figmaIcon,
  Firebase: firebaseIcon,
};

const logoFallbackMap = {
  'React Native': FaMobileAlt,
  'React Query': FaReact,
  Zustand: FaLayerGroup,
  GSAP: FaWaveSquare,
  MUI: FaPaintBrush,
  D3: FaBolt,
  Fastify: FaRocket,
  SQL: FaDatabase,
  'CI/CD': FaCodeBranch,
  Leaflet: FaMapMarkedAlt,
  FFMPEG: FaVideo,
  Nexrender: FaFilm,
  Expo: FaRocket,
  'Google Analytics': FaBolt,
};

const renderSkillIcon = (skill) => {
  const assetIcon = assetIconMap[skill];
  if (assetIcon) {
    return <img src={assetIcon} alt={`${skill} logo`} className='w-4 h-4 object-contain' />;
  }

  const IconComponent = logoFallbackMap[skill] || FaTools;
  return <IconComponent aria-hidden='true' className='w-4 h-4 text-slate-200' />;
};

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
                  <div
                    key={skill}
                    className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-[#0b1b36] border border-slate-600 text-slate-200'
                  >
                    {renderSkillIcon(skill)}
                    {skill}
                  </div>
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
