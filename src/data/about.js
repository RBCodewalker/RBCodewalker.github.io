export const aboutText = [
  "/**",
  " * About me",
  " * I have a strong enthusiasm for crafting",
  " * exceptional applications that enhance the",
  " * quality of life for those around me.",
  " *",
  " * I really enjoy perfecting a design into",
  " * an interactive interface which has been",
  " * my method of working in the past.",
  " *",
  " * Besides coding, I love playing video",
  " * games in my free time. I like to travel",
  " * and go for hikes with my friends.",
  " * I also occasionally like cooking.",
  " *",
  " * I am focused on learning and improving",
  " * my skills every day. Explore my profile!",
  " */",
];

export const interests = [
  "Video Games",
  "Traveling",
  "Hiking",
  "Cooking",
  "UI/UX Design",
];

export const education = [
  // Add your education entries here
  // { degree: "B.Sc. Computer Science", school: "University Name", year: "2020 - 2024" },
];

export const experience = [
  // Add your work experience entries here
  // { role: "Full-stack Developer", company: "Company Name", period: "2024 - Present", description: "..." },
];

export const gistSnippets = [
  {
    id: 1,
    username: "@RBCodewalker",
    time: "Created 5 months ago",
    code: `// React component pattern\nconst Portfolio = ({ projects }) => {\n  return projects.map(p => (\n    <Card key={p.id} {...p} />\n  ));\n};`,
    details: 1,
    stars: 3,
  },
  {
    id: 2,
    username: "@RBCodewalker",
    time: "Created 2 months ago",
    code: `// Express API middleware\nconst auth = async (req, res, next) => {\n  const token = req.headers.auth;\n  if (!token) return res.status(401);\n  next();\n};`,
    details: 2,
    stars: 5,
  },
];
