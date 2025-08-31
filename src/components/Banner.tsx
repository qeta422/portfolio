import React from 'react';
import { Link } from 'react-scroll';

const Banner: React.FC = () => {
  return (
    <section className="banner min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-4xl animate-fadeInUp">
        <p className="text-primary font-fira mb-4">Hi! my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-light mb-4">
          Qeta Fetviashvili
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-8">
          I am a Junior React Developer
        </h2>
        <p className="text-xl text-secondary max-w-2xl mb-12">
          I transform complex data challenges into elegant, user-friendly solutions. 
          With expertise in React, TypeScript, and modern frontend technologies, 
          I craft responsive interfaces that make powerful AI-driven analytics accessible to everyone.
        </p>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="inline-block border border-primary text-primary px-8 py-4 rounded-full hover:bg-primary/10 transition-all cursor-pointer"
        >
          Technical Skills
        </Link>
      </div>
    </section>
  );
};

export default Banner;
