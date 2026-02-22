import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-br from-black via-blue-900 to-black">
      {/* Animated Background Particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
            boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)'
          }}
        />
      ))}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl neon-heading text-center mb-12">Projects that speak for me</h2>
        <div className="flex justify-center">
          <div className="glassmorphism-card max-w-4xl w-full p-8 rounded-2xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border border-cyan-500/20" style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3), 0 0 60px rgba(34, 211, 238, 0.1)' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side: Mockup */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl border border-cyan-500/30">
                    <div className="bg-gray-800 rounded-2xl p-3">
                      <div className="bg-red-500 text-white text-center py-2 rounded-lg mb-2 font-bold">SOS EMERGENCY</div>
                      <div className="bg-cyan-500 text-black text-center py-2 rounded-lg mb-2 font-bold">AI RESPONSE ALERT</div>
                      <div className="bg-green-500 text-white text-center py-2 rounded-lg font-bold">DONOR MATCHING</div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                </div>
              </div>

              {/* Right Side: Details */}
              <div className="text-white">
<h3 className="text-2xl font-bold mb-4 text-cyan-400 glow-text">
                  CARE CIRCLE — Revolutionizing Emergency Healthcare with AI
                </h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    3-tap SOS button with ultra-fast emergency alerts
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Optimized for hospitals, ambulances, and end-users
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Real-time donor–patient matching (blood/organs)
                  </li>
                </ul>
                <p className="text-cyan-300 mb-6 font-mono text-sm">
                  Python · Flask · Firebase · AI · HTML · CSS
                </p>
                <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 glow-button">
                  Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
