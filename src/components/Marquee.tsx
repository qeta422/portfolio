import React from 'react';
import { MarqueeProject } from '../types';

const marqueeProjects: MarqueeProject[] = [
  { title: 'Weather App', link: 'https://w-app-react.netlify.app/', image: '/img/weather-app.png' },
  { title: 'Products Filter', link: 'https://products-js-filter.netlify.app/', image: '/img/products filter.png' },
  { title: 'YouTube Gallery', link: 'https://youtube-resource-gallery.netlify.app/', image: '/img/youtube resource gallery.png' },
  { title: 'To Do List', link: 'https://10-jsproject.netlify.app/project6', image: '/img/to do list.png' },
  { title: 'Guessing Game', link: 'https://guessmy-number-game.netlify.app/', image: '/img/guessing-game.png' },
  { title: 'Pig Game', link: 'https://piggame-diceroller.netlify.app/', image: '/img/pig game.png' },
  { title: 'Asteroids', link: 'https://asteroidrocketgame.netlify.app/', image: '/img/Asteroids.png' },
  { title: 'Product Cart', link: 'https://shop-and-cart.netlify.app/', image: '/img/product cart.png' },
  { title: 'Quiz App', link: 'https://quizzappy.netlify.app/', image: '/img/quiz app.png' },
];

const Marquee: React.FC = () => {
  // Duplicate the array for continuous scrolling
  const duplicatedProjects = [...marqueeProjects, ...marqueeProjects];

  return (
    <section className="marquee overflow-hidden py-16 bg-dark/30">
      <div className="marquee-container flex">
        <div className="marquee-content flex animate-marquee">
          {duplicatedProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="marquee-item flex-shrink-0 mx-4 hover:scale-105 transition-transform"
            >
              <div className="w-64 h-40 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
