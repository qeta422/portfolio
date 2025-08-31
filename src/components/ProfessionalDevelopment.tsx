import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const professionalDevelopmentData = [
  {
    icon: 'fab fa-github',
    title: 'Open Source Contributor',
    description: 'Active contributor to open-source projects'
  },
  {
    icon: 'fas fa-code',
    title: 'Coding Challenges',
    description: 'Regular participant in coding challenges'
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Advanced Learning',
    description: 'Completed advanced React & TypeScript courses'
  },
  {
    icon: 'fas fa-rocket',
    title: 'Continuous Growth',
    description: 'Continuously learning new technologies'
  }
];

const ProfessionalDevelopment: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      id="development" 
      className="professional-development py-24 px-6 bg-dark/50"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-light">Professional Development</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {professionalDevelopmentData.map((item, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-700 ${
                isIntersecting 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-dark/80 p-8 rounded-lg shadow-xl hover:bg-dark/60 transition-all group h-full flex flex-col">
                <i className={`${item.icon} text-4xl text-primary mb-4 block group-hover:scale-110 transition-transform duration-300`}></i>
                <h3 className="text-xl font-semibold text-light mb-3">{item.title}</h3>
                <p className="text-secondary flex-grow">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalDevelopment;
