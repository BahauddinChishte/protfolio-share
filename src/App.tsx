import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Interests from './components/Interests';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="flex">
      <Navbar />
      <main className="flex-1 pl-[240px]">
        <div className="space-y-1">
          <Hero />
          <Experience />
          <Projects />
          <Achievements />
          <Interests />
          <Volunteer />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;