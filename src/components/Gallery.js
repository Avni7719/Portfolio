import React from 'react';

const Gallery = () => {
  const photos = [
    { src: '/IMG-20251124-WA0012.jpg', title: 'Personal Moment' },
    { src: '/IMG-20251124-WA0142.jpg', title: 'Tech Event' },
    { src: '/IMG-20251129-WA0039.jpg', title: 'Memory Lane' },
    { src: '/IMG-20251130-WA0002.jpg', title: 'Personal Growth' },
    { src: '/IMG-20251130-WA0003.jpg', title: 'Workshop Session' },
    { src: '/IMG-20251130-WA0004.jpg', title: 'Achievement Day' },
    { src: '/IMG-20251202-WA0012.jpg', title: 'Journey Start' },
    { src: '/IMG-20251202-WA0013.jpg', title: 'Conference' },
    { src: '/IMG-20251202-WA0014.jpg', title: 'Team Photo' },
    { src: '/IMG-20251202-WA0015.jpg', title: 'Reflection' },
    { src: '/IMG-20251202-WA0016.jpg', title: 'Hackathon' },
    { src: '/IMG-20251202-WA0017.jpg', title: 'Award Ceremony' },
    { src: '/IMG-20251202-WA0018.jpg', title: 'Inspiration' },
    { src: '/IMG-20251202-WA0019.jpg', title: 'Networking' },
    { src: '/IMG-20251202-WA0020.jpg', title: 'Milestone' },
    { src: '/IMG-20251202-WA0021.jpg', title: 'Passion Project' },
    { src: '/IMG-20251202-WA0022.jpg', title: 'Seminar' },
    { src: '/IMG-20251202-WA0023.jpg', title: 'Group Activity' },
    { src: '/IMG-20251202-WA0024.jpg', title: 'Creative Session' },
    { src: '/IMG-20251202-WA0025.jpg', title: 'Innovation Day' },
    { src: '/IMG-20251202-WA0026.jpg', title: 'Learning Moment' },
    { src: '/IMG-20251202-WA0027.jpg', title: 'Team Building' },
    { src: '/IMG-20251202-WA0028.jpg', title: 'Success Story' },
    { src: '/IMG-20251202-WA0029.jpg', title: 'Future Goals' },
    { src: '/IMG-20251202-WA0030.jpg', title: 'Dream Big' },
    { src: '/IMG-20251202-WA0031.jpg', title: 'Overcome Challenges' },
    { src: '/IMG-20251202-WA0032.jpg', title: 'Celebrate Wins' },
    { src: '/IMG-20251202-WA0033.jpg', title: 'Keep Growing' },
  ];

  return (
    <section id="gallery" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-blue-900 to-black py-20">
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

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl neon-heading text-center mb-12">
          Moments that reflect my journey
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105" style={{ boxShadow: '0 0 15px rgba(147, 51, 234, 0.2)' }}>
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
