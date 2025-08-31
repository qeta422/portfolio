import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface WorkExperience {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

const workExperienceData: WorkExperience[] = [
  {
    id: 1,
    position: 'Frontend Developer Intern',
    company: 'DataMind',
    period: 'May 2024 - Nov 2024',
    description: 'Successfully completed a 6-month internship focused on modern frontend development practices. Gained hands-on experience with React and TypeScript while contributing to the company\'s next-generation data analysis platform. Worked closely with senior developers to learn best practices and industry standards.',
    highlights: [
      'Learned and applied TypeScript in production environment',
      'Built reusable React components following company standards',
      'Participated in code reviews and sprint planning meetings',
      'Contributed to the implementation of responsive designs'
    ]
  },
  {
    id: 2,
    position: 'Junior Frontend Developer',
    company: 'DataMind',
    period: 'Nov 2024 - Present',
    description: 'Currently working as a Junior Frontend Developer, building and maintaining complex UI components for DataMind\'s enterprise data analysis platform. Contributing to the development of powerful AI-driven data visualization features that help businesses simplify complex data processing.',
    highlights: [
      'Develop and maintain responsive React components using TypeScript',
      'Implement design systems with Tailwind CSS',
      'Collaborate with backend teams to integrate RESTful APIs',
      'Collaborate with cross-functional teams in an agile environment',
      'Optimize application performance and ensure code quality'
    ]
  }
];

const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="experience py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-light">Work Experience</h2>
        </div>
        
        <div className="space-y-12">
          {workExperienceData.map((experience, index) => (
            <WorkExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkExperienceCard: React.FC<{ experience: WorkExperience; index: number }> = ({ experience, index }) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-dark/80 p-8 rounded-lg shadow-xl transition-all duration-1000 transform ${
        isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-primary">{experience.position}</h3>
          <p className="text-xl text-light">{experience.company}</p>
        </div>
        <p className="text-secondary mt-2 md:mt-0">{experience.period}</p>
      </div>
      
      <p className="text-secondary mb-6 leading-relaxed">{experience.description}</p>
      
      <ul className="space-y-2">
        {experience.highlights.map((highlight, i) => (
          <li key={i} className="flex items-start">
            <span className="text-primary mr-2 mt-1">▸</span>
            <span className="text-secondary">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience;
