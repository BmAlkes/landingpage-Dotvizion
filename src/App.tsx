import React from 'react';
import Header from './components/Header';
import HeroSection from './components/Hero';
import FeaturesSection from './components/FeaturesSection';

import TestimonialsSection from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import FeaturedProjectsSlider from './components/FeaturedProjectSlider';
import CookieConsentManager from './components/Cookies/CookieConsentManager';

// 

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030B0F]">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <FeaturedProjectsSlider/>
       <TestimonialsSection />
    <ContactForm />
      <Footer />   
       {/* Banner de Consentimento de Cookies */}
       <CookieConsentManager />
    </div>
  );
};

export default App;

