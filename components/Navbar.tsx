import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND, NAVIGATION } from '../constants';
const logoImg = BRAND.logo;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img 
              src={logoImg} 
              alt={`${BRAND.name} Logo`} 
              className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <span className={`font-serif text-xl md:text-2xl font-bold tracking-wide transition-colors ${isScrolled ? 'text-teal-800' : 'text-teal-900'}`}>
              {BRAND.name}
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-gold-500 ${isScrolled ? 'text-stone-600' : 'text-stone-800'}`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#pricing"
              className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm"
            >
              Book Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 hover:text-teal-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-teal-700 hover:bg-stone-50"
              >
                {item.name}
              </a>
            ))}
             <a
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-teal-700 text-white px-3 py-3 rounded-md text-base font-medium"
              >
                Secure Your Spot
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;