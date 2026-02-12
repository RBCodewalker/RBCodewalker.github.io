import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AccordionSection from '../components/AccordionSection';
import TabBar from '../components/TabBar';
import { aboutText, gistSnippets, interests, education, experience } from '../data/about';
import { contactInfo } from '../data/contact';
import { FaUser, FaGraduationCap, FaEnvelope, FaPhone, FaStar, FaFolder, FaBriefcase } from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('bio');

  const contentForTab = () => {
    switch (activeTab) {
      case 'bio':
        return aboutText;
      case 'interests':
        return [
          "/**",
          " * My interests and hobbies",
          " *",
          ...interests.map((item) => ` * - ${item}`),
          " */",
        ];
      case 'education':
        if (education.length === 0) {
          return ["/**", " * Education", " * Coming soon...", " */"];
        }
        return [
          "/**",
          " * Education",
          " *",
          ...education.flatMap((e) => [
            ` * ${e.degree}`,
            ` * ${e.school}`,
            ` * ${e.year}`,
            " *",
          ]),
          " */",
        ];
      case 'experience':
        if (experience.length === 0) {
          return ["/**", " * Work Experience", " * Coming soon...", " */"];
        }
        return [
          "/**",
          " * Work Experience",
          " *",
          ...experience.flatMap((e) => [
            ` * ${e.role} @ ${e.company}`,
            ` * ${e.period}`,
            ` * ${e.description}`,
            " *",
          ]),
          " */",
        ];
      default:
        return aboutText;
    }
  };

  const lines = contentForTab();

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar>
        {/* Icon tabs */}
        <div className="flex flex-col items-center border-r border-theme-stroke w-[65px] shrink-0 py-[12px] gap-[32px]">
          <button
            onClick={() => setActiveTab('bio')}
            className={`p-[8px] transition-colors ${activeTab === 'bio' || activeTab === 'interests' || activeTab === 'education' ? 'text-heading' : 'text-ide-slate-500 hover:text-heading'}`}
            title="Personal Info"
          >
            <FaUser size={20} />
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`p-[8px] transition-colors ${activeTab === 'experience' ? 'text-heading' : 'text-ide-slate-500 hover:text-heading'}`}
            title="Experience"
          >
            <FaBriefcase size={20} />
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`p-[8px] transition-colors ${activeTab === 'education' ? 'text-heading' : 'text-ide-slate-500 hover:text-heading'}`}
            title="Education"
          >
            <FaGraduationCap size={20} />
          </button>
        </div>
        {/* Accordion */}
        <div className="flex-1 overflow-y-auto">
          <AccordionSection label="personal-info" defaultOpen={true}>
            <button
              onClick={() => setActiveTab('bio')}
              className={`flex items-center gap-[8px] px-[12px] py-[4px] text-body-md transition-colors w-full text-left ${activeTab === 'bio' ? 'text-heading' : 'text-theme-fg hover:text-heading'}`}
            >
              <FaFolder className="text-ide-teal-400" size={14} />
              <span>bio</span>
            </button>
            <button
              onClick={() => setActiveTab('interests')}
              className={`flex items-center gap-[8px] px-[12px] py-[4px] text-body-md transition-colors w-full text-left ${activeTab === 'interests' ? 'text-heading' : 'text-theme-fg hover:text-heading'}`}
            >
              <FaFolder className="text-ide-indigo" size={14} />
              <span>interests</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-[8px] px-[12px] py-[4px] text-body-md transition-colors w-full text-left ${activeTab === 'education' ? 'text-heading' : 'text-theme-fg hover:text-heading'}`}
            >
              <FaFolder className="text-primary" size={14} />
              <span>education</span>
            </button>
          </AccordionSection>
          <AccordionSection label="professional">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-[8px] px-[12px] py-[4px] text-body-md transition-colors w-full text-left ${activeTab === 'experience' ? 'text-heading' : 'text-theme-fg hover:text-heading'}`}
            >
              <FaFolder className="text-ide-indigo" size={14} />
              <span>experience</span>
            </button>
          </AccordionSection>
          <AccordionSection label="contacts">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-[8px] px-[12px] py-[4px] text-body-md text-theme-fg hover:text-heading transition-colors">
              <FaEnvelope size={14} />
              <span>{contactInfo.email.split('@')[0]}</span>
            </a>
            <div className="flex items-center gap-[8px] px-[12px] py-[4px] text-body-md text-theme-fg">
              <FaPhone size={14} />
              <span>{contactInfo.phone}</span>
            </div>
          </AccordionSection>
        </div>
      </Sidebar>

      {/* Mobile sidebar toggle */}
      <div className="md:hidden w-full flex flex-col overflow-hidden">
        <div className="border-b border-theme-stroke">
          <AccordionSection label="personal-info" defaultOpen={false}>
            <button onClick={() => setActiveTab('bio')} className="flex items-center gap-[8px] px-[12px] py-[4px] text-body-sm text-theme-fg">
              <FaFolder className="text-ide-teal-400" size={12} /> bio
            </button>
            <button onClick={() => setActiveTab('interests')} className="flex items-center gap-[8px] px-[12px] py-[4px] text-body-sm text-theme-fg">
              <FaFolder className="text-ide-indigo" size={12} /> interests
            </button>
            <button onClick={() => setActiveTab('education')} className="flex items-center gap-[8px] px-[12px] py-[4px] text-body-sm text-theme-fg">
              <FaFolder className="text-primary" size={12} /> education
            </button>
            <button onClick={() => setActiveTab('experience')} className="flex items-center gap-[8px] px-[12px] py-[4px] text-body-sm text-theme-fg">
              <FaFolder className="text-ide-indigo" size={12} /> experience
            </button>
          </AccordionSection>
        </div>
        <MobileAboutContent lines={lines} />
      </div>

      {/* Desktop content */}
      <div className="hidden md:flex flex-col flex-1 overflow-hidden">
        <TabBar
          tabs={[{ id: activeTab, label: activeTab }]}
          activeTab={activeTab}
        />
        <div className="flex flex-1 overflow-hidden">
          {/* Left: content with line numbers */}
          <div className="flex-1 overflow-y-auto border-r border-theme-stroke p-[12px]">
            <div className="flex">
              <div className="flex flex-col items-end pr-[24px] select-none shrink-0">
                {lines.map((_, i) => (
                  <span key={i} className="text-body-md text-ide-slate-500 leading-[27px]">
                    {i + 1}
                  </span>
                ))}
              </div>
              <div className="flex flex-col">
                {lines.map((line, i) => (
                  <span key={i} className="text-body-md text-theme-fg leading-[27px] whitespace-pre">
                    {line}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="w-[40px] flex flex-col items-center py-[12px] shrink-0">
            <div className="bg-ide-slate-500 w-[24px] h-[6px] rounded-full" />
          </div>

          {/* Right: Gist snippets */}
          <div className="flex-1 overflow-y-auto p-[12px]">
            <p className="text-body-md text-heading mb-[24px] px-[28px]">
              &#47;&#47; Code snippet showcase:
            </p>
            <div className="flex flex-col gap-[32px] px-[28px]">
              {gistSnippets.map((gist) => (
                <div key={gist.id} className="flex flex-col gap-[16px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[12px]">
                      <div className="w-[36px] h-[36px] rounded-full bg-ide-slate-600 flex items-center justify-center text-heading text-body-sm font-bold">
                        R
                      </div>
                      <div className="flex flex-col gap-[4px]">
                        <span className="text-body-sm text-ide-indigo font-bold">{gist.username}</span>
                        <span className="text-body-sm text-theme-fg">{gist.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-[16px] text-theme-fg text-body-sm">
                      <span className="flex items-center gap-[4px]">
                        <FaStar size={12} /> {gist.stars}
                      </span>
                    </div>
                  </div>
                  <pre className="bg-ide-slate-800 border border-theme-stroke rounded-ide-md p-[24px] text-body-sm text-theme-fg overflow-x-auto">
                    <code>{gist.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>

          {/* Right scroll indicator */}
          <div className="w-[40px] flex flex-col items-center py-[12px] shrink-0">
            <div className="bg-ide-slate-500 w-[24px] h-[6px] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

function MobileAboutContent({ lines }) {
  return (
    <div className="flex-1 overflow-y-auto p-[16px]">
      <div className="flex flex-col gap-[24px]">
        <div className="flex">
          <div className="flex flex-col items-end pr-[16px] select-none shrink-0">
            {lines.map((_, i) => (
              <span key={i} className="text-body-sm text-ide-slate-500 leading-[24px]">{i + 1}</span>
            ))}
          </div>
          <div className="flex flex-col">
            {lines.map((line, i) => (
              <span key={i} className="text-body-sm text-theme-fg leading-[24px] whitespace-pre">{line}</span>
            ))}
          </div>
        </div>
        {gistSnippets.map((gist) => (
          <pre key={gist.id} className="bg-ide-slate-800 border border-theme-stroke rounded-ide-md p-[16px] text-body-sm text-theme-fg overflow-x-auto">
            <code>{gist.code}</code>
          </pre>
        ))}
      </div>
    </div>
  );
}

export default About;
