import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer py-8 px-6 bg-dark">
      <div className="container mx-auto max-w-6xl">
        <hr className="border-secondary/30 mb-8" />
        <p className="text-center text-secondary">
          © {currentYear} Qeta Fetviashvili
        </p>
      </div>
    </footer>
  );
};

export default Footer;
