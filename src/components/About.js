import React from 'react';
import Draggable from 'react-draggable';
import { FaBrain, FaRobot, FaCode, FaJava, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaCloud, FaBasketballBall } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-black via-blue-900 to-black">
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
      <div className="max-w-4xl mx-auto relative z-10">
        <Draggable>
          <div className="glass-card p-8 mb-12 cursor-move hover:shadow-glow transition-all duration-300" style={{ boxShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.1)' }}>
            <h2 className="text-4xl neon-heading mb-6 text-center">About Me</h2>
            <p className="text-lg leading-relaxed text-center text-white">
              Hi, I’m <span className="text-teal-glow font-semibold">Avni Gupta</span>, the Lead of the Microsoft Learn Student Ambassador (MLSA). I’m a passionate cloud developer with a strong interest in AWS and cloud technologies. I have a solid foundation in Java and front-end development, and I’m currently expanding my skill set as an AI/ML learner. Beyond academics and technology, I’m a former state-level basketball player an experience that has shaped my discipline, teamwork, leadership, and resilience.
            </p>
          </div>
        </Draggable>

        {/* My Skills Heading */}
        <h3 className="text-2xl font-bold text-center text-white mt-8 mb-4 glow-text">My Skills</h3>

        {/* Skill Icons Marquee */}
        <div className="relative overflow-hidden mt-8">
          <div className="flex animate-marquee">
            {[
              { icon: FaBrain, label: 'AI/ML' },
              { icon: FaRobot, label: 'AI Agent Developer' },
              { icon: FaCode, label: 'Front-End Developer' },
              { icon: FaJava, label: 'Java' },
              { icon: FaPython, label: 'Python' },
              { icon: FaHtml5, label: 'HTML' },
              { icon: FaCss3Alt, label: 'CSS' },
              { icon: FaJsSquare, label: 'JavaScript' },
              { icon: FaReact, label: 'React' },
              { icon: FaNodeJs, label: 'Node.js' },
              { icon: SiMongodb, label: 'MongoDB' },
              { icon: FaGithub, label: 'GitHub' },
              { icon: SiTailwindcss, label: 'Tailwind CSS' },
              { icon: FaCloud, label: 'Cloud & DevOps' },
              { icon: FaBasketballBall, label: 'State Basketball Player' }
            ].map((skill, index) => (
              <div key={index} className="flex flex-col items-center mx-6 group cursor-pointer">
                <skill.icon className="text-4xl text-teal-400 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-lg group-hover:drop-shadow-2xl" />
                <span className="text-xs text-white mt-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">{skill.label}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              { icon: FaBrain, label: 'AI/ML' },
              { icon: FaRobot, label: 'AI Agent Developer' },
              { icon: FaCode, label: 'Front-End Developer' },
              { icon: FaJava, label: 'Java' },
              { icon: FaPython, label: 'Python' },
              { icon: FaHtml5, label: 'HTML' },
              { icon: FaCss3Alt, label: 'CSS' },
              { icon: FaJsSquare, label: 'JavaScript' },
              { icon: FaReact, label: 'React' },
              { icon: FaNodeJs, label: 'Node.js' },
              { icon: SiMongodb, label: 'MongoDB' },
              { icon: FaGithub, label: 'GitHub' },
              { icon: SiTailwindcss, label: 'Tailwind CSS' },
              { icon: FaCloud, label: 'Cloud & DevOps' },
              { icon: FaBasketballBall, label: 'State Basketball Player' }
            ].map((skill, index) => (
              <div key={`dup-${index}`} className="flex flex-col items-center mx-6 group cursor-pointer">
                <skill.icon className="text-4xl text-teal-400 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-lg group-hover:drop-shadow-2xl" />
                <span className="text-xs text-white mt-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
