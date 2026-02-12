import projectDH from '../assets/projects/project_dh.png';
import projectPF from '../assets/projects/project_portfolio.png';
import projectEC from '../assets/projects/project_ec.png';

export const projects = [
  {
    id: 1,
    name: "Einbürgerung Coach",
    slug: "_einbuergerung-coach",
    description: "Interactive German citizenship test preparation app with AI-powered explanations, quiz modes, and progress tracking.",
    image: projectEC,
    github: "https://github.com/RBCodewalker/einbuergerung-coach",
    live: "https://einbuergerung-coach.vercel.app/",
    tech: ["React"],
  },
  {
    id: 2,
    name: "Doctors Hub",
    slug: "_doctors-hub",
    description: "Healthcare platform with REST API integration and infinite scrolling for browsing medical professionals.",
    image: projectDH,
    github: "https://github.com/RBCodewalker/doctors-hub",
    live: "https://doctors-hub.vercel.app/",
    tech: ["React"],
  },
  {
    id: 3,
    name: "Portfolio Website",
    slug: "_portfolio",
    description: "Personal portfolio showcasing projects and skills, built with React and Tailwind CSS.",
    image: projectPF,
    github: "https://github.com/RBCodewalker/portfolio",
    live: "https://rajdeepbastakoti.com/",
    tech: ["React", "CSS"],
  },
];

export const technologies = [
  { name: "React", icon: "react" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "node" },
  { name: "Angular", icon: "angular" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Flutter", icon: "flutter" },
  { name: "Vue", icon: "vue" },
];
