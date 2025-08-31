import React from 'react';
import { Link } from 'react-scroll';

const Banner: React.FC = () => {
  return (
    <section className="banner min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl animate-fadeInUp">
        <p className="text-primary font-fira mb-4">Hi! my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-light mb-4">
          Qeta Fetviashvili
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-8">
          I am a Front-End Developer
        </h2>
        <p className="text-xl text-secondary max-w-2xl mb-12">
          I enjoy creating simple and beautiful appearance as well as coding solutions to
          the problems that reflect real-life challenges.
        </p>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="inline-block border border-primary text-primary px-8 py-4 rounded hover:bg-primary/10 transition-all cursor-pointer"
        >
          Technical Skills
        </Link>
      </div>
    </section>
  );
};

export default Banner;
