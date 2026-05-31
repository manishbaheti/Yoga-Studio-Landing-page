import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, Heart, ArrowRight, ExternalLink } from 'lucide-react';
import { BRAND } from '../constants';

const YogaDay: React.FC = () => {
  const googleFormUrl = "https://bit.ly/4xi3rWT";

  return (
    <section id="yogaday" className="py-24 bg-gradient-to-b from-stone-50 to-white overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner/Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-gold-400 text-white rounded-full mb-4 shadow-sm animate-pulse">
            <Sparkles size={16} />
            <span className="font-bold tracking-widest uppercase text-xs">Free Community Session</span>
            <Sparkles size={16} />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-teal-900 leading-tight mb-4">
            Celebrate International Yoga Day
          </h2>
          <p className="font-serif text-2xl text-gold-500 font-semibold tracking-wide">
            FIND YOUR INNER PEACE
          </p>
          <div className="w-24 h-0.5 bg-gold-400 mx-auto mt-6"></div>
        </div>

        {/* Info Grid (When, Time, Where) */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Card: When */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center group hover:shadow-md transition-all">
            <div className="bg-teal-50 p-4 rounded-full text-teal-700 group-hover:bg-teal-100 transition-colors mb-4">
              <Calendar className="w-8 h-8" />
            </div>
            <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest mb-1">When</span>
            <h3 className="font-serif text-2xl font-bold text-teal-900">Sunday 21 June</h3>
          </div>

          {/* Card: Time */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center group hover:shadow-md transition-all">
            <div className="bg-teal-50 p-4 rounded-full text-teal-700 group-hover:bg-teal-100 transition-colors mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest mb-1">Time & Duration</span>
            <h3 className="font-serif text-2xl font-bold text-teal-900">9:00 AM</h3>
            <span className="text-stone-500 text-sm mt-1 font-medium">60 Minutes</span>
          </div>

          {/* Card: Where */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center group hover:shadow-md transition-all">
            <div className="bg-teal-50 p-4 rounded-full text-teal-700 group-hover:bg-teal-100 transition-colors mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest mb-1">Where</span>
            <h3 className="font-serif text-lg font-bold text-teal-900 leading-snug">
              Level 1, 72/76 Portman St,<br/>
              Oakleigh VIC 3166
            </h3>
          </div>

        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Event Description & Meaning */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-teal-900 mb-4">Our Session</h3>
              <p className="text-stone-600 leading-relaxed text-base md:text-lg">
                Join a vibrant community of like-minded people for a soul-nourishing 60-minute session dedicated to health, alignment, and mindful presence - an authentic practice and lifelong tool for physical stability and deep mental clarity.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-teal-900 mb-4">Why June 21?</h3>
              <p className="text-stone-600 leading-relaxed text-base md:text-lg">
                June 21 marks <strong className="font-semibold text-teal-950">International Yoga Day</strong>, a UN-recognised global celebration established in 2015 to honour yoga's universal benefits for health and harmony. Observed in over 190 countries, it is a day to unite communities, share the gift of mindful movement, and reaffirm yoga's role as a timeless tool for physical, mental, and spiritual well-being. This session is Chakraa's way of bringing that global spirit home — right here in Oakleigh.
              </p>
            </div>
          </div>

          {/* Right Column: Expert Guidance & Google Form CTA */}
          <div className="lg:col-span-5 bg-teal-900 text-white p-8 md:p-10 rounded-3xl shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 -transtone-y-12 transtone-x-12 w-64 h-64 bg-teal-800/50 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-8">
              <div>
                <span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest block mb-2">Guided by Expert Knowledge & Authenticity</span>
                <h4 className="text-2xl font-serif font-bold text-white mb-3">Nidhi Maheshwari</h4>
                <p className="text-teal-100 text-sm leading-relaxed">
                  Led by a 500-Hour Qualified Yoga Teacher, practitioner, and practitioner influencer. Nidhi specializes in precise technique, posture adjustment, and deep breathwork to restore your organic state of calm.
                </p>
              </div>

              <div className="border-t border-teal-800 pt-6">
                <span className="text-gold-400 font-serif italic text-sm block mb-2">Important details:</span>
                <p className="text-xs text-teal-100 italic leading-snug">
                  * Please arrive 10 minutes early. All supportive props and mats are fully provided in our spacious studio.
                </p>
              </div>

              <div className="pt-4">
                <span className="block text-center text-xs font-bold uppercase tracking-widest text-gold-400 mb-3">Register Via Google Form</span>
                <a 
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-gold-400 hover:bg-gold-500 text-teal-950 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group text-center"
                >
                  <span>Register Free Community Session</span>
                  <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default YogaDay;
