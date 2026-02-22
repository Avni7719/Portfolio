import React, { useState } from 'react';
import Draggable from 'react-draggable';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! This is a demo. In a real app, this would send the message.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialIcons = [
    { name: 'LinkedIn', icon: '💼', link: 'https://www.linkedin.com/in/avni-gupta-186366281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: 'hover:text-blue-400' },
    { name: 'GitHub', icon: '💻', link: 'https://github.com/Avni7719', color: 'hover:text-gray-300' },
    { name: 'Twitter', icon: '🐦', link: 'https://twitter.com/avni', color: 'hover:text-blue-300' },
    { name: 'Email', icon: '✉️', link: 'mailto:avnim9247@gmail.com', color: 'hover:text-red-400' },
    { name: 'LeetCode', icon: '🧠', link: 'https://leetcode.com/avni', color: 'hover:text-orange-400' }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Get in Touch</h2>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 mb-12">
          {socialIcons.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card p-4 text-4xl transition-all duration-300 cursor-pointer hover:shadow-glow ${social.color}`}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <Draggable>
          <div className="glass-card p-8 hover:shadow-glow transition-all duration-300 cursor-move">
            <p className="text-center mb-8 text-lg">If you'd like to work together, send me a message using the contact form below.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-glow"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-glow"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-glow resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-glow to-emerald-glow text-dark-bg py-4 rounded-lg font-semibold hover:shadow-glow transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </Draggable>
      </div>
    </section>
  );
};

export default Contact;
