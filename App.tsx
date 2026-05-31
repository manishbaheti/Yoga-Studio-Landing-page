import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import YogaDay from './components/YogaDay';
import Schedule from './components/Schedule';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-stone-800 antialiased selection:bg-teal-200 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <YogaDay />
        <Schedule />
        <Pricing />
        <About />
      </main>
      <Contact />
    </div>
  );
}

export default App;