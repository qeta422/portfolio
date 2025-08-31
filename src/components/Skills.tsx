import React from 'react';
import { Skill } from '../types';

const skillsData: Skill[] = [
  // Top Priority - Modern Stack
  { name: 'React.js', iconClass: 'fa-brands fa-react', color: '#61DAFB' },
  { name: 'TypeScript', iconClass: 'fa-solid fa-code', color: '#3178C6' },
  { name: 'Next.js', iconClass: 'fa-solid fa-n', color: '#000000' },
  { name: 'Tailwind CSS', iconClass: 'fa-solid fa-wind', color: '#06B6D4' },
  
  // Programming Languages
  { name: 'JavaScript ES6+', iconClass: 'fa-brands fa-js', color: '#FFD43B' },
  { name: 'jQuery', image: '/img/jquery-icon.png' },
  
  // Styling Frameworks
  { name: 'Material-UI', iconClass: 'fa-solid fa-m', color: '#0081CB' },
  { name: 'Sass/SCSS', iconClass: 'fa-brands fa-sass', color: '#d779c6' },
  { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap', color: '#9128fb' },
  
  // Development Tools
  { name: 'Git/GitHub', iconClass: 'fa-brands fa-git-alt', color: '#e15a2d' },
  { name: 'VS Code', image: '/img/Visual_Studio-icon.png' },
  { name: 'npm/yarn', iconClass: 'fa-brands fa-npm', color: '#CB3837' },
  
  // Backend & APIs
  { name: 'Firebase', iconClass: 'fa-solid fa-fire', color: '#FFA116' },
  { name: 'RESTful APIs', iconClass: 'fa-solid fa-server', color: '#FF6B6B' },
  { name: 'Netlify', iconClass: 'fa-solid fa-cloud', color: '#00C7B7' },
  
  // Design Tools
  { name: 'Figma', iconClass: 'fa-brands fa-figma', color: '#F24E1E' },
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
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      className="animate-fadeInUp bg-dark/80 p-6 rounded-lg shadow-xl flex flex-col items-center justify-center gap-4 hover:bg-dark/60 hover:scale-105 transition-all duration-300 group h-full"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {skill.iconClass ? (
        <div className="relative group">
          <i 
            className={`${skill.iconClass} text-5xl transition-all duration-300 ${
              isHovered ? '' : 'grayscale opacity-50'
            }`}
            style={{ color: isHovered && skill.color ? skill.color : '' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          ></i>
        </div>
      ) : (
        <div className="relative w-12 h-12 group">
          <img 
            src={skill.image} 
            alt={skill.name} 
            className={`w-full h-full object-contain transition-all duration-300 ${
              isHovered ? '' : 'grayscale opacity-50'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      )}
      <p className="text-secondary text-lg">{skill.name}</p>
    </div>
  );
};

export default Skills;