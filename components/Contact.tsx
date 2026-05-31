
import React, { useState } from 'react';
import { Mail, Phone, Instagram, Facebook, MessageSquare } from 'lucide-react';
import { BRAND } from '../constants';
const logoImg = BRAND.logo;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', interest: 'Flex & Flow' });
  const [submitted, setSubmitted] = useState(false);

  const fullPhoneNumber = "+61450154032";
  const whatsappNumberOnlyDigits = fullPhoneNumber.replace('+', '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message with form data
    const message = `Hi Nidhi, I'm ${formData.name}. I'm interested in the ${formData.interest} plan. My email is ${formData.email}. (Sent from Chakraa Yoga Lab website)`;
    const whatsappUrl = `https://wa.me/${whatsappNumberOnlyDigits}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
  };

  const whatsappLink = `https://wa.me/${whatsappNumberOnlyDigits}?text=${encodeURIComponent("Hi Nidhi, I'm interested in Chakraa Yoga Lab!")}`;

  return (
    <footer id="contact" className="bg-stone-900 text-stone-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <img src={logoImg} alt="" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
              <h2 className="font-serif text-3xl font-bold text-white">
                {BRAND.name}
              </h2>
            </div>
            
            <h3 className="text-xl text-stone-100 mb-6 font-medium">
              Ready to feel calmer, stronger, and more flexible?
            </h3>
            <p className="mb-8 text-stone-400">
              Spots for the February 2026 launch are limited. Fill out the form to register your interest and claim your Founding Member discount.
            </p>

            <div className="space-y-6">
              <div className="flex items-center group cursor-pointer">
                <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-teal-500 mr-4 group-hover:bg-teal-500 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">{BRAND.email}</a>
              </div>
              
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-teal-500 mr-4 group-hover:bg-teal-500 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <a href={`tel:${fullPhoneNumber}`} className="hover:text-white transition-colors">0450 154 032</a>
              </div>

              <div className="flex items-center group">
                <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-green-500 mr-4 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <MessageSquare size={20} />
                </div>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex flex-col"
                >
                  <span className="font-bold text-white">Message on WhatsApp</span>
                  <span className="text-sm text-stone-500 group-hover:text-stone-300">Instant Chat with Nidhi</span>
                </a>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Follow our journey</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/chakraayogalab/" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:text-white hover:bg-stone-700 transition-all"><Instagram size={20} /></a>
                <a href="https://www.facebook.com/search/top?q=chakraa%20yoga%20lab" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:text-white hover:bg-stone-700 transition-all"><Facebook size={20} /></a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 text-stone-800 shadow-2xl">
            {submitted ? (
              <div className="h-full flex flex-col justify-center items-center text-center py-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckIcon />
                </div>
                <h3 className="text-2xl font-bold text-teal-900 mb-2">Message Sent!</h3>
                <p className="text-stone-600">Your WhatsApp chat should have opened with your inquiry details. Nidhi will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-teal-700 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-teal-900 mb-4">Inquire via WhatsApp</h3>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="plan" className="block text-sm font-medium text-stone-700 mb-1">Interested Plan</label>
                  <select 
                    id="plan"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  >
                    <option value="Flex & Flow">Flex & Flow (2x/Week) - Best Value</option>
                    <option value="Weekly Calm">Weekly Calm (1x/Week)</option>
                    <option value="Just Inquiring">Just Inquiring</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-4 rounded-lg transition-colors mt-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Send WhatsApp Inquiry
                </button>
                <p className="text-xs text-stone-500 text-center mt-4">
                  *This will open WhatsApp with your pre-filled message.
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-stone-800 mt-16 pt-8 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
)

export default Contact;
