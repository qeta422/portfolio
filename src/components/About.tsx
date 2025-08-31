import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Typewriter from './Typewriter';
import meImage from '../assets/me.jpg';

const About: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="about" className="about flex items-center py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <img 
              src={meImage} 
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
              <Typewriter text="About me" isVisible={isIntersecting} delay={150} />
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-4">
              Dedicated Junior React Developer with over 1.5 years of professional experience, 
              specializing in TypeScript, React.js, and Tailwind CSS. Proven track record of building 
              scalable user interfaces for enterprise-grade data analysis platforms.
            </p>
            <p className="text-secondary text-lg leading-relaxed mb-4">
              Experienced in developing responsive, performant applications and collaborating 
              effectively within agile development teams. Currently working at DataMind, where I 
              contribute to the development of powerful AI-driven data visualization features that 
              help businesses simplify complex data processing.
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              Passionate about clean code, modern web technologies, and continuous learning. 
              I'm always open to interesting opportunities and challenges that push me to grow 
              as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
