import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import IntroSection from '../components/IntroSection';
import WorkShowcaseSection from '../components/WorkShowcaseSection';
import AboutSection from '../components/AboutSection';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'about') {
      const section = document.getElementById('about');
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <IntroSection />
      <WorkShowcaseSection />
      <AboutSection />
    </>
  );
}

export default Home;