import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    // Show success message
    alert('Message sent successfully!');
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-wrapper">
          {/* Transform text section */}
          <div className="transform-business-banner">
            <h2 className="transform-title">
              <span className="title-light">Ready to</span> <span className="title-blue">Transform</span>
              <br />
              <span className="title-light">Your</span> <span className="title-orange">Business?</span>
            </h2>
            <p className="transform-subtitle">
              Let's build something amazing together.
              <br />
              Get in touch today!
            </p>
            <a href="https://www.dotvizion.com/about" target='_blank' rel="noreferrer">
            <button className="learn-more-btn">
              <span className="arrow-icon">←</span> Learn More About Us
            </button>
            </a>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h2 className="contact-title">Let Talk</h2>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="form-textarea"
                ></textarea>
              </div>
              
              <div className="form-submit">
                <button type="submit" className="send-message-btn">
                  <span className="arrow-icon">←</span> Send Message
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Info Button */}
          <div className="contact-btn-wrapper">
              <a href="mailto:info@dotvizion.com">
            <button className="contact-us-btn">
              <svg className="mail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>

              <span>Contact with us</span>
            </button>
              </a>
          </div>
        </div>
      </div>
      
      <div className="footer-note">
        <p>These elements help ensure visitors can easily find important information and stay connected with your agency</p>
      </div>
    </section>
  );
};

export default ContactForm;