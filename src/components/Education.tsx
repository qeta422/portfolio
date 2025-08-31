import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { EducationItem } from '../types';

const educationData: EducationItem[] = [
  {
    id: 1,
    institution: 'ITVET Academy',
    field: 'Web Design',
    period: 'Jun 2019 - Oct 2020',
    description: 'At the time of finishing the school, I discovered my passion in creating web and started taking a course in IT Academy. Started working with markup and Css styling along with using Bootstrap and jQuery. I worked in my team and collaborated with a group of developers, mastering the fundamentals of creating web, seeing from user\'s perspective and understanding human psychological and communicative instincts.',
    position: 'left'
  },
  {
    id: 2,
    institution: 'BTU',
    field: 'Information Technologies',
    period: 'Aug 2020 - Present',
    description: 'After completing My first IT Academy course, my decision was getting to know tech fundamentals. Throughout my bachelor\'s degree, to this day I\'ve learnt various aspects of the profession and formed confidence in which path I wanted to follow.',
    position: 'right'
  },
  {
    id: 3,
    institution: 'IT Academy Step',
    field: 'Front-End Web Development',
    period: 'Dec 2022 - Aug 2023',
    description: 'Deepened the knowledge of Html, Css, Scss and JQuery, got to know Javascript basics with ES6 standard, mastered the usage of Bootstrap and learned how to build responsive/mobile customized web applications. Learned how to work with GitHub and build small projects using mentioned above.',
    position: 'left'
  },
  {
    id: 4,
    institution: 'Digital Institute',
    field: 'JavaScript course',
    period: 'Sep 2023 - Nov 2023',
    description: 'Had further look into JavaScript programming language. Creating simple projects using objects, arrays and functions. Making different kinds of registration/authorization forms, burger/dropdowns, sliders, filtrations and animations using basic knowledge of JavaScript.',
    position: 'right'
  },
  {
    id: 5,
    institution: 'Udemy',
    field: 'courses',
    period: 'Dec 2023 - Present',
    description: 'Broadening the grasp and creating a career path I don\'t plan to stop, hence I constantly take numerous courses with different topics and step by step fill the knowledge void on the road to be successful.',
    position: 'left'
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="education py-24 px-6 bg-dark/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <p className="text-primary font-fira mb-4">What I have learned so far</p>
          <h2 className="text-4xl md:text-5xl font-bold text-light">Education</h2>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/30 hidden md:block"></div>
          
          {educationData.map((item, index) => (
            <EducationCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationCard: React.FC<{ item: EducationItem; index: number }> = ({ item, index }) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative mb-12 md:mb-16`}
    >
      {/* Timeline dot - only on desktop */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10 hidden md:block"></div>
      
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className={`bg-dark/80 p-6 rounded-lg shadow-xl transition-all duration-1000 ${
          isIntersecting 
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-10'
        }`}>
          <h3 className="text-2xl font-bold text-light mb-2">{item.institution}</h3>
          <h4 className="text-primary mb-2">{item.field}</h4>
          <p className="text-secondary/70 mb-4">{item.period}</p>
          <p className="text-secondary">{item.description}</p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-8">
        {item.position === 'left' ? (
          <>
            {/* Left Card */}
            <div className={`bg-dark/80 p-6 rounded-lg shadow-xl transition-all duration-1000 ${
              isIntersecting 
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-20'
            }`}>
              <h3 className="text-2xl font-bold text-light mb-2">{item.institution}</h3>
              <h4 className="text-primary mb-2">{item.field}</h4>
              <p className="text-secondary">{item.description}</p>
              <p className="text-secondary/70 mt-4">{item.period}</p>
            </div>
            {/* Empty right side */}
            <div></div>
          </>
        ) : (
          <>
            {/* Empty left side */}
            <div></div>
            {/* Right Card */}
            <div className={`bg-dark/80 p-6 rounded-lg shadow-xl transition-all duration-1000 ${
              isIntersecting 
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-20'
            }`}>
              <h3 className="text-2xl font-bold text-light mb-2">{item.institution}</h3>
              <h4 className="text-primary mb-2">{item.field}</h4>
              <p className="text-secondary">{item.description}</p>
              <p className="text-secondary/70 mt-4">{item.period}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Education;
