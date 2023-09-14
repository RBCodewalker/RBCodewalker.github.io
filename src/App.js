import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
// import Image from "./components/Image";


function App() {
  return (
    <div>
      <Navbar />
      {/* <Image /> */}
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;