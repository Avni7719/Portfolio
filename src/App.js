import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Testimonials from './components/Testimonials';
import Education from './components/Education';

import Gallery from './components/Gallery';
import Footer from './components/Footer';

const DATA = {
  profile: {
    name: 'Avni Gupta',
    title: 'AIML Student',
    subtitle: 'Lead, Microsoft Learn Student Ambassador',
    details: [
      'AI Agent Developer',
      'Front-End Developer',
      'Java & AI/ML Learner',
      'State-level Basketball Player',
      'Cloud & DevOps Enthusiast'
    ],
    bio: "Hi, I'm Avni Gupta — a dedicated student of AIML and the Lead of Microsoft Learn Student Ambassador (MLSA). I am also a State Basketball Player and have represented my state several times with pride. Along with sports, I am deeply passionate about technology. I work as an Agent Developer and have a strong interest in Cloud and DevOps. I also enjoy creating modern web interfaces as a Front-End Developer, and Java is one of my favourite programming languages. My journey combines discipline, creativity, and innovation — and this portfolio reflects the skills, experiences, and passion that define who I am.",
    photo: null, // Will be set by upload
  },

  friends: [
    { name: 'Mentor A', role: 'AIML Guide', note: 'Helped me with machine learning projects.' },
    { name: 'Coach B', role: 'Basketball Coach', note: 'Trained me for state-level competitions.' }
  ],
  certificates: [
    {
      title: 'AWS - Solutions Architecture Job Simulation',
      organization: 'Forage',
      icon: '/forage-logo.jpg',
      link: 'https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_692f0af1ceb4fea4b34652d0_1764694553597_completion_certificate.pdf',
      description: ''
    },
    {
      title: 'AWS Cloud Practitioner',
      organization: 'AWS',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      link: '/aws certification (1).pdf',
      description: ''
    },
    {
      title: 'EduSkills TECH CAMP on Google AI-ML',
      organization: 'EduSkills',
      icon: '/logo edu skill.png',
      link: '/Edu skill certificate.jpeg',
      description: ''
    }
  ],
  schooling: [
    { school: 'State University', degree: 'B.Sc. AIML', years: '2020–2024' },
    { school: 'High School', degree: 'State Basketball Representative', years: '2016–2020' }
  ],
  projects: [
    { title: 'Agent Development Platform', desc: 'Built an AI agent using Java and cloud services.', link: '#' },
    { title: 'Modern Web Portfolio', desc: 'This site — responsive and interactive.', link: '#' }
  ],
  skills: [
    {
      category: 'Programming Languages',
      items: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 75 }
      ]
    },
    {
      category: 'Web Technologies',
      items: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      category: 'AI/ML',
      items: [
        { name: 'Machine Learning', level: 75 },
        { name: 'AI Agent Development', level: 70 }
      ]
    },
    {
      category: 'Other',
      items: [
        { name: 'Cloud & DevOps', level: 65 },
        { name: 'GitHub', level: 80 }
      ]
    }
  ]
};

function App() {
  const [photo, setPhoto] = useState(null);

  return (
    <div className="min-h-screen bg-blue-50 pt-16">
      <Header />
      <Hero data={DATA.profile} photo={photo} setPhoto={setPhoto} />
      <About bio={DATA.profile.bio} />

      <Projects projects={DATA.projects} />
      <Education />
      <Certificates certificates={DATA.certificates} />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
