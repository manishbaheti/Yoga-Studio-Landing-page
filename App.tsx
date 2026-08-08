import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Schedule from './components/Schedule';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import CorporatePage from './components/CorporatePage';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isCorporateView = currentHash === '#business' || currentHash === '#corporate' || currentHash.startsWith('#business') || currentHash.startsWith('#corporate');

  return (
    <div className="font-sans text-stone-800 antialiased selection:bg-teal-200 selection:text-teal-900">
      <Navbar isCorporateView={isCorporateView} />
      {isCorporateView ? (
        <CorporatePage onBackToHome={() => { window.location.hash = ''; }} />
      ) : (
        <>
          <main>
            <Hero />
            <ProblemSolution />
            <Schedule />
            <Pricing />
            <About />
          </main>
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;