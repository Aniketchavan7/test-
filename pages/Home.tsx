import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Globe, History, MapPin, Phone, Mail, Clock, Grid3X3, ShieldCheck, Zap, Layers } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';
import { INDUSTRIES } from '../constants';

const Home: React.FC = () => {
  const partnerLogos = [
    "AeroSystems Global", "GridWorks Electric", "DriveTrain Solutions", "MicroAssembly Tech", "HardEdge Tooling",
    "Titanium Alloys Ltd", "PrecisionFlow", "CorePower Industrial", "Advantage Tooling", "GlobalSourcing Pro"
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section - Modern Minimalist */}
      <section className="relative min-h-[90vh] flex items-center bg-white text-slate-900 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/5 blur-[120px] rounded-full"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/5 blur-[120px] rounded-full"></div>
           <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center lg:text-left">
            <div className="reveal inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              <Zap size={14} className="text-orange-500 fill-orange-500" />
              Trusted Industrial Distribution
            </div>
            
            <h1 className="reveal text-6xl md:text-9xl font-extrabold mb-8 leading-[0.85] tracking-tight text-slate-900" style={{ transitionDelay: '100ms' }}>
              RELIABLE <br />
              <span className="text-orange-600 inline-block">ENGINEERING</span> <br />
              SUPPLY.
            </h1>
            
            <div className="reveal flex flex-col lg:flex-row items-center gap-12 mt-12" style={{ transitionDelay: '200ms' }}>
              <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-medium">
                Duramet Technologies delivers authorized industrial products to Aerospace, Power, and Manufacturing giants with verified technical compliance.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link to="/industries" className="group bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-xl font-bold text-sm uppercase tracking-widest transition-all flex items-center gap-3 shadow-lg shadow-orange-600/20">
                  Browse Catalog <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#contact" className="bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 px-10 py-5 rounded-xl font-bold text-sm uppercase tracking-widest transition-all">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Partner Marquee */}
      <div className="reveal bg-white py-12 border-y border-slate-100" style={{ transitionDelay: '300ms' }}>
        <div className="flex overflow-hidden relative group">
          <div className="animate-marquee whitespace-nowrap py-4">
            {[...partnerLogos, ...partnerLogos].map((partner, i) => (
              <div key={i} className="mx-12 flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity cursor-default grayscale hover:grayscale-0">
                <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center font-black text-sm">
                  {partner.charAt(0)}
                </div>
                <span className="text-lg font-bold text-slate-900 tracking-tight">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Bento Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
            <div className="reveal md:col-span-8 md:row-span-2 bg-white rounded-3xl p-12 border border-slate-200 flex flex-col justify-end hover-glow">
              <Layers className="text-orange-600 mb-6" size={48} />
              <h3 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight uppercase">Multi-Sector Expertise</h3>
              <p className="text-slate-500 font-medium text-lg max-w-lg leading-relaxed">
                From high-precision aerospace fasteners to heavy-duty power grid isolators, our distribution network covers the most critical industrial verticals.
              </p>
            </div>
            
            <div className="reveal md:col-span-4 bg-orange-600 rounded-3xl p-8 flex flex-col justify-between text-white hover:bg-orange-700 transition-colors shadow-xl shadow-orange-600/10" style={{ transitionDelay: '100ms' }}>
              <ShieldCheck size={32} />
              <div>
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Verified Quality</h4>
                <p className="text-orange-50/70 text-sm font-medium">100% authorized sourcing direct from manufacturers.</p>
              </div>
            </div>

            <div className="reveal md:col-span-4 bg-slate-900 rounded-3xl p-8 flex flex-col justify-between text-white hover:bg-black transition-colors" style={{ transitionDelay: '200ms' }}>
              <Globe size={32} className="text-orange-500" />
              <div>
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Global Reach</h4>
                <p className="text-slate-400 text-sm font-medium">Serving major industrial hubs with strategic logistics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Preview Section */}
      <section id="industries" className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <span className="text-orange-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Our Portfolio</span>
              <h2 className="text-5xl font-extrabold text-slate-900 tracking-tighter">ENGINEERED SECTORS</h2>
            </div>
            <Link to="/industries" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-orange-600 transition-colors">
              Explore All Industries <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.slice(0, 3).map((industry, i) => (
              <Link 
                key={industry.id} 
                to={`/industries/${industry.slug}`}
                className="reveal group relative flex flex-col h-[500px] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <img src={industry.image} alt={industry.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="relative mt-auto p-10">
                  <div className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-2">{industry.category}</div>
                  <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight uppercase leading-none">{industry.name}</h3>
                  <div className="flex items-center text-white/50 group-hover:text-white font-bold text-xs uppercase tracking-widest transition-colors">
                    Explore Ecosystem <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Modern Storytelling */}
      <section id="about" className="py-32 bg-slate-950 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-600/20 blur-[100px] rounded-full"></div>
              <div className="relative z-10 p-12 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-sm">
                <h2 className="text-6xl font-extrabold mb-10 tracking-tighter leading-tight">BUILT ON <br /><span className="text-orange-600">TRUST.</span></h2>
                <p className="text-lg text-slate-400 mb-12 leading-relaxed font-medium">
                  Led by Managing Director Karthik Ramesh, Duramet Technologies bridges the gap between global industrial manufacturing and complex local engineering needs.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-extrabold text-orange-600 mb-1">20+</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-orange-600 mb-1">1k+</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Products Cataloged</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="reveal space-y-12" style={{ transitionDelay: '200ms' }}>
              {[
                { icon: History, title: "Established Credibility", text: "Two decades of experience in high-stakes supply chains." },
                { icon: Award, title: "Authorized Distribution", text: "Direct contracts with global Tier-1 manufacturers." },
                { icon: Globe, title: "Logistical Reach", text: "Strategic warehousing for Just-In-Time fulfillment." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xl uppercase tracking-tight mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="reveal lg:col-span-5">
              <span className="text-orange-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Get Started</span>
              <h2 className="text-5xl font-extrabold text-slate-900 mb-10 tracking-tighter uppercase leading-none">LET'S BUILD <br />YOUR SUPPLY <br />CHAIN.</h2>
              
              <div className="space-y-6 mt-16">
                <div className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-all group">
                  <MapPin className="text-orange-600 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Headquarters</div>
                    <div className="font-bold text-slate-900">Bengaluru, KA 560047</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-all group">
                  <Phone className="text-orange-600 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Direct Sales</div>
                    <div className="font-bold text-slate-900">+91 96861 18846</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-all group">
                  <Mail className="text-orange-600 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email Enquiry</div>
                    <div className="font-bold text-slate-900 truncate">karthik.ramesh@duramettechnologies.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="reveal lg:col-span-7" style={{ transitionDelay: '200ms' }}>
              <div className="bg-white p-2 rounded-[32px] border border-slate-100 shadow-2xl shadow-slate-200/50">
                <EnquiryForm className="!border-none !shadow-none !p-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;