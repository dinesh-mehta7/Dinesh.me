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
  const [fallbackMailto, setFallbackMailto] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setFallbackMailto('');
    setIsSubmitting(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID?.trim();
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID?.trim();
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY?.trim();
    const recipientEmail = 'dinesh.mehta123451@gmail.com';
    const name = formData.name.trim();
    const email = formData.email.trim();
    const subjectText = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !subjectText || !message) {
      setError('Please fill out every field before sending.');
      setIsSubmitting(false);
      return;
    }

    const mailtoSubject = encodeURIComponent(subjectText);
    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailtoUrl = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

    const resetForm = () => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    };

    if (!serviceId || !templateId || !publicKey) {
      setFallbackMailto(mailtoUrl);
      setError('Email sending is not configured here yet. You can still send your message from your email app.');
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      to_email: recipientEmail,
      name,
      user_name: name,
      from_name: name,
      email,
      user_email: email,
      from_email: email,
      reply_to: email,
      subject: subjectText,
      title: subjectText,
      message
    };

    try {
      await send(serviceId, templateId, templateParams, { publicKey });
      setSubmitted(true);
      resetForm();
    } catch (err) {
      console.error('Contact form submit error:', err?.text || err);
      setFallbackMailto(mailtoUrl);
      setError('Your message could not be sent. Please try again or send it from your email app.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-mono text-[#735b75] uppercase tracking-widest mb-3">Get In Touch</h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-[#302333]">
          Let's Build Something Exceptional Together
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-[#654368] to-[#b58a45] mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left Column: Contact info cards */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-2xl font-bold text-[#302333]">Contact Information</h3>
          <p className="text-[#746872] text-sm leading-relaxed">
            Feel free to reach out for project inquiries, collaboration opportunities, or just to say hello. I will get back to you as soon as possible.
          </p>

          <div className="space-y-4 pt-4">
            {/* Email Card */}
            <div className="p-4 rounded-xl bg-[#fffaf2]/50 border border-[#dfd1bb]/80 flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-[#654368]/10 text-[#735b75]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#8c7d82] font-mono">EMAIL ME</p>
                <a href="mailto:dinesh.mehta123451@gmail.com" className="text-sm font-semibold text-[#403543] hover:text-[#735b75] transition-colors">
                  dinesh.mehta123451@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-xl bg-[#fffaf2]/50 border border-[#dfd1bb]/80 flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-[#654368]/10 text-[#735b75]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#8c7d82] font-mono">CALL ME</p>
                <a href="tel:+91 8059102300" className="text-sm font-semibold text-[#403543] hover:text-[#735b75] transition-colors">
                  +91 8059102300
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-xl bg-[#fffaf2]/50 border border-[#dfd1bb]/80 flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-[#654368]/10 text-[#735b75]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#8c7d82] font-mono">LOCATION</p>
                <p className="text-sm font-semibold text-[#403543]">
                  India
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-6">
            <p className="text-xs font-mono text-[#8c7d82] uppercase tracking-widest mb-3">Follow My Work</p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/dinesh-mehta7"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-[#fffaf2]/50 border border-[#dfd1bb] hover:border-[#cbb998] text-[#746872] hover:text-[#302333] transition-all hover:-translate-y-1"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dinesh-mehta-551985313/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-[#fffaf2]/50 border border-[#dfd1bb] hover:border-[#cbb998] text-[#746872] hover:text-[#302333] transition-all hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <div className="relative p-8 rounded-3xl bg-[#fffaf2]/40 border border-[#dfd1bb]/80 backdrop-blur-sm">

            {submitted && (
              <div className="absolute inset-0 bg-[#f8f1e5]/90 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-6 text-center z-20">
                <div className="p-3 rounded-full bg-[#654368]/10 text-[#735b75] mb-4 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-[#302333]">Message Sent Successfully!</h4>
                <p className="text-[#746872] text-sm mt-2 max-w-sm">
                  Thank you for reaching out. I will review your message and respond as soon as possible.
                </p>
              </div>
            )}

            {error && (
              <div role="alert" className="rounded-2xl bg-rose-100 border border-rose-300 text-rose-800 p-4 mb-4">
                {error}
                {fallbackMailto && (
                  <a href={fallbackMailto} className="ml-2 font-semibold underline underline-offset-2">
                    Open email app instead
                  </a>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-[#746872] uppercase tracking-widest mb-2">
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
                    className="w-full px-4 py-3 rounded-xl bg-[#f8f1e5] border border-[#dfd1bb] focus:border-[#654368] focus:ring-1 focus:ring-[#654368] outline-none text-[#342a35] placeholder-[#988b88] transition-all duration-300 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-[#746872] uppercase tracking-widest mb-2">
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
                    className="w-full px-4 py-3 rounded-xl bg-[#f8f1e5] border border-[#dfd1bb] focus:border-[#654368] focus:ring-1 focus:ring-[#654368] outline-none text-[#342a35] placeholder-[#988b88] transition-all duration-300 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-[#746872] uppercase tracking-widest mb-2">
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
                  className="w-full px-4 py-3 rounded-xl bg-[#f8f1e5] border border-[#dfd1bb] focus:border-[#654368] focus:ring-1 focus:ring-[#654368] outline-none text-[#342a35] placeholder-[#988b88] transition-all duration-300 text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-[#746872] uppercase tracking-widest mb-2">
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
                  className="w-full px-4 py-3 rounded-xl bg-[#f8f1e5] border border-[#dfd1bb] focus:border-[#654368] focus:ring-1 focus:ring-[#654368] outline-none text-[#342a35] placeholder-[#988b88] transition-all duration-300 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#39223e] via-[#654368] to-[#b58a45] text-[#fffaf2] font-semibold shadow-lg shadow-[#654368]/20 hover:shadow-[#654368]/20 transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 flex items-center justify-center space-x-2"
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
