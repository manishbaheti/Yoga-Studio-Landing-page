import React from 'react';
import { PAIN_POINTS, SOLUTIONS } from '../constants';
import { Flower } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pain Points */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-teal-900 mb-4">
            Are You Feeling This Way?
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            We understand the juggle. If you’re a woman in your late 30s to 50s, you’re likely facing the pressures of modern life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {PAIN_POINTS.map((point, index) => (
            <div key={index} className="bg-stone-50 p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 mb-6">
                <point.icon size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-800 mb-3">{point.title}</h3>
              <p className="text-stone-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* The Difference / Solution */}
        <div className="bg-teal-900 rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
           {/* Decorative background element */}
           <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-teal-800 rounded-full opacity-50 blur-3xl"></div>
           
           <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-2 bg-teal-800 rounded-full mb-4">
                <Flower className="text-gold-400" size={24} />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                The Chakra Yoga Labs Difference
              </h2>
              <p className="text-teal-100 max-w-2xl mx-auto">
                We offer more than just stretching. Our 45-minute sessions are specifically designed to be restorative, focusing on the link between mind and body.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {SOLUTIONS.map((sol, index) => (
                <div key={index} className="bg-teal-800/50 backdrop-blur-sm p-6 rounded-xl border border-teal-700">
                  <h3 className="font-serif text-xl font-bold text-gold-400 mb-3">{sol.title}</h3>
                  <p className="text-teal-50">{sol.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;