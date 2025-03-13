import { useState } from 'react';
import './ContactForm.css';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { CreateLead } from '../../utils';
import DotVizionToast from '../ToastifyPersonalizado';


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
      DotVizionToast.success("ההודעה נשלחה בהצלחה! נחזור אליך בקרוב.");
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
        DotVizionToast.error(error.message);
      }
    },
  });

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          {/* Transform text section */}
          <div className="transform-business-banner">
            <h2 className="transform-title">
              <span className="title-light">הלקוחות שלכם</span> <span className="title-blue">מחפשים אתכם</span>
              <br />
              <span className="title-light">עכשיו -</span> <span className="title-orange">תנו להם אתר מקצועי</span>
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
                <button type="submit" className="contact-us-btn">
                   שלח<span className="arrow-icon">←</span>
                </button>
              </div>
            </form>
          </div>
          
      
        </div>
      </div>
      
     
    </section>
  );
};

export default ContactForm;