import React from 'react';
import { BRAND } from '../constants';

const About: React.FC = () => {
  const nidhiPhotoImg = "https://lh3.googleusercontent.com/d/1pOjiij5_h9TBjEOUaK0BtjPtjnRyBNSc";

  return (
    <section id="about" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Column */}
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-teal-700/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gold-400/10 rounded-full blur-2xl -z-10"></div>
            
            <div className="relative z-10 aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[12px] border-white transform -rotate-2 hover:rotate-0 transition-all duration-500 ease-out">
              <img 
                src={nidhiPhotoImg} 
                alt="Nidhi Maheshwari - Yoga Teacher in Oakleigh" 
                className="w-full h-full object-cover object-center scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-4 right-0 md:-right-8 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 z-20 max-w-[200px] animate-fade-in-up">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-teal-900 font-bold text-lg leading-tight">500-HR</span>
              </div>
              <p className="text-stone-500 text-xs font-bold tracking-widest uppercase leading-tight">Expert Qualified <br/>Teacher</p>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gold-50 rounded-full mb-6">
              <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
              <span className="text-gold-700 font-bold tracking-widest uppercase text-[10px]">Your Guide</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-teal-900 mb-6 leading-[1.1]">
              Meet Nidhi <span className="text-gold-500">Maheshwari</span>
            </h2>
            
            <p className="text-stone-500 font-serif italic text-xl mb-8 leading-relaxed border-l-2 border-stone-200 pl-6">
              "Breath and balance are the foundations of every meaningful wellness reset."
            </p>
            
            <div className="space-y-6 text-stone-700 leading-relaxed text-lg">
              <p>
                Hello! I’m Nidhi. As a <strong>500-hour qualified yoga teacher</strong>, I’ve seen firsthand how a dedicated practice can transform both body and mind. 
              </p>
              
              <p>
                My Oakleigh studio is designed as a sanctuary for <strong>yoga beginners</strong> and seasoned practitioners alike. Whether you are looking for <strong>group classes on Portman St</strong> or personalized <strong>1-on-1 sessions</strong>, my goal is to help you find your anchor in a busy world.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-6 border-t border-stone-200 mt-8">
                {[
                  { label: "Location", text: "Portman St, Oakleigh" },
                  { label: "Community", text: "Serving Oakleigh & Huntingdale" },
                  { label: "Expertise", text: "Flexibility & Breathwork" },
                  { label: "Level", text: "All Abilities Welcome" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[10px] font-bold text-gold-500 uppercase tracking-tighter mb-1">{item.label}</span>
                    <span className="text-sm font-bold text-teal-900">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;