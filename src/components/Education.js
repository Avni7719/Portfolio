import React from 'react';

const Education = () => {
  const educationData = [
    {
      school: 'Meerut Institute of Engineering & Technology',
      degree: 'B.Tech — Computer Science & Engineering',
      years: '2023 — 2027 (81.4%)',
      image: '/college-image.jpg',
    },
    {
      school: 'Meerut Public School for Girls, Meerut Cantt',
      degree: 'Senior Secondary and high school',
      years: 'Apr 2019 — May 2022 (89%)',
      image: '/school-image.jpg',
    },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-gradient-to-br from-black via-blue-900 to-black">
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
        <h2 className="text-4xl neon-heading text-center mb-16">Building blocks of my career</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={edu.image}
                  alt={`${edu.school} campus`}
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(1.1) contrast(1.1) saturate(1.1)' }}
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
              </div>
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{edu.school}</h3>
                <p className="text-white/80 mb-1">{edu.degree}</p>
                <p className="text-sm text-white/60">{edu.years}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
