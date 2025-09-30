import React from 'react';

const WorkExperience = () => {
  const workData = [
    // Add your work experience items here
    // Example format:
    // {
    //   id: 1,
    //   title: "Job Title",
    //   company: "Company Name",
    //   period: "Jan 2020 - Present",
    //   description: "Description of your work and achievements",
    //   link: "https://example.com" // optional
    // }
  ];

  return (
    <div name='experience' className='w-full min-h-screen text-gray-300 bg-[#0a192f] py-20'>
      <div className='max-w-[1000px] mx-auto px-6 sm:px-8 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>
            Work Experience
          </p>
          <p className='py-6 text-lg'>Professional experience and notable work</p>
        </div>

        {/* Work experience list */}
        <div className="space-y-6">
          {workData.length === 0 ? (
            <p className="text-gray-400 text-lg">Work experience coming soon...</p>
          ) : (
            workData.map((work) => (
              <div
                key={work.id}
                className="bg-[#112240] p-6 md:p-8 rounded-lg shadow-lg hover:shadow-red-600/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-200">{work.title}</h3>
                    <p className="text-lg md:text-xl text-red-500">{work.company}</p>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base mt-2 sm:mt-0 whitespace-nowrap">{work.period}</p>
                </div>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-4">{work.description}</p>
                {work.link && (
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors duration-200 font-medium"
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
