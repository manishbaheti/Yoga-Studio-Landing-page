import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
import { BRAND, NAVIGATION } from '../constants';
const logoImg = BRAND.logo;

interface NavbarProps {
  isCorporateView?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isCorporateView = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (isCorporateView) {
      window.location.hash = '';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isCorporateView ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center space-x-3 group cursor-pointer" onClick={handleLogoClick}>
            <img 
              src={logoImg} 
              alt={`${BRAND.name} Logo`} 
              className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <span className={`font-serif text-xl md:text-2xl font-bold tracking-wide transition-colors ${isScrolled || isCorporateView ? 'text-teal-800' : 'text-teal-900'}`}>
              {BRAND.name}
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 font-sans">
            {NAVIGATION.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors flex items-center space-x-1.5 ${
                  item.href === '#business'
                    ? (isCorporateView 
                        ? 'text-teal-800 font-bold bg-teal-50 px-3 py-1.5 rounded-full border border-teal-200' 
                        : 'text-gold-600 font-bold hover:text-gold-500 bg-gold-500/10 px-3 py-1.5 rounded-full border border-gold-500/30')
                    : (isScrolled || isCorporateView ? 'text-stone-600 hover:text-teal-700' : 'text-stone-800 hover:text-gold-500')
                }`}
              >
                {item.href === '#business' && <Building2 size={15} />}
                <span>{item.name}</span>
              </a>
            ))}
            <a
              href={isCorporateView ? "#business-signup" : "#pricing"}
              className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm"
            >
              {isCorporateView ? "Request proposal" : "Book Now"}
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
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  item.href === '#business'
                    ? 'text-gold-600 font-bold bg-gold-50'
                    : 'text-stone-700 hover:text-teal-700 hover:bg-stone-50'
                }`}
              >
                {item.name}
              </a>
            ))}
             <a
                href={isCorporateView ? "#business-signup" : "#pricing"}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-teal-700 text-white px-3 py-3 rounded-md text-base font-medium"
              >
                {isCorporateView ? "Request proposal" : "Secure Your Spot"}
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;