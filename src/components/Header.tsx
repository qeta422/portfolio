import React from 'react';
import { Link } from 'react-scroll';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark/95 backdrop-blur-sm shadow-lg py-4' : 'py-6'
    }`}>
      <nav className="container mx-auto px-6">
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
              to="education"
              smooth={true}
              duration={500}
              className="text-light hover:text-primary transition-colors cursor-pointer"
            >
              <span className="text-primary">02.</span> Education
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-light hover:text-primary transition-colors cursor-pointer"
            >
              <span className="text-primary">03.</span> Projects
            </Link>
          </div>
          <a 
            href="/documents/CV.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-4 py-2 rounded hover:bg-primary/10 transition-all"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
