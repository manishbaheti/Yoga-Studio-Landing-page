import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BRAND } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-stone-50 min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2670&auto=format&fit=crop" 
          alt="Woman practicing yoga outdoors" 
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-50/90 via-stone-50/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-6 animate-fade-in-up">
            Launching February 1st, 2026
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-teal-900 leading-tight mb-6">
            Find Your Calm. <br/>
            <span className="text-gold-500">Reclaim Your Flexibility.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-700 mb-8 leading-relaxed max-w-xl">
            Specialized Yoga for Women 35-50. Reduce anxiety, ease stiffness, and increase essential body movement in a supportive, non-judgmental space.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#pricing" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-teal-700 hover:bg-teal-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Secure Your 3-Month Spot
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#about" 
              className="inline-flex items-center justify-center px-8 py-4 border border-teal-700 text-base font-medium rounded-full text-teal-700 bg-transparent hover:bg-teal-50 transition-all"
            >
              Meet Nidhi
            </a>
          </div>

          <div className="mt-8 flex items-center text-sm text-stone-600">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Founder Member Offer: First 10 signups get 10% OFF
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;