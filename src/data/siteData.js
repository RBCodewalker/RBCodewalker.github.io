export const checkpoints = [
  { id: 1, label: 'Home', sectionName: 'home' },
  { id: 2, label: 'About', sectionName: 'about' },
  { id: 3, label: 'Skills', sectionName: 'skills' },
  { id: 4, label: 'Experience', sectionName: 'experience' },
  { id: 5, label: 'Education', sectionName: 'education' },
  { id: 6, label: 'Projects', sectionName: 'work' },
  { id: 7, label: 'Contact', sectionName: 'contact' },
];

export const profile = {
  name: 'Rajdeep Bastakoti',
  title: 'Software Developer | Computer Science Graduate | Tech Enthusiast',
  location: 'Berlin, Germany',
  summary:
    'Interested in all things tech with expertise in software development and a focus on building innovative, well-shipped products. I practice proactive development and enjoy exploring new domains.',
  aboutIntro:
    'As a Software Engineer right in the middle of massive technological shift and digital uncertainty, I enjoy turning product ideas into practical, high-quality interfaces while keeping performance and accessibility in focus. I specialize in UX polishing and simplify solutions to improve user engagement.',
  aboutDetails: [
    'At Axel Springer, I have been involved in projects tools that streamline editorial workflows and support high-traffic and chaotic editors who demand instantaneous support which I would consider my most notable achievement.',
    'I stay curious and keep iterating on both technical and design skills. Lately, diving into AI agent design and orchestration has been interesting with Google ADK, playing around with n8n workflows has also been fun.',
    'Outside of work, I like traveling, hiking with friends, gaming, playing music and occasional cooking.',
  ],
};

export const skillsByCategory = [
  {
    category: 'Frontend',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'React Native',
      'React Query',
      'Angular',
      'Zustand',
      'GSAP',
      'MUI',
      'D3.js',
    ],
  },
  {
    category: 'Backend & Services',
    items: ['Node.js', 'Fastify', 'Python', 'Flask', 'MongoDB', 'SQL', 'FFMPEG', 'Nexrender', 'Firebase', 'AWS'],
  },
  {
    category: 'Tools',
    items: [
      'Git',
      'CI/CD (GH Workflow)',
      'Leaflet',
      'Google Analytics',
      'Figma',
      'Expo',
      'Zod'
    ],
  },
];

export const workExperience = [
  {
    id: 1,
    company: 'Axel Springer SE / BILD Product and Innovation',
    location: 'Berlin, Germany',
    employmentType: 'Full-time',
    roles: [
      { title: 'Frontend Developer', start: 'May 2024', end: 'Mar 2025' },
      { title: 'Mid-Senior Software Developer', start: 'Apr 2025', end: 'Present' },
    ],
    bullets: [
      "Heavily involved in BILD's digital transformation by building tailored tools that automate editorial workflows.",
      'Led the frontend for U.S. Elections and Bundestagswahl coverage serving over 20 million daily users with strong performance and cross-browser reliability.',
      'Built dynamic data visualizations with D3 and interactive animations with GSAP to improve engagement and reduce bounce rates.',
      'Designed and engineered a full-stack Calendar application for unique internal usecases using RRULE engine for recurrence, PostgreSQL, Fastify on Node API design(TS), Zod for type validation to ensure stable performance.',
      'Developed a cross-platform news delivery app prototype with React Native, Firebase, and Expo in collaboration with web and mobile teams.',
      'Built server-side video encoding and rendering workflows using FFMPEG and Nexrender to automate media asset generation.',
      'Contributed to CI/CD pipelines and AI-assisted service boilerplates, reducing development time by about 30%.',
    ],
    technologies: ['React', 'D3', 'GSAP', 'Leaflet', 'React Native', 'Firebase', 'Expo', 'FFMPEG', 'Nexrender', 'RRULE', 'Fastify', 'Zod', 'GH Workflows', 'AWS'],
    shippedProducts: [
      {
        label: 'U.S. Election Coverage',
        url: 'https://www.bild.de/ig/699ff606-1d74-4d9f-80f9-95d4105767a2/index/index.html#/client/2024/state',
      },
      {
        label: 'Bundestagswahl Coverage - Map',
        url: 'https://www.bild.de/ig/2161471a-046b-486a-a4e7-9aded82ff89a/index/index.html#/m/live',
      },
      {
        label: 'Bundestagswahl Coverage - Bar Chart',
        url: 'https://www.bild.de/ig/2161471a-046b-486a-a4e7-9aded82ff89a/index/index.html#/b/live',
      },
      {
        label: 'Bundestagswahl Coverage - Seat Chart',
        url: 'https://www.bild.de/ig/2161471a-046b-486a-a4e7-9aded82ff89a/index/index.html#/p/k/live',
      },
      {
        label: 'Daily Horoscope',
        url: 'https://www.bild.de/ig/3a07efb1-176f-4a2d-8aaa-7e5310a0826f/index/index.html',
      },
    ],
    disclosureNote:
      'Additional major internal tools and products in my portfolio are non-disclosable due to confidentiality. I would be happy to discuss my further qualifications upon request.',
  },
  {
    id: 2,
    company: 'tetraeder.solar GmbH',
    location: 'Dortmund, Germany (Remote)',
    employmentType: 'Full-time',
    roles: [
      { title: 'Web Developer', start: 'May 2022', end: 'April 2023' },
      { title: 'Software Developer', start: 'May 2023', end: 'Dec 2023' },
    ],
    bullets: [
      'Assisted in designing and developing frontend websites using HTML, CSS, JavaScript, and TypeScript.',
      'Developed server-side components with Python (Flask, SQLAlchemy) and PostgreSQL.',
      'Collaborated with clients and used Google Analytics to optimize browser performance by around 50%.',
      'Created and refined UI/UX designs in Figma using established design principles.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'Figma'],
  },
  {
    id: 3,
    company: 'KETAAKETI e. V.',
    location: 'Remote',
    employmentType: 'Part-time',
    roles: [{ title: 'Tech Team Member', start: 'Sep 2022', end: 'Jan 2023' }],
    bullets: [
      'Orchestrated a comprehensive redesign of the Ketaaketi website to improve visual consistency and overall UX.',
      "Integrated an interactive world map with Google Charts to enrich the platform's engagement and visual appeal.",
      'Revamped the web application navigation for both viewers and contributors to improve browsing clarity.',
    ],
    technologies: ['Google Charts', 'Frontend Architecture', 'UI/UX'],
  },
];

export const education = {
  degree: 'BSc. Computer Science',
  minor: 'Minor in Robotics and Intelligent Systems',
  institution: 'Constructor University (formerly Jacobs University)',
  location: 'Bremen, Germany',
  period: 'Sep 2020 - Jun 2023',
  thesis: 'Volumetric Visualization of Multi-Dimensional (3D/4D) Raster Weather Data.',
  coursework: [
    'Algorithms and Data Structures (Python, C++)',
    'Operating Systems (C)',
    'Software Engineering (JavaScript, MySQL, PHP)',
    'Human-Computer Interaction (Figma)',
  ],
};
