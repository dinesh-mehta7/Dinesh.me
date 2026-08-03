import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Github, Linkedin } from 'lucide-react';

export default function Navbar({ personal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navLinks[i].href.substring(1));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B1120]/80 backdrop-blur-md border-b border-slate-800/80 py-4 shadow-xl shadow-black/10' 
          : 'bg-transparent py-6'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <Code className="w-5 h-5 text-white" />
              <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-wider text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all uppercase">
                {personal.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest -mt-1">FULL STACK DEV</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-900/40 p-1.5 rounded-full border border-slate-800/60 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/15'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#contact"
              className="relative group overflow-hidden px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 p-[1px] transition-transform duration-300 active:scale-95"
            >
              <span className="relative block px-4 py-1.5 rounded-full bg-slate-950 text-xs font-semibold text-white group-hover:bg-transparent transition-all duration-300">
                Hire Me
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[73px] bg-slate-950/95 backdrop-blur-lg border-b border-slate-800 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? 'bg-indigo-600/20 text-indigo-300 border-l-4 border-indigo-500'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex justify-around items-center">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-semibold transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}