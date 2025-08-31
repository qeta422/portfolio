import React from 'react';
import { JSProject } from '../types';

const jsProjectsData: JSProject[] = [
  {
    title: 'Asteroids game',
    link: 'https://asteroidrocketgame.netlify.app/',
    description: '1979 Atari game Asteroids using vanilla JavaScript.',
    icon: 'fas fa-gamepad'
  },
  {
    title: 'YouTube Resource Gallery',
    link: 'https://youtube-resource-gallery.netlify.app/',
    description: 'A YouTube resource gallery where you can save all videos from YouTube that are helpful resources.',
    icon: 'fas fa-play'
  },
  {
    title: 'Filter Products',
    link: 'https://products-js-filter.netlify.app/',
    description: 'A JavaScript project of product page, where you can filter data with different search methods.',
    icon: 'fas fa-magnifying-glass'
  },
  {
    title: 'React Weather App',
    link: 'https://w-app-react.netlify.app/',
    description: 'A weather app built using React JS.',
    icon: 'fas fa-cloud-sun'
  }
];

const JSProjects: React.FC = () => {
  return (
    <section className="js-projects py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-light">JS Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {jsProjectsData.map((project, index) => (
            <JSProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="https://github.com/qeta422" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary text-primary px-8 py-4 rounded-full hover:bg-primary/10 transition-all"
          >
            Visit My GitHub For More
          </a>
        </div>
      </div>
    </section>
  );
};

const JSProjectCard: React.FC<{ project: JSProject }> = ({ project }) => {
  return (
    <div className="bg-dark/80 p-6 rounded-lg shadow-xl hover:bg-dark/60 transition-all group">
      <i className={`${project.icon} text-2xl text-primary mb-4 block group-hover:scale-110 transition-transform`}></i>
      <h3 className="mb-4">
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold text-light hover:text-primary transition-colors"
        >
          {project.title}
        </a>
      </h3>
      <p className="text-secondary text-sm">{project.description}</p>
    </div>
  );
};

export default JSProjects;
