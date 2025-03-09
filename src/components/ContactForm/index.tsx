import { useState } from 'react';
import './ContactForm.css';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { CreateLead } from '../../utils';

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
    const { name, email, message, phone } = formData;
    

    if (!name || !email || !message || !phone) {
      toast.error("נא למלא את כל השדות");
      return;
    }
    mutate(formData);
    console.log(formData);
  };

  const { mutate } = useMutation({
    mutationFn: CreateLead,
    onSuccess: () => {
      toast.success("ההודעה נשלחה בהצלחה! נחזור אליך בקרוב.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    },
    onError: (error:any) => {
      // Verifica se é o erro específico de validação que podemos ignorar
      if (error.message && error.message.includes("Notification validation failed")) {
        // Ainda assim mostra sucesso pois os dados chegaram ao CRM
        toast.success("ההודעה נשלחה בהצלחה! נחזור אליך בקרוב.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(error.message);
      }
    },
  });

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-wrapper">
          {/* Transform text section */}
          <div className="transform-business-banner">
            <h2 className="transform-title">
              <span className="title-light">מוכנים </span> <span className="title-blue">לשדרג את</span>
              <br />
              <span className="title-light">העסק </span> <span className="title-orange">שלכם ?</span>
            </h2>
            <p className="transform-subtitle">
            בואו נבנה משהו מדהים יחד.
              <br />
              צרו קשר עוד היום!
            </p>
            <a href="https://www.dotvizion.com/about" className='btn' target='_blank' rel="noreferrer">
            <button className="learn-more-btn">
              עוד פרטים עלינו<span className="arrow-icon">←</span> 
            </button>
            </a>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h2 className="contact-title">בוא נדבר </h2>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="שם מלא"
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
                  placeholder="אימייל"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"  
                  name="phone"
                  placeholder="טלפון"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="הודעה שלך"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="form-textarea"
                ></textarea>
              </div>
              
              <div className="form-submit">
                <button type="submit" className="send-message-btn">
                   שלח<span className="arrow-icon">←</span>
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Info Button */}
          <div className="contact-btn-wrapper">
              <a href="mailto:info@dotvizion.com">
            <button className="contact-us-btn">

              <span>צור קשר איתנו</span>
              <svg className="mail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
              </a>
          </div>
        </div>
      </div>
      
     
    </section>
  );
};

export default ContactForm;