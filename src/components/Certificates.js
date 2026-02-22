import React from 'react';

const Certificates = ({ certificates }) => {
  return (
    <section id="certifications" className="relative overflow-hidden bg-gradient-to-br from-black via-blue-900 to-black py-20">
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
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl neon-heading text-center mb-16">
          Certifications
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="w-80 bg-gradient-to-br from-blue-900 to-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-4 md:p-6 border border-gray-200 hover:border-blue-300 flex flex-col"
              style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)' }}
            >
              <div className="flex-grow">
                <img src={cert.icon} alt="Company Logo" className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-blue-400" />
                <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-sm text-blue-200 font-medium mb-3">{cert.organization}</p>
                <p className="text-sm text-gray-200">{cert.description}</p>
              </div>
              <button
                onClick={() => window.open(cert.link, '_blank')}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-center block"
                style={{ boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
              >
                Show Credentials
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
