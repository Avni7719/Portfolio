import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/avni-gupta-186366281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:avnim9247@gmail.com',
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/Avni7719',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://twitter.com/avni',
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode />,
      url: 'https://leetcode.com/avni',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div id="social-icons" className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:scale-110 hover:shadow-lg transition-all duration-300"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="text-center">
          <p className="text-sm">&copy; 2025 Avni Gupta</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
