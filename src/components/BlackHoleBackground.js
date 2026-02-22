import React from 'react';

const BlackHoleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-dark-bg">
      {/* Space background with stars */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full opacity-80 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Nebula effect */}
      <div className="absolute inset-0 bg-gradient-radial from-teal-glow/10 via-transparent to-transparent opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-radial from-emerald-glow/10 via-transparent to-transparent opacity-20 transform rotate-45"></div>

      {/* Floating space elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-teal-glow/20 to-transparent rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-emerald-glow/20 to-transparent rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-teal-glow/30 to-transparent rounded-full blur-md animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`shooting-${i}`}
          className="absolute w-px h-20 bg-gradient-to-b from-white to-transparent opacity-60 animate-pulse"
          style={{
            left: `${20 + i * 30}%`,
            top: `${10 + i * 20}%`,
            transform: 'rotate(45deg)',
            animationDelay: `${i * 5}s`,
            animationDuration: '3s'
          }}
        />
      ))}

      {/* Planets */}
      <div className="absolute top-16 right-16 w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full shadow-lg animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg animate-float" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default BlackHoleBackground;
