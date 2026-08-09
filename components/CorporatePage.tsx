import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Users, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Clock, 
  Sparkles, 
  ArrowLeft, 
  Briefcase, 
  Zap, 
  Brain, 
  Smile, 
  Mail, 
  Phone, 
  MessageSquare,
  ShieldCheck,
  Send
} from 'lucide-react';
import { BRAND } from '../constants';
import corporateBgImage from '../src/assets/images/corporate_yoga_bg_1786248850869.jpg';

const logoImg = BRAND.logo;

interface CorporatePageProps {
  onBackToHome: () => void;
}

const CorporatePage: React.FC<CorporatePageProps> = ({ onBackToHome }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    serviceOption: 'Onsite Yoga',
    teamSize: '10-20 employees',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScrollOrHash = () => {
      const hash = window.location.hash;
      if (hash && hash !== '#business' && hash !== '#corporate') {
        const targetId = hash.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      if (!hash || hash === '#business' || hash === '#corporate') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleScrollOrHash();
    window.addEventListener('hashchange', handleScrollOrHash);
    return () => window.removeEventListener('hashchange', handleScrollOrHash);
  }, []);

  const fullPhoneNumber = "+61450154032";
  const whatsappNumberOnlyDigits = fullPhoneNumber.replace('+', '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hi Nidhi, I'm ${formData.contactName} from ${formData.companyName}.\n\n` +
      `We are interested in Corporate Yoga for our team:\n` +
      `• Option: ${formData.serviceOption}\n` +
      `• Team Size: ${formData.teamSize}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone: ${formData.phone}\n` +
      (formData.notes ? `• Notes: ${formData.notes}\n` : '') +
      `\nSent from Chakraa Yoga Lab Business Portal.`;

    const whatsappUrl = `https://wa.me/${whatsappNumberOnlyDigits}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-stone-50 min-h-screen text-stone-800 font-sans pt-20">
      
      {/* Top Banner / Navigation Bar for Business Page */}
      <div className="bg-teal-900 text-white py-4 px-4 sm:px-8 border-b border-teal-800 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBackToHome}
            className="flex items-center space-x-2 text-teal-200 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft size={18} />
            <span>Back to Individual Classes</span>
          </button>
          <div className="flex items-center space-x-2 bg-teal-800/80 px-3 py-1 rounded-full text-xs text-gold-400 font-semibold tracking-wider uppercase">
            <Building2 size={14} />
            <span>Business Wellness Portal</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-teal-950 via-teal-900 to-stone-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Faint Background Image */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-luminosity overflow-hidden">
          <img 
            src={corporateBgImage} 
            alt="Corporate Yoga Background" 
            className="w-full h-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-teal-950/70 via-teal-900/60 to-stone-900/80 pointer-events-none"></div>

        {/* Background glow styling */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-teal-800/60 border border-teal-700/60 px-4 py-2 rounded-full text-gold-400 text-sm font-semibold mb-6 shadow-inner">
            <Sparkles size={16} />
            <span>Elevate your workforce health & productivity</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100 mb-6 leading-tight">
            Yoga & Wellness <br className="hidden sm:block" />
            <span className="text-gold-400">for modern businesses</span>
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Recharge your employees with dedicated <strong className="text-white font-medium">wellness sessions</strong>. Choose between flexible <strong className="text-white font-medium">Onsite Yoga at your office</strong> or exclusive <strong className="text-white font-medium">Studio Block Bookings in Oakleigh</strong>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a 
              href="#business-signup"
              className="bg-gold-500 hover:bg-gold-400 text-stone-950 font-bold px-8 py-4 rounded-full text-base transition-all shadow-lg hover:shadow-gold-500/25 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <Briefcase size={20} />
              <span>Request Business Proposal</span>
            </a>
            <a 
              href="#service-options"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('service-options');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '#service-options');
                }
              }}
              className="bg-teal-800/80 hover:bg-teal-700 text-white font-medium px-8 py-4 rounded-full text-base border border-teal-600/50 transition-all flex items-center justify-center space-x-2"
            >
              <span>Explore Business Options</span>
            </a>
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-2">Why invest in workplace wellness</h2>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-teal-950">
            Tangible benefits for your team & business
          </h3>
          <p className="text-stone-600 mt-4 text-base sm:text-lg">
            A healthier team is a more engaged, creative, and resilient team. Regular workplace yoga delivers immediate, measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Benefit 1 */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-teal-50 text-teal-800 rounded-xl flex items-center justify-center mb-6">
              <Brain size={26} />
            </div>
            <h4 className="font-serif text-xl font-bold text-teal-950 mb-3">Reduced stress & burnout</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Guided breathwork and mindful movement calm the nervous system, lowering cortisol levels, preventing workplace fatigue, and reducing employee sick days.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-teal-50 text-teal-800 rounded-xl flex items-center justify-center mb-6">
              <Zap size={26} />
            </div>
            <h4 className="font-serif text-xl font-bold text-teal-950 mb-3">Enhanced focus & productivity</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Targeted wellness sessions clear mental fog, sharpen cognitive focus, and re-energize employees for peak workplace performance.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-teal-50 text-teal-800 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck size={26} />
            </div>
            <h4 className="font-serif text-xl font-bold text-teal-950 mb-3">Ergonomic & postural relief</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Targeted stretches relieve stiffness in shoulders, neck, spine, and wrists caused by prolonged computer desk work and repetitive strain.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-teal-50 text-teal-800 rounded-xl flex items-center justify-center mb-6">
              <Users size={26} />
            </div>
            <h4 className="font-serif text-xl font-bold text-teal-950 mb-3">Team morale & connection</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Shared wellness experiences strengthen workplace relationships, foster inclusivity, and improve team cohesion in a non-competitive environment.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-teal-50 text-teal-800 rounded-xl flex items-center justify-center mb-6">
              <Calendar size={26} />
            </div>
            <h4 className="font-serif text-xl font-bold text-teal-950 mb-3">Flexible scheduling</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Sessions can be scheduled at your convenience—morning, lunchtime, or post-work—to seamlessly fit your team's routine.
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-teal-50 text-teal-800 rounded-xl flex items-center justify-center mb-6">
              <Smile size={26} />
            </div>
            <h4 className="font-serif text-xl font-bold text-teal-950 mb-3">Beginner-Friendly & Tailored</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Led by experienced instructor Nidhi Maheshwari, routines are tailored to accommodate all physical abilities, mobility levels, and age groups safely.
            </p>
          </div>

        </div>
      </section>

      {/* Service Options (Onsite vs Block Studio) */}
      <section id="service-options" className="py-20 bg-stone-100 px-4 sm:px-6 lg:px-8 border-t border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-gold-500/10 text-gold-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-3">
              Business service options
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-teal-950">
              Two flexible ways to train your team
            </h2>
            <p className="text-stone-600 mt-4 text-base sm:text-lg">
              Whether you prefer bringing wellness directly into your office or stepping out to our peaceful studio, we've got you covered.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Option 1: Onsite Corporate Yoga */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-teal-800/20 shadow-lg flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-teal-800 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-bl-2xl">
                Onsite at your premises
              </div>

              <div>
                <div className="w-14 h-14 bg-teal-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Building2 size={30} />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-teal-950 mb-2">
                  1. Onsite yoga session
                </h3>
                <p className="text-teal-800 font-semibold text-sm mb-6">
                  We bring the full yoga experience directly to your workplace.
                </p>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  Nidhi comes to your office, boardroom, or event space at your preferred day and time. Perfect for busy teams who want to maximize convenience without leaving the premises.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="text-teal-700 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-sm"><strong>Timing & Days:</strong> Wednesdays (Morning, Lunchtime, or After Hours)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="text-teal-700 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-sm"><strong>Location:</strong> At your company office / workspace</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="text-teal-700 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-sm"><strong>Duration:</strong> 45 min or 60 min session custom tailored to desk workers</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="text-teal-700 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-sm"><strong>Requirements:</strong> Open floor space or conference room (mats & guidance provided)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="text-teal-700 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-sm"><strong>Group Size:</strong> Tailored for small teams up to large corporate departments</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-100 mt-auto">
                <a 
                  href="#business-signup"
                  onClick={() => setFormData({...formData, serviceOption: 'Onsite Yoga'})}
                  className="w-full bg-teal-800 hover:bg-teal-900 text-white font-bold py-3.5 px-6 rounded-xl transition-all text-center block shadow-md"
                >
                  Select onsite option & request quote
                </a>
              </div>
            </div>

            {/* Option 2: Studio Block Booking */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-gold-500/40 shadow-lg flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold-500 text-stone-950 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-bl-2xl">
                Studio block booking
              </div>

              <div>
                <div className="w-14 h-14 bg-stone-900 text-gold-400 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <MapPin size={30} />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-teal-950 mb-2">
                  2. Studio block option
                </h3>
                <p className="text-gold-700 font-semibold text-sm mb-6">
                  Exclusive private studio reservation at Chakraa Yoga Lab in Oakleigh.
                </p>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  Bring your staff out of the office for a refreshing session at our Oakleigh studio.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="text-gold-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-sm"><strong>Timing & Days:</strong> Wednesdays (Morning, Afternoon, or Custom Slot)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="text-gold-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-sm"><strong>Location:</strong> Level 1, 72/76 Portman St, Oakleigh VIC 3166 (steps from station)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="text-gold-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-sm"><strong>Experience:</strong> Private studio space reserved exclusively for your business</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="text-gold-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-sm"><strong>Equipment:</strong> Yoga mats and sound atmosphere provided</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="text-gold-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-sm"><strong>Flexibility:</strong> Corporate block passes or dedicated weekly team reservations</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-100 mt-auto">
                <a 
                  href="#business-signup"
                  onClick={() => setFormData({...formData, serviceOption: 'Studio Block Booking'})}
                  className="w-full bg-stone-900 hover:bg-stone-800 text-gold-400 font-bold py-3.5 px-6 rounded-xl transition-all text-center block shadow-md"
                >
                  Select studio block option & reserve
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Meet Nidhi Section - Tailored for Corporate & Business Clients */}
      <section className="py-24 bg-stone-50 overflow-hidden border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Image Column */}
            <div className="relative order-2 md:order-1">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-teal-700/5 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gold-400/10 rounded-full blur-2xl -z-10"></div>
              
              <div className="relative z-10 aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[12px] border-white transform -rotate-2 hover:rotate-0 transition-all duration-500 ease-out">
                <img 
                  src="https://lh3.googleusercontent.com/d/1pOjiij5_h9TBjEOUaK0BtjPtjnRyBNSc" 
                  alt="Nidhi Maheshwari - Corporate Yoga & Wellness Instructor" 
                  className="w-full h-full object-cover object-center scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="absolute -bottom-4 right-0 md:-right-8 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 z-20 max-w-[200px]">
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
                <span className="text-gold-700 font-bold tracking-widest uppercase text-[10px]">Your Corporate Guide</span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-teal-900 mb-6 leading-[1.1]">
                Meet Nidhi <span className="text-gold-500">Maheshwari</span>
              </h2>
              
              <p className="text-stone-500 font-serif italic text-xl mb-8 leading-relaxed border-l-2 border-stone-200 pl-6">
                "Empowering teams through mindful movement, stress resilience, and physical alignment."
              </p>
              
              <div className="space-y-6 text-stone-700 leading-relaxed text-lg">
                <p>
                  Hello! I’m Nidhi. As a <strong>500-hour qualified yoga teacher</strong>, I specialize in delivering corporate wellness programs tailored to the demands of modern professionals and workplaces.
                </p>
                
                <p>
                  Whether conducting <strong>onsite classes at your workplace</strong> or hosting <strong>private studio block sessions at Chakraa Yoga Lab in Oakleigh</strong>, my goal is to provide accessible, stress-relieving practices that recharge your employees and boost workplace vitality.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-6 border-t border-stone-200 mt-8">
                  {[
                    { label: "Location", text: "Onsite Office or Oakleigh Studio" },
                    { label: "Specialization", text: "Corporate Wellness & Posture Relief" },
                    { label: "Expertise", text: "Breathwork & Stress Resilience" },
                    { label: "Level", text: "All Employee Fitness Levels" }
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

      {/* Corporate Signup / Proposal Form */}
      <section id="business-signup" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-stone-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-teal-950 mb-3">
              Request a business proposal
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Fill out the form below to register your company's interest for business sessions. Nidhi will respond promptly with a tailored proposal and availability.
            </p>
          </div>

          {submitted ? (
            <div className="bg-teal-50 rounded-2xl p-8 text-center border border-teal-200 my-6">
              <div className="w-16 h-16 bg-teal-800 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-teal-950 mb-2">Business inquiry received!</h3>
              <p className="text-stone-700 max-w-lg mx-auto text-sm sm:text-base">
                Your WhatsApp chat has opened with your corporate request details. Nidhi Maheshwari will review your request and get back to you with custom pricing and scheduling options.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-teal-800 font-bold hover:underline text-sm"
              >
                Submit another business inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-stone-700 mb-2">Business Name *</label>
                  <input 
                    type="text" 
                    id="companyName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none transition-all"
                    placeholder="Acme Corp"
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="contactName" className="block text-sm font-semibold text-stone-700 mb-2">Contact person name *</label>
                  <input 
                    type="text" 
                    id="contactName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none transition-all"
                    placeholder="Sarah Jenkins (HR / Wellness Manager)"
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="corpEmail" className="block text-sm font-semibold text-stone-700 mb-2">Work email address *</label>
                  <input 
                    type="email" 
                    id="corpEmail"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none transition-all"
                    placeholder="sarah@acmecorp.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none transition-all"
                    placeholder="0400 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="serviceOption" className="block text-sm font-semibold text-stone-700 mb-2">Service preference *</label>
                  <select 
                    id="serviceOption"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none transition-all"
                    value={formData.serviceOption}
                    onChange={(e) => setFormData({...formData, serviceOption: e.target.value})}
                  >
                    <option value="Onsite Yoga">Onsite session (at office)</option>
                    <option value="Studio Block Booking">Studio block booking (Oakleigh Studio)</option>
                    <option value="Both / Custom Hybrid">Both / interested in hybrid options</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="teamSize" className="block text-sm font-semibold text-stone-700 mb-2">Estimated Team Size *</label>
                  <select 
                    id="teamSize"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none transition-all"
                    value={formData.teamSize}
                    onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                  >
                    <option value="5-10 employees">Small Team (5 – 10 employees)</option>
                    <option value="10-20 employees">Medium Team (10 – 20 employees)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-stone-700 mb-2">Additional Details / Questions (Optional)</label>
                <textarea 
                  id="notes"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none transition-all"
                  placeholder="Mention preferred date & session timing (e.g. Wednesdays, 8:00 AM morning flow, 12:30 PM lunch break) or any specific goals..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full bg-teal-800 hover:bg-teal-900 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 text-base"
                >
                  <Send size={18} />
                  <span>Submit business inquiry via WhatsApp</span>
                </button>
                <p className="text-xs text-stone-500 text-center mt-3">
                  Direct connection with founder Nidhi Maheshwari. We respect your corporate privacy.
                </p>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="bg-stone-900 text-stone-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-stone-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">Prefer to talk directly?</h3>
            <p className="text-stone-400 text-sm">Call or email Nidhi Maheshwari directly for custom corporate packages.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <a 
              href={`mailto:${BRAND.email}?subject=Corporate%20Yoga%20Inquiry%20-%20Chakraa%20Yoga%20Lab`}
              className="bg-stone-800 hover:bg-stone-700 text-white px-5 py-3 rounded-xl flex items-center space-x-2 transition-colors border border-stone-700"
            >
              <Mail size={18} className="text-teal-400" />
              <span>{BRAND.email}</span>
            </a>

            <a 
              href={`tel:${fullPhoneNumber}`}
              className="bg-teal-800 hover:bg-teal-700 text-white px-5 py-3 rounded-xl flex items-center space-x-2 transition-colors"
            >
              <Phone size={18} />
              <span>0450 154 032</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CorporatePage;
