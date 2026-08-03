import React, { useState } from 'react';
import { send } from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const recipientEmail = 'dinesh.mehta123451@gmail.com';

    const resetForm = () => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    };

    if (serviceId && templateId && publicKey) {
      console.debug('EmailJS config loaded:', {
        serviceId: !!serviceId,
        templateId: !!templateId,
        publicKey: !!publicKey
      });

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      try {
        await send(serviceId, templateId, templateParams, publicKey);
        setSubmitted(true);
        resetForm();
      } catch (err) {
        console.error('Contact form submit error:', err);
        setError('Unable to send your message right now. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    const mailtoUrl = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setIsSubmitting(false);
    setSubmitted(true);
    resetForm();
  };

  return (
    <section id="contact" className="relative scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">Get In Touch</h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-white">
          Let's Build Something Exceptional Together
        </p>
        <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Contact info cards */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-2xl font-bold text-white">Contact Information</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Feel free to reach out for project inquiries, collaboration opportunities, or just to say hello. I will get back to you as soon as possible.
          </p>

          <div className="space-y-4 pt-4">
            {/* Email Card */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-mono">EMAIL ME</p>
                <a href="mailto:dinesh.mehta123451@gmail.com" className="text-sm font-semibold text-slate-200 hover:text-indigo-400 transition-colors">
                  dinesh.mehta123451@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-mono">CALL ME</p>
                <a href="tel:+91 8059102300" className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors">
                  +91 8059102300
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-mono">LOCATION</p>
                <p className="text-sm font-semibold text-slate-200">
                  India
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-6">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Follow My Work</p>
            <div className="flex space-x-3">
              <a 
                href="https://github.com/dinesh-mehta7" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all hover:-translate-y-1"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://https://www.linkedin.com/in/dinesh-mehta-551985313/" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <div className="relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
            
            {submitted && (
              <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-6 text-center z-20">
                <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400 mb-4 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-slate-400 text-sm mt-2 max-w-sm">
                  Thank you for reaching out. I will review your message and respond as soon as possible.
                </p>
              </div>
            )}

            {error && (
              <div className="rounded-2xl bg-rose-500/10 border border-rose-400/30 text-rose-200 p-4 mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-slate-100 placeholder-slate-600 transition-all duration-300 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-slate-100 placeholder-slate-600 transition-all duration-300 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-slate-100 placeholder-slate-600 transition-all duration-300 text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi, I would love to discuss a project with you..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-slate-100 placeholder-slate-600 transition-all duration-300 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin" />
                    <span>Sending message...</span>
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}