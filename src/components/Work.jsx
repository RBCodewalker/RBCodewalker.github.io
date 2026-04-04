import React from 'react';
import { data } from "../data/data.js";

const resolveProjectImage = (imageName) => {
  if (!imageName) return null;

  const extensionMatch = imageName.match(/\.[a-zA-Z0-9]+$/);
  const hasExtension = Boolean(extensionMatch);
  const extension = hasExtension ? extensionMatch[0] : '.png';
  const baseName = hasExtension ? imageName.slice(0, -extension.length) : imageName;

  const candidates = [
    imageName,
    `project_${baseName}${extension}`,
    `project-${baseName}${extension}`,
  ];

  for (const candidate of candidates) {
    try {
      const source = require(`../assets/projects/${candidate}`);
      return source.default || source;
    } catch (error) {
      // Try next naming variant.
    }
  }

  return null;
};

const Work = () => {

    // projects file
    const project = data;

  return (
    <div name='work' className='w-full min-h-screen text-gray-300 bg-[#0a192f] py-20'>
      <div className='max-w-[1000px] mx-auto px-6 sm:px-8 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>
            Projects
          </p>
          <p className='py-6 text-lg'>Check out personal projects and shipped user-facing products</p>
        </div>

{/* container for projects */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {project.map((item) => {
            const imageSrc = item.image || resolveProjectImage(item.imageName);
            return (
              <div
                key={item.id}
                className="relative group rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-[#112240]"
              >
                {/* Background Image */}
                <div
                  style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : undefined}
                  className={`w-full h-48 transition-transform duration-300 group-hover:scale-110 ${
                    imageSrc ? 'bg-contain bg-center bg-no-repeat' : 'bg-gradient-to-br from-[#1a2f4d] to-[#112240] flex items-center justify-center'
                  }`}
                >
                  {!imageSrc && (
                    <span className='text-gray-300 text-sm font-semibold px-4 text-center'>Shipped Product</span>
                  )}
                </div>

                {/* Card footer - always visible */}
                <div className="p-3 bg-[#112240]">
                  <h3 className="text-base font-bold text-gray-200 mb-1">{item.name}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                  <div className="mt-3">
                    <span className="inline-flex items-center rounded-full border border-slate-500 bg-[#0b1b36] px-2.5 py-1 text-[11px] font-semibold text-slate-200">
                      {item.projectOrigin || 'Personal'}
                    </span>
                  </div>
                </div>

                {/* Buttons overlay - slide up on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/95 to-[#0a192f]/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-center items-center gap-4 p-6">
                  <h3 className="text-2xl font-bold text-white text-center mb-2">{item.name}</h3>
                  <p className="text-gray-300 text-center text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex gap-4 w-full max-w-xs">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition-all duration-200 hover:scale-105"
                      >
                        Code
                      </a>
                    )}
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${item.github ? 'flex-1' : 'w-full'} text-center py-3 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded transition-all duration-200 hover:scale-105`}
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            );
          })}


</div>
      </div>
    </div>
  );
};

export default Work;
