import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AccordionSection from '../components/AccordionSection';
import TabBar from '../components/TabBar';
import { projects, technologies } from '../data/projects';
import { FaReact, FaHtml5, FaCss3Alt, FaVuejs, FaAngular } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';

const techIcons = {
  React: FaReact,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  Vue: FaVuejs,
  Angular: FaAngular,
  Flutter: SiFlutter,
};

const techColors = {
  React: 'bg-[#61dafb]/20 text-[#61dafb]',
  HTML: 'bg-[#e34c26]/20 text-[#e34c26]',
  CSS: 'bg-[#264de4]/20 text-[#264de4]',
  Vue: 'bg-[#42b883]/20 text-[#42b883]',
  Angular: 'bg-[#dd1b16]/20 text-[#dd1b16]',
  Flutter: 'bg-[#02569b]/20 text-[#02569b]',
};

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState(['React']);

  const toggleTech = (tech) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const filteredProjects = selectedTech.length === 0
    ? projects
    : projects.filter((p) => p.tech.some((t) => selectedTech.includes(t)));

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar className="flex-col">
        <AccordionSection label="projects" defaultOpen={true}>
          {technologies.map((tech) => {
            const Icon = techIcons[tech.name];
            const checked = selectedTech.includes(tech.name);
            return (
              <button
                key={tech.name}
                onClick={() => toggleTech(tech.name)}
                className="flex items-center gap-[24px] px-[12px] py-[4px] w-full text-left transition-colors hover:bg-ide-slate-800/30"
              >
                {/* Checkbox */}
                <div
                  className={`w-[20px] h-[20px] rounded-ide-sm border flex items-center justify-center shrink-0 transition-colors ${
                    checked
                      ? 'bg-ide-slate-500 border-ide-slate-500'
                      : 'bg-ide-slate-950 border-ide-slate-500'
                  }`}
                >
                  {checked && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                {/* Tech icon + name */}
                <div className="flex items-center gap-[8px]">
                  {Icon && <Icon size={20} className="text-heading" />}
                  <span className="text-body-md text-heading">{tech.name}</span>
                </div>
              </button>
            );
          })}
        </AccordionSection>
      </Sidebar>

      {/* Mobile filter */}
      <div className="md:hidden flex flex-col flex-1 overflow-hidden">
        <div className="border-b border-theme-stroke">
          <AccordionSection label="projects" defaultOpen={false}>
            {technologies.map((tech) => {
              const checked = selectedTech.includes(tech.name);
              return (
                <button
                  key={tech.name}
                  onClick={() => toggleTech(tech.name)}
                  className="flex items-center gap-[12px] px-[12px] py-[4px] text-body-sm text-heading"
                >
                  <div className={`w-[16px] h-[16px] rounded-ide-sm border ${checked ? 'bg-ide-slate-500 border-ide-slate-500' : 'border-ide-slate-500'}`} />
                  {tech.name}
                </button>
              );
            })}
          </AccordionSection>
        </div>
        <ProjectGrid projects={filteredProjects} />
      </div>

      {/* Desktop content */}
      <div className="hidden md:flex flex-col flex-1 overflow-hidden">
        <TabBar
          tabs={[{ id: 'filter', label: selectedTech.length > 0 ? selectedTech.join('; ') : 'all' }]}
          activeTab="filter"
        />
        <ProjectGrid projects={filteredProjects} />
      </div>
    </div>
  );
};

function ProjectGrid({ projects }) {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="flex flex-wrap gap-[40px] p-[32px] md:p-[64px]">
        {projects.map((project, i) => (
          <div key={project.id} className="flex flex-col gap-[16px] w-full sm:w-[calc(50%-20px)] lg:w-[407px]">
            {/* Label */}
            <p className="text-body-md">
              <span className="text-ide-indigo font-bold">Project {i + 1}</span>{' '}
              <span className="text-ide-slate-500">&#47;&#47; {project.slug}</span>
            </p>
            {/* Card */}
            <div className="flex flex-col rounded-ide-lg border border-ide-slate-800 overflow-hidden">
              {/* Image */}
              <div className="h-[145px] relative bg-ide-slate-800">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                {/* Tech badge */}
                {project.tech[0] && (
                  <div className={`absolute top-[20px] right-[20px] rounded-ide p-[4px] ${techColors[project.tech[0]] || 'bg-ide-indigo-300 text-primary-inv'}`}>
                    {techIcons[project.tech[0]] && React.createElement(techIcons[project.tech[0]], { size: 24 })}
                  </div>
                )}
              </div>
              {/* Text */}
              <div className="bg-ide-slate-950 p-[32px] flex flex-col gap-[21px]">
                <p className="text-body-lg text-theme-fg">
                  {project.description}
                </p>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-ide-slate-600 text-heading text-body-sm px-[12px] py-[10px] rounded-ide-md inline-flex items-center justify-center w-fit hover:brightness-110 transition-all"
                >
                  view-project
                </a>
              </div>
            </div>
          </div>
        ))}

        {projects.length === 0 && (
          <div className="flex items-center justify-center w-full py-[64px]">
            <p className="text-body-lg text-ide-slate-500">
              &#47;&#47; no projects match the selected filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
