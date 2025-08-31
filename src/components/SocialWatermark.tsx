import React from 'react';

const SocialWatermark: React.FC = () => {
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
      link: 'mailto:qetafetviashvili123@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <div className="fixed left-8 bottom-0 z-40 hidden lg:block">
      <div className="flex flex-col items-center gap-6">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target={social.link.startsWith('mailto') ? undefined : '_blank'}
            rel={social.link.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            aria-label={social.label}
            className="text-secondary hover:text-primary hover:-translate-y-1 transition-all duration-300"
          >
            <i className={`${social.icon} text-xl`}></i>
          </a>
        ))}
        <div className="w-[1px] h-24 bg-secondary/50 mt-4"></div>
      </div>
    </div>
  );
};

export default SocialWatermark;
