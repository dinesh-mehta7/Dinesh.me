import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlowBackground from './components/GlowBackground';
import ProjectModal from './components/ProjectModal';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const portfolioData = {
    personal: {
      name: 'Dinesh Mehta',
      role: 'Full Stack Web Developer',
      education: 'B.Tech Information Technology Student',
      tagline: 'Building scalable, modern web applications with exceptional user experiences.',
      bio: "I'm a Full Stack Web Developer passionate about building modern, high-performance web applications. I enjoy solving complex problems, creating intuitive user interfaces, and developing scalable backend systems. Alongside building real-world projects, I've solved 200+ LeetCode problems to strengthen my problem-solving skills."
    },
    skills: [
      { name: 'React', category: 'frontend', icon: '⚛️' },
      { name: 'Next.js', category: 'frontend', icon: '▲' },
      { name: 'TypeScript', category: 'frontend', icon: '📘' },
      { name: 'JavaScript', category: 'frontend', icon: '💛' },
      { name: 'Tailwind CSS', category: 'frontend', icon: '🎨' },
      { name: 'HTML5/CSS3', category: 'frontend', icon: '📄' },
      { name: 'Framer Motion', category: 'frontend', icon: '✨' },
      { name: 'C++', category: 'languages', icon: '⚙️' },
      { name: 'Python', category: 'languages', icon: '🐍' },
      { name: 'Java', category: 'languages', icon: '☕' },
      { name: 'Node.js', category: 'backend', icon: '🟢' },
      { name: 'Express.js', category: 'backend', icon: '🚂' },
      { name: 'PostgreSQL', category: 'backend', icon: '🐘' },
      { name: 'MongoDB', category: 'backend', icon: '🍃' },
      { name: 'Supabase', category: 'backend', icon: '⚡' },
      { name: 'Neon DB', category: 'backend', icon: '🐘' },
      { name: 'Clerk Auth', category: 'tools', icon: '🔑' },
      { name: 'Git & GitHub', category: 'tools', icon: '🐙' },
      { name: 'Postman', category: 'tools', icon: '🚀' },
      { name: 'Zod & Hook Form', category: 'tools', icon: '📝' },
      { name: 'Recharts', category: 'tools', icon: '📊' }
    ],
    projects: [
      {
        id: 1,
        title: 'Forge',
        subtitle: 'AI App Builder',
        category: 'Full Stack',
        description: 'A cutting-edge platform that allows users to instantly generate, customize, and build full-scale modern web applications using simple AI prompts.',
        tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
        image: 'image-forge.png',
        features: [
          'AI-powered React & Tailwind code generation',
          'Modern responsive drag-and-drop UI layout builder',
          'Fast static-site deployment preview mechanics',
          'Interactive AI chatbot assistant and prompt refiner'
        ],
        demoUrl: 'https://forge-eight-silk.vercel.app',
        githubUrl: 'https://github.com'
      },
      {
        id: 2,
        title: 'Anonsecure',
        subtitle: '10 Min Secret Chatroom',
        category: 'Security / Real-time',
        description: 'A secure, ephemeral chat application where rooms and messages automatically self-destruct after 10 minutes. Designed for zero-trace communications.',
        tech: ['React', 'Node.js', 'Socket.io', 'Tailwind CSS', 'Web Crypto API'],
        image: 'image-anonsecure.png',
        features: [
          'Real-time ephemeral messaging with zero database logs',
          'Automatic 10-minute countdown room self-destruction',
          'End-to-end client-side encryption for ultimate privacy',
          'Fully responsive, clean terminal-inspired layout'
        ],
        demoUrl: 'https://secret-room-beryl.vercel.app',
        githubUrl: 'https://github.com'
      },
      {
        id: 3,
        title: 'DealCrasher',
        subtitle: 'E-Commerce Deal Finder',
        category: 'Full Stack / E-Commerce',
        description: 'A high-performance deal aggregation platform that helps users discover, submit, and track the best discounts and flash sales across major online retailers.',
        tech: ['React', 'Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
        image: 'image.png',
        features: [
          'Live deal submission, voting, and rating system',
          'Real-time price tracking and discount percentage filters',
          'Interactive community dashboard and search mechanics',
          'Highly scalable database with automated daily cleanup cron jobs'
        ],
        demoUrl: 'https://dealcrasher.vercel.app',
        githubUrl: 'https://github.com'
      }
    ]
  };

  // Handle initial loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll events (Scroll to top button)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track mouse coordinates for premium glow & custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0B1120] flex flex-col items-center justify-center z-50">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-transparent border-r-transparent border-indigo-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-b-transparent border-l-transparent border-violet-500 rounded-full animate-spin [animation-duration:1.5s]"></div>
          <span className="text-cyan-400 font-bold text-xl animate-pulse">DM</span>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-slate-100 text-lg font-semibold tracking-wider uppercase">Dinesh Mehta</h2>
          <p className="text-indigo-400/80 text-sm mt-1 font-mono">Initiating Developer Environment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0B1120] text-slate-100 overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200 font-sans">
      
      {/* Custom Global Animation Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-10deg); }
          40% { transform: rotate(14deg); }
          60% { transform: rotate(-4deg); }
          80% { transform: rotate(10deg); }
        }
        .animate-wave {
          animation: wave 2.2s infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
      `}} />

      {/* Ambient background glows & mouse follow effect */}
      <GlowBackground mousePos={mousePos} />

      {/* Custom Cursor Dot (only on screens with mouse support) */}
      <div 
        className="hidden lg:block fixed w-8 h-8 rounded-full border border-indigo-500/40 pointer-events-none z-50 transition-transform duration-75 -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />

      {/* Interactive sticky navbar with progress bar */}
      <Navbar personal={portfolioData.personal} />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32 pb-24">
        
        {/* Hero Section */}
        <Hero personal={portfolioData.personal} />

        {/* About Section */}
        <About personal={portfolioData.personal} />

        {/* Skills & Tech Stack Section */}
        <Skills skills={portfolioData.skills} />

        {/* Projects Section with filtering */}
        <Projects projects={portfolioData.projects} onSelectProject={setSelectedProject} />

        {/* Development Process Timeline */}
        <Process />

        {/* Contact Section & Form */}
        <Contact />

      </main>

      {/* Footer */}
      <Footer personal={portfolioData.personal} />

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 p-3.5 rounded-full bg-slate-900/90 border border-slate-700/60 text-indigo-400 hover:text-indigo-300 hover:border-indigo-500/50 backdrop-blur-md shadow-lg transition-all duration-300 transform ${
          showScrollTop ? 'scale-100 translate-y-0 opacity-100' : 'scale-75 translate-y-10 opacity-0 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 animate-bounce" />
      </button>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}