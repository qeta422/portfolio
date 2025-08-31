import React from 'react';
import { Skill } from '../types';

const skillsData: Skill[] = [
  { name: 'JavaScript', iconClass: 'fa-brands fa-js text-[#FFD43B]' },
  { name: 'HTML', iconClass: 'fa-brands fa-html5 text-[#fb6e23]' },
  { name: 'JQuery', image: '/img/jquery-icon.png' },
  { name: 'CSS', iconClass: 'fa-brands fa-css3-alt text-[#368eec]' },
  { name: 'Sass', iconClass: 'fa-brands fa-sass text-[#d779c6]' },
  { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap text-[#9128fb]' },
  { name: 'Git', iconClass: 'fa-brands fa-git-alt text-[#e15a2d]' },
  { name: 'VScode', image: '/img/Visual_Studio-icon.png' },
  { name: 'Figma', image: '/img/Figma-icon.png' },
  { name: 'Photoshop', image: '/img/Photoshop-icon.png' },
  { name: 'Illustrator', image: '/img/illustrator-icon.png' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills min-h-screen py-20 px-6 bg-dark/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-light">Skills & Tools</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  return (
    <div 
      className="skill-card bg-dark/80 p-6 rounded-lg shadow-xl flex flex-col items-center justify-center gap-4 hover:bg-dark/60 hover:scale-105 transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {skill.iconClass ? (
        <i className={`${skill.iconClass} text-5xl`}></i>
      ) : (
        <img src={skill.image} alt={skill.name} className="w-12 h-12 object-contain" />
      )}
      <p className="text-secondary text-lg">{skill.name}</p>
    </div>
  );
};

export default Skills;
