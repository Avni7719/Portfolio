import React from 'react';
import Draggable from 'react-draggable';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-br from-black via-blue-900 to-black">
      {/* Animated Background Particles */}
      {[...Array(30)].map((_, i) => (
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
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{group.category}</h3>
              <div className="space-y-4">
                {group.items.map((skill, i) => (
                  <Draggable key={i}>
                    <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded cursor-move">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-300 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </Draggable>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
