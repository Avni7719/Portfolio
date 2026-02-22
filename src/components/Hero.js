import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import myPhoto from '../assets/myPhoto.jpg';

const Hero = ({ data }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const roles = [
    'Java Enthusiast',
    'Front-End Developer',
    'AIML Learner',
    'Open to Work & Opportunities',
    'AI Agent Developer',
    'Cloud Developer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-blue-900 to-black">
      {/* Animated Background Particles */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side: Introduction */}
          <div className="text-left space-y-6">
            <h2 className="text-5xl lg:text-6xl neon-heading leading-tight">
              {["H","e","l","l","o",","," ","I","'","m"," ","A","v","n","i"," ","G","u","p","t","a"].map((letter, index) => (
                <span key={index} className="animate-bouncy-glow" style={{ animationDelay: `${index * 0.1}s` }}>
                  {letter}
                </span>
              ))}
            </h2>

            {/* Rotating Text Carousel */}
            <div className="h-16 flex items-center">
              <div className={`text-2xl lg:text-3xl font-semibold text-blue-300 transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                {roles[currentRole]}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 text-lg text-gray-300 max-w-lg">
              <p>Passionate about AI Agents and AIML. Highly interested in Cloud Development and innovative tech solutions.</p>
            </div>

            {/* Download Resume Button */}
            <Draggable>
              <a
                href="/Resume_avni.pdf"
                download="Resume_avni.pdf"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-move inline-block"
              >
                Download Resume
              </a>
            </Draggable>
          </div>

          {/* Right Side: Portrait Image */}
          <div className="flex justify-center lg:justify-end">
            <Draggable>
              <div className="relative cursor-move group">
                <div className="w-80 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-1 shadow-2xl">
                  <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden flex items-center justify-center">
                    <img
                      src={myPhoto}
                      alt="Avni Gupta"
                      className="w-full h-full object-cover animate-slide-up"
                    />
                  </div>
                </div>

                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
            </Draggable>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
