import React from 'react';

const Socials: React.FC = () => {
  const socials = [
    { 
      icon: 'fab fa-github', 
      link: 'https://github.com/qeta422',
      label: 'GitHub'
    },
    { 
      icon: 'fa-brands fa-linkedin-in', 
      link: 'https://www.linkedin.com/in/qeta-fetviashvili/',
      label: 'LinkedIn'
    },
    { 
      icon: 'fa-regular fa-envelope', 
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=ketevan.petviashvili.1@btu.edu.ge',
      label: 'Email'
    }
  ];

  return (
    <section className="socials py-12 px-6 bg-dark/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center items-center gap-8 mb-8">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-3xl text-secondary hover:text-primary transition-colors transform hover:scale-110"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
        <hr className="border-secondary/30" />
      </div>
    </section>
  );
};

export default Socials;
