import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Pranav Bansal',
      role: 'Team Co-Lead',
      feedback: "Working with Avni has been a journey with its own ups and downs, but one thing that never changed was her focus on the work. She brings a genuine curiosity to everything she does, always wanting to understand, improve, and do better. That curiosity, paired with her determination, has pushed us to plan, re-plan, and sometimes achieve outcomes we didn't even expect for our MLSA MIET. Avni's consistency and drive are what truly set her apart.",
      avatar: '👤'
    },
    {
      name: 'Prashant',
      role: 'Project Partner',
      feedback: 'Working with Avni on various projects has been a pleasure. Her professionalism and innovative approach always bring fresh ideas to the table.',
      avatar: '👤'
    },
    {
      name: 'My Basketball Coach',
      role: 'Mentor',
      feedback: 'Avni\'s passion for learning and her commitment to excellence are truly inspiring. She consistently demonstrates strong teamwork and leadership skills.',
      avatar: '👤'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-black via-blue-900 to-black relative overflow-hidden">
      {/* Background particles for consistency */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-40 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 5}s`,
            boxShadow: '0 0 8px rgba(147, 197, 253, 0.4)'
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl neon-heading mb-4">
            What People Say
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover what people have to say about their experiences with my work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300"
              style={{
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-blue-200 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-blue-50 leading-relaxed">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
