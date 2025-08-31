import { useEffect, useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import ProfessionalDevelopment from './components/ProfessionalDevelopment';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Marquee from './components/Marquee';
import JSProjects from './components/JSProjects';
import Footer from './components/Footer';
import SocialWatermark from './components/SocialWatermark';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-light">
      <Header isScrolled={isScrolled} />
      <SocialWatermark />
      <main className="pt-16">
        <Banner />
        <About />
        <ProfessionalDevelopment />
        <WorkExperience />
        <Education />
        <Projects />
        <Skills />
        <Marquee />
        <JSProjects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
