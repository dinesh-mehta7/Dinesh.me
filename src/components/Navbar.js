import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Github, Linkedin, Heart } from 'lucide-react';

export default function Navbar({ personal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [hireBurstKey, setHireBurstKey] = useState(0);

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
          ? 'bg-[#fffaf2]/85 backdrop-blur-md border-b border-[#dfd1bb]/80 py-4 shadow-xl shadow-black/10'
          : 'bg-transparent py-6'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#39223e] via-[#654368] to-[#b58a45] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 rounded-lg bg-[#39223e] flex items-center justify-center shadow-lg shadow-[#654368]/20 group-hover:scale-105 transition-transform duration-300">
              <Code className="w-5 h-5 text-[#fffaf2]" />
              <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-wider text-[#302333] group-hover:text-[#8a708d] transition-all uppercase">
                {personal.name}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-[#fffaf2]/40 p-1.5 rounded-full border border-[#dfd1bb]/60 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'bg-gradient-to-r from-[#39223e] to-[#654368] text-[#fffaf2] shadow-md shadow-[#654368]/15'
                    : 'text-[#554954] hover:text-[#302333] hover:bg-[#eee2cf]/50'
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
              className="p-2 rounded-full text-[#746872] hover:text-[#302333] hover:bg-[#eee2cf]/50 transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/dinesh-mehta-551985313/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-[#746872] hover:text-[#302333] hover:bg-[#eee2cf]/50 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              onClick={() => setHireBurstKey((key) => key + 1)}
              aria-label="Hire me and go to the contact section"
              className="relative group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#b58a45] via-[#ead9ae] to-[#b58a45] p-[2px] transition-transform duration-300 hover:scale-[1.03] active:scale-95"
            >
              <span className="relative block rounded-full bg-gradient-to-r from-[#39223e] via-[#4a2d50] to-[#39223e] px-5 py-2 text-xs font-semibold text-[#fffaf2] transition-all duration-300">
                Hire Me
              </span>
              {hireBurstKey > 0 && (
                <span className="hire-burst" key={hireBurstKey} aria-hidden="true">
                  {Array.from({ length: 8 }, (_, index) => {
                    const angle = (index * Math.PI) / 4;
                    return (
                      <Heart
                        key={index}
                        className="hire-heart"
                        style={{
                          '--heart-x': `${Math.cos(angle) * 48}px`,
                          '--heart-y': `${Math.sin(angle) * 42}px`
                        }}
                      />
                    );
                  })}
                </span>
              )}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#746872] hover:text-[#302333] hover:bg-[#eee2cf]/50 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[73px] bg-[#fffaf2]/95 backdrop-blur-lg border-b border-[#dfd1bb] transition-all duration-300 ease-in-out transform ${
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
                  ? 'bg-[#4a2d50]/10 text-[#654368] border-l-4 border-[#654368]'
                  : 'text-[#554954] hover:text-[#302333] hover:bg-[#fffaf2]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-[#dfd1bb] flex justify-around items-center">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#746872] hover:text-[#302333]">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/dinesh-mehta-551985313/" target="_blank" rel="noreferrer" className="text-[#746872] hover:text-[#302333]">
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-gradient-to-r from-[#39223e] to-[#654368] hover:from-[#4a2d50] hover:to-[#735b75] text-[#fffaf2] rounded-lg text-sm font-semibold transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
