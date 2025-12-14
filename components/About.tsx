import React from 'react';
import { BRAND } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
               {/* Placeholder for Nidhi's image - using a generic professional wellness image */}
              <img 
                src="https://images.unsplash.com/photo-1599447421405-0c1a11408e13?q=80&w=2574&auto=format&fit=crop" 
                alt="Nidhi Maheshwari" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Qualification Badge */}
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur px-6 py-4 rounded-xl shadow-lg border border-stone-100">
              <p className="text-teal-800 font-bold text-lg">500-Hour</p>
              <p className="text-stone-600 text-sm">Certified Yoga Teacher</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl font-bold text-teal-900 mb-2">Meet Nidhi Maheshwari</h2>
            <p className="text-gold-500 font-medium mb-6 tracking-wide uppercase text-sm">Founder, Chakra Yoga Labs</p>
            
            <div className="space-y-6 text-stone-700 leading-relaxed">
              <p>
                Hello! I’m Nidhi, and I believe that finding balance is the foundation of a joyful life. 
                At 48, having called Melbourne home since 2013, I deeply understand the pressures of modern 
                life—the mental load, the stress, and the moments we forget to move.
              </p>
              
              <p>
                My journey is rooted in a deep passion for wellness. For the last six years, my daily practice 
                has been non-negotiable—it's how I manage stress and stay flexible. Now, I'm bringing that passion to you.
              </p>

              <blockquote className="border-l-4 border-gold-400 pl-6 italic text-teal-800 font-medium text-lg my-8">
                "My mission is simple: to give every woman an hour of true peace and empowered movement."
              </blockquote>

              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3"></span>
                  Melbourne Resident Since 2013
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3"></span>
                  Holistic Approach to Clean Eating & Living
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3"></span>
                  Specialized in Women's Wellness (35-50)
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;