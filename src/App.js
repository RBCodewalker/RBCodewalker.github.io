import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className='bg-[#0a192f]'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <WorkExperience />
      <Education />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
