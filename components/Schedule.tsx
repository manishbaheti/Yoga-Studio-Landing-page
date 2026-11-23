import React from 'react';
import { BRAND } from '../constants';
import { MapPin, Calendar } from 'lucide-react';

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-teal-700 font-semibold tracking-wider uppercase text-sm">Our Timetable</span>
          <h2 className="font-serif text-4xl font-bold text-stone-800 mt-2 mb-4">
            Join a Class at Our Oakleigh Studio
          </h2>
          <p className="text-stone-600">
            Thoughtfully scheduled sessions for our local community in Oakleigh, Huntingdale, and surrounding suburbs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-l-4 border-teal-600 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="bg-teal-50 p-4 rounded-full flex-shrink-0">
              <Calendar className="text-teal-700 w-8 h-8" />
            </div>
            <div className="flex-grow">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold-500 mb-1">
                Class Schedule Update
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-800">
                We are taking a break and will commence regular classes from 1st Feb 2027
              </h3>
              <p className="text-stone-600 mt-2">
                Thank you for practicing with us. Register your interest below to stay updated on our upcoming 2027 term timetable.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors shadow-sm"
            >
              Register Interest
            </a>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-gold-500/10 p-3 rounded-full">
              <MapPin className="text-gold-500 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-800">Portman St Location</h3>
              <p className="text-stone-600 mt-1 max-w-md">{BRAND.location}</p>
              <p className="text-sm text-stone-400 mt-2 italic">A convenient hub for yoga near Oakleigh Station and Huntingdale</p>
            </div>
          </div>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.location)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 font-semibold hover:text-teal-800 underline decoration-2 underline-offset-4"
          >
            View on Google Maps
          </a>
        </div>

      </div>
    </section>
  );
};

export default Schedule;