import  { useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate()

  return (
    <header className="header" dir="rtl">
      <div className="container">
        <div className="navbar">
          {/* Logo */}
          <div className="logo-container">
            <Link to="https://www.dotvizion.com/" target='_blank' rel="noreferrer">
            <img 
              src="https://res.cloudinary.com/landingpage2/image/upload/v1739727604/5000x5000-3-removebg-preview_qvlhb9.webp" 
              className="logo" 
              alt="logo" 
              />
              </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="desktop-menu">
            <a href="#home" className="nav-link">ראשי</a>
            <a href="#who-we-are" className="nav-link">מי אנחנו</a>
            <a href="#work-projects" className="nav-link">פרויקטים</a>
            <a href="#testimonial" className="nav-link">המלצות</a>
            <a href="#contact" className="nav-link">צור קשר</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-button">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="menu-button"
            >
              {isMenuOpen ? (
                <svg className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" className="mobile-nav-link">ראשי</a>
          <a href="#who-we-are" className="mobile-nav-link">מי אנחנו</a>
          <a href="#work-projects" className="mobile-nav-link">פרויקטים</a>
          <a href="#testimonial" className="mobile-nav-link">המלצות</a>
          <a href="#contact" className="mobile-nav-link">צור קשר</a>
        </div>
      </div>
    </header>
  );
};

export default Header;