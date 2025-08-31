import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="about" className="about min-h-screen flex items-center py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <img 
              src="/img/me.jpg" 
              alt="Qeta Fetviashvili" 
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
          <div 
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 delay-300 ${
              isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-light mb-8">
              <span className={isIntersecting ? 'inline-block animate-pulse' : ''}>
                About me
              </span>
            </h2>
            <p className="text-secondary text-lg leading-relaxed">
              My experience includes working with HTML, CSS/SASS and JavaScript to create
              efficient, scalable, and user-friendly projects.
              I'm a quick learner while still managing to pay attention to details. After finishing
              relevant courses in various academies I continue to strengthen essential skills in this field.
              I'm currently trying out different educational platform sources to master React library and work on
              new projects. While my Experience mostly consists of education, I have
              A strong desire to Work on real-life projects and gain practical knowledge. Therefore, I'm always
              open for interesting opportunities to improve myself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
