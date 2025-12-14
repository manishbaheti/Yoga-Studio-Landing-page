import React from 'react';
import { PLANS } from '../constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl font-bold text-teal-900 mb-4">
            3-Month Wellness Commitment
          </h2>
          <p className="text-stone-600 mb-6">
            Invest in your long-term health. Plans run from February 1st to April 30th.
          </p>
          <div className="inline-block bg-gold-400 text-white px-6 py-2 rounded-full font-bold shadow-md animate-pulse">
            Founding Member Offer: First 10 Signups get 10% OFF!
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 border-2 transition-transform hover:-translate-y-2 flex flex-col ${
                plan.isPrimary 
                  ? 'border-teal-600 bg-teal-50/50 shadow-xl' 
                  : 'border-stone-200 bg-white shadow-sm'
              }`}
            >
              {plan.tag && (
                <div className="absolute top-0 right-0 -mt-4 mr-6 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {plan.tag}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-stone-800">{plan.name}</h3>
                <p className="text-stone-500 font-medium">{plan.frequency}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-teal-800">{plan.price}</span>
                  <span className="text-stone-500 ml-2 text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-stone-400 mt-1">{plan.perClass}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-stone-600 text-sm">{plan.options}</p>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-stone-600 text-sm">{plan.bestFor}</p>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-stone-600 text-sm">Mats & Props Provided</p>
                </div>
              </div>

              <a 
                href="#contact"
                className={`w-full block text-center py-3 rounded-xl font-bold transition-colors ${
                  plan.isPrimary
                    ? 'bg-teal-700 text-white hover:bg-teal-800'
                    : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                }`}
              >
                Select Plan
              </a>
            </div>
          ))}
        </div>
        
        <p className="text-center text-stone-400 text-sm mt-8">
          Launch Special: Secure your spot now for February. Limited spaces available per class.
        </p>
      </div>
    </section>
  );
};

export default Pricing;