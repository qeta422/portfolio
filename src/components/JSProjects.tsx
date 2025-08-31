import React from 'react';
import { JSProject } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const jsProjectsData: JSProject[] = [
  {
    title: 'E-Commerce React Application',
    link: 'https://shop-and-cart.netlify.app/',
    description: 'Modern e-commerce platform with product catalog, shopping cart, and user authentication. Built with React.js, TypeScript, Tailwind CSS, and Firebase.',
    icon: 'fas fa-shopping-cart'
  },
  {
    title: 'Task Management Dashboard',
    link: 'https://reacttd.netlify.app/',
    description: 'Interactive task management app with drag-and-drop functionality, priority sorting, and data persistence. Uses React.js, Context API, TypeScript, and Tailwind CSS.',
    icon: 'fas fa-tasks'
  },
  {
    title: 'Weather Forecast App',
    link: 'https://w-app-react.netlify.app/',
    description: 'Responsive weather application featuring real-time data, location-based forecasts, and interactive charts. Built with JavaScript ES6, OpenWeather API, Geolocation, and Sass.',
    icon: 'fas fa-cloud-sun'
  },
  {
    title: 'Filter Products',
    link: 'https://products-js-filter.netlify.app/',
    description: 'JavaScript project demonstrating advanced filtering techniques with search, category filtering, and price range selection.',
    icon: 'fas fa-magnifying-glass'
  },
  {
    title: 'YouTube Resource Gallery',
    link: 'https://youtube-resource-gallery.netlify.app/',
    description: 'A resource management tool for saving and organizing educational YouTube videos with categorization features.',
    icon: 'fas fa-play'
  },
  {
    title: 'Asteroids Game',
    link: 'https://asteroidrocketgame.netlify.app/',
    description: 'Recreation of the classic 1979 Atari Asteroids game using vanilla JavaScript and HTML5 Canvas.',
    icon: 'fas fa-gamepad'
  }
];

const JSProjects: React.FC = () => {
  const { ref: sectionRef, isIntersecting: sectionIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="js-projects py-24 px-6" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          sectionIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-light">Featured Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {jsProjectsData.map((project, index) => (
            <JSProjectCard key={index} project={project} index={index} />
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

const JSProjectCard: React.FC<{ project: JSProject; index: number }> = ({ project, index }) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-dark/80 p-8 rounded-lg shadow-xl hover:bg-dark/60 transition-all duration-1000 transform group h-full flex flex-col ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-center mb-4">
        <i className={`${project.icon} text-4xl text-primary block group-hover:scale-110 transition-transform duration-300`}></i>
      </div>
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
      <p className="text-secondary text-sm flex-grow">{project.description}</p>
    </div>
  );
};

export default JSProjects;
