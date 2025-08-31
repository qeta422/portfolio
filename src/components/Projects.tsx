import React from 'react';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Treveler',
    subtitle: 'Travelling Website',
    description: 'A travelling website built with only using HTML semantic structure, grid, animations, CSS flexbox and position properties. All styles and effects are using pure SASS',
    link: 'https://sasswebtravel.netlify.app/',
    imageClass: 'bg-[url("/img/flip1.jpg")]',
    colorClass: 'from-orange-400 to-orange-600'
  },
  {
    id: 2,
    title: 'Seller',
    subtitle: 'Seller Company',
    description: '* Theme- A website of a company, which is selling homes around the world.\n* A website build is focused on usage of css grids.\n* Used skills- Markup, css/scss styles, css grids, Media Queries.',
    link: 'https://sellernexter.netlify.app/',
    imageClass: 'bg-[url("/img/flip2.png")]',
    colorClass: 'from-blue-400 to-blue-600'
  },
  {
    id: 3,
    title: 'EduLine',
    subtitle: 'EduLine',
    description: 'This is a multiple-page website for an educational purpose. It uses Html, CSS and JS to display applicable content on 7 different pages. You will have access to filtration, slider and scroll functional.',
    link: 'https://edu-line.netlify.app/',
    imageClass: 'bg-[url("/img/flip3.jpg")]',
    colorClass: 'from-green-400 to-green-600'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-light">My projects</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="h-[520px] w-full perspective-1000 group">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-xl">
          <div className={`h-[45%] ${project.imageClass} bg-cover bg-center`}></div>
          <div className="p-6 bg-dark/90 h-[55%] flex flex-col">
            <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${project.colorClass} bg-clip-text text-transparent`}>
              {project.title}
            </h3>
            <p className="text-secondary text-sm leading-relaxed">{project.description}</p>
          </div>
        </div>
        
        {/* Back Side */}
        <div className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br ${project.colorClass} flex items-center justify-center`}>
          <div className="text-center p-6">
            <h3 className="text-2xl font-bold text-white mb-6">{project.subtitle}</h3>
            <a 
              href={project.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-dark px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;