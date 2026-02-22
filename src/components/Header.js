import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleClick = (id) => {
    setActiveTab(id);
    setIsMenuOpen(false); // Close menu on mobile after click
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(menuItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentIndex = hoverIndex !== null ? hoverIndex : menuItems.findIndex(item => item.id === activeTab);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-blue-900 to-black border-b-2 border-cyan-400 shadow-lg shadow-cyan-500/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-center items-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex relative items-center justify-around w-full">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:text-cyan-300 ${
                activeTab === item.id
                  ? 'text-cyan-300 glow-text'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div
            className="absolute bottom-0 h-0.5 bg-cyan-400 transition-all duration-300 ease-in-out shadow-lg shadow-cyan-400/50"
            style={{
              left: `${currentIndex * (100 / menuItems.length)}%`,
              width: `${100 / menuItems.length}%`,
            }}
          ></div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-black via-blue-900 to-black border-t border-cyan-400/20">
          <div className="px-4 py-2 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`block w-full text-left px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-300 ${
                  activeTab === item.id
                    ? 'text-cyan-300 glow-text'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
