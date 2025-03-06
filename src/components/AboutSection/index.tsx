import React from 'react';
import './AboutUsSection.css';

export const AboutSection: React.FC = () => {
  return (
    <section id="who-we-are" >
      <div className="about-container">
      <div className="about-content">
        <h2 className="about-title">Who We Are</h2>
        <p className="about-description">
          We are a passionate team dedicated to crafting digital experiences that drive 
          results. With expertise in web design, marketing, and branding, we help 
          businesses like yours stand out in the digital world
        </p>
        
        <div className="stats-container">
          <div className="stat-box">
            <h3 className="stat-number">5+</h3>
            <p className="stat-description">years of experience</p>
          </div>
          
          <div className="stat-box">
            <h3 className="stat-number">100+</h3>
            <p className="stat-description">successful projects</p>
          </div>
          
          <div className="stat-box">
            <h3 className="stat-number">50+</h3>
            <p className="stat-description">Happy Customers</p>
          </div>
        </div>
        
        <button className="learn-more-btn">
          <span className="arrow-icon">←</span> Learn More About Us
        </button>
      </div>
      
      <div className="about-image">
       <img src="https://res.cloudinary.com/landingpage2/image/upload/v1741279889/image_1_eibfiw.png" alt="" />
      </div>
    </div>
    </section>)}