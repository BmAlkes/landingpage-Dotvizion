import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 px-6 md:px-12 header ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
          <img src="https://res.cloudinary.com/landingpage2/image/upload/v1732554815/5000x5000-3-removebg-preview_jxhv2o.png" className='w-60' alt="logo" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-brand-blue transition-colors">Home</a>
            <a href="#who-we-are" className="text-white hover:text-brand-blue transition-colors">Who we are</a>
            <a href="#work-projects" className="text-white hover:text-brand-blue transition-colors">Work Projects</a>
            <a href="#testimonial" className="text-white hover:text-brand-blue transition-colors">Testimonial</a>
            <a href="#contact" className="text-white hover:text-brand-blue transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 mr-auto  bg-dark-secondary rounded-lg">
            <div className="flex flex-col  space-y-4 px-4">
              <a href="#home" className="text-white hover:text-brand-blue transition-colors">Home</a>
              <a href="#who-we-are" className="text-white hover:text-brand-blue transition-colors">Who we are</a>
              <a href="#work-projects" className="text-white hover:text-brand-blue transition-colors">Work Projects</a>
              <a href="#testimonial" className="text-white hover:text-brand-blue transition-colors">Testimonial</a>
              <a href="#contact" className="text-white hover:text-brand-blue transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;