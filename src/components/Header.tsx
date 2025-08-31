import React from 'react';
import { Link } from 'react-scroll';
import resumePDF from '../assets/CV.pdf';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'px-4 pt-4' : ''
    }`}>
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark/80 backdrop-blur-md shadow-2xl rounded-full mx-auto max-w-4xl' 
          : 'bg-transparent'
      }`}>
        <div className={`px-8 ${isScrolled ? 'py-4' : 'py-6'}`}>
          <div className="flex justify-between items-center">
            <div className="flex space-x-8">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-light hover:text-primary transition-colors cursor-pointer"
              >
                <span className="text-primary">01.</span> About
              </Link>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="text-light hover:text-primary transition-colors cursor-pointer"
              >
                <span className="text-primary">02.</span> Experience
              </Link>
              <Link
                to="education"
                smooth={true}
                duration={500}
                className="text-light hover:text-primary transition-colors cursor-pointer"
              >
                <span className="text-primary">03.</span> Education
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="text-light hover:text-primary transition-colors cursor-pointer"
              >
                <span className="text-primary">04.</span> Projects
              </Link>
            </div>
            <a 
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary px-4 py-2 rounded-full hover:bg-primary/10 transition-all"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
