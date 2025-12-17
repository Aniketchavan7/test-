import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Mail, Facebook, Linkedin, Twitter, Grid3X3, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLinkClick = (path: string) => {
    setIsMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Modern Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'py-4 glass border-b border-slate-100 shadow-sm' : 'py-8 bg-transparent'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-orange-600 group-hover:bg-orange-700 rounded-xl flex items-center justify-center text-white transition-all duration-300 shadow-lg shadow-orange-600/20 group-hover:rotate-12">
                <Grid3X3 size={22} strokeWidth={3} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-slate-900 leading-none tracking-tight">Duramet</span>
                <span className="text-[10px] font-bold text-orange-600 tracking-[0.2em] uppercase mt-0.5">Technologies</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-sm font-bold transition-all duration-300 uppercase tracking-widest ${location.pathname === link.path ? 'text-orange-600' : 'text-slate-500 hover:text-orange-600'}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/#contact"
                onClick={() => handleLinkClick('/#contact')}
                className="bg-slate-900 hover:bg-black text-white px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-slate-900/10 flex items-center gap-2 group"
              >
                Inquiry Desk <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button onClick={toggleMenu} className="md:hidden p-2 text-slate-900 bg-slate-50 rounded-lg">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass border-t border-slate-100 p-8 shadow-2xl absolute w-full left-0 animate-in fade-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className="text-2xl font-extrabold text-slate-900 hover:text-orange-600 transition-colors uppercase tracking-tight"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/#contact"
                onClick={() => handleLinkClick('/#contact')}
                className="bg-orange-600 text-white py-5 rounded-2xl text-center font-bold uppercase tracking-widest shadow-lg shadow-orange-600/20"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Modern Footer */}
      <footer className="bg-slate-950 text-slate-400 py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-600/20">
                <Grid3X3 size={22} strokeWidth={3} />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">DURAMET <span className="text-orange-600">TECH</span></span>
            </div>
            <p className="text-lg leading-relaxed max-w-sm mb-10 text-slate-500 font-medium">
              Enterprise-grade industrial supply chain solutions for modern engineering sectors.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-orange-600 hover:text-white transition-all border border-white/10"><Facebook size={20} /></a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-orange-600 hover:text-white transition-all border border-white/10"><Twitter size={20} /></a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-orange-600 hover:text-white transition-all border border-white/10"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-extrabold mb-8 text-xs uppercase tracking-[0.2em]">Navigation</h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li><Link to="/industries" className="hover:text-orange-500 transition-colors">Industries</Link></li>
              <li><Link to="/#about" onClick={() => handleLinkClick('/#about')} className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/#contact" onClick={() => handleLinkClick('/#contact')} className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-extrabold mb-8 text-xs uppercase tracking-[0.2em]">Direct Desk</h3>
            <ul className="space-y-6 text-sm font-medium">
              <li className="flex items-start gap-4 group">
                <MapPin size={20} className="text-orange-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Ejipura Main Road, Bengaluru 560047, India</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone size={20} className="text-orange-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-white">+91 96861 18846</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail size={20} className="text-orange-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-300">karthik.ramesh@duramettechnologies.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} DURAMET TECHNOLOGIES. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Supply</a>
            <a href="#" className="hover:text-orange-500 transition-colors">ISO Standards</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;