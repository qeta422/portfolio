import React from 'react';
import { Skill } from '../types';

const skillsData: Skill[] = [
  // First row - Modern Stack
  { name: 'React', iconClass: 'fa-brands fa-react', color: '#61DAFB' },
  { name: 'Next.js', iconClass: 'fa-solid fa-n', color: '#000000' },
  { name: 'TypeScript', iconClass: 'fa-solid fa-code', color: '#3178C6' },
  { name: 'Tailwind', iconClass: 'fa-solid fa-wind', color: '#06B6D4' },
  
  // Second row - Core Skills
  { name: 'JavaScript', iconClass: 'fa-brands fa-js', color: '#FFD43B' },
  { name: 'Git', iconClass: 'fa-brands fa-git-alt', color: '#e15a2d' },
  { name: 'REST API', iconClass: 'fa-solid fa-server', color: '#FF6B6B' },
  { name: 'Firebase', iconClass: 'fa-solid fa-fire', color: '#FFA116' },
  
  // Third row - Additional Tech
  { name: 'Sass', iconClass: 'fa-brands fa-sass', color: '#d779c6' },
  { name: 'jQuery', image: '/img/jquery-icon.png' },
  { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap', color: '#9128fb' },
  { name: 'Figma', iconClass: 'fa-brands fa-figma', color: '#F24E1E' },
  
  // Fourth row - Design Tools
  { name: 'Photoshop', image: '/img/Photoshop-icon.png' },
  { name: 'Illustrator', image: '/img/illustrator-icon.png' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills py-24 px-6 bg-dark/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-light">Skills & Tools</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<{ skill: Skill & { color?: string }; index: number }> = ({ skill, index }) => {
  return (
    <div 
      className="skill-card bg-dark/80 p-6 rounded-lg shadow-xl flex flex-col items-center justify-center gap-4 hover:bg-dark/60 hover:scale-105 transition-all duration-300 group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {skill.iconClass ? (
        <div className="relative group">
          <i 
            className={`${skill.iconClass} text-5xl text-secondary/50 transition-all duration-300 group-hover:text-opacity-100`}
            style={{
              filter: 'grayscale(1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'grayscale(0)';
              if (skill.color) {
                e.currentTarget.style.color = skill.color;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'grayscale(1)';
              e.currentTarget.style.color = '';
            }}
          ></i>
        </div>
      ) : (
        <div className="relative w-12 h-12 group">
          <img 
            src={skill.image} 
            alt={skill.name} 
            className="w-full h-full object-contain transition-all duration-300"
            style={{
              filter: 'grayscale(1)',
              opacity: '0.5'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'grayscale(0)';
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'grayscale(1)';
              e.currentTarget.style.opacity = '0.5';
            }}
          />
        </div>
      )}
      <p className="text-secondary text-lg">{skill.name}</p>
    </div>
  );
};

export default Skills;
