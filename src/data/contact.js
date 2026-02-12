export const contactInfo = {
  name: "Rajdeep Bastakoti",
  email: "bastakotirajdeep3@gmail.com",
  phone: "+49 *** ****",
  location: "Munich, Germany",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/rajdeepbastakoti/",
  github: "https://github.com/RBCodewalker",
  twitter: "https://x.com/",
};

export const formEndpoint = "https://getform.io/f/b80d6a2e-75d1-4a82-9765-753e4c096214";

export const codeLines = (name, email, message) => [
  'const button = document.querySelector("#sendBtn");',
  '',
  'const message = {',
  `  name: "${name || ''}",`,
  `  email: "${email || ''}",`,
  `  message: "${message || ''}",`,
  `  date: "${new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}"`,
  '}',
  '',
  'button.addEventListener("click", () => {',
  '  form.send(message);',
  '})',
];
