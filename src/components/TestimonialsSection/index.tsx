import  { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
  const sliderRef = useRef<Slider | null>(null);

  // Configurações para o slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    customPaging: function() {
      return (
        <div className="custom-dot"></div>
      );
    }
  };

  // Iniciar autoplay manualmente após o componente montar
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      setTimeout(() => {
        slider.slickPlay();
      }, 100);
    }
  }, []);

  // Dados dos depoimentos
  const testimonials = [
    {
      id: 1,
      name: "Ofir Zeitoun.",
      role: "Software Mentor & Freelance",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1710178264/ofir_ev3nqk.jpg",
      quote: "הכרתי את ברונו בתור סטודנט שלי, כבר מההתחלה עפתי עליו, הוא הביא עיצובים מרשימים במהירות שיא והתפתח מאוד מאז. ראיתי את כל העבודות שלו ואהבתי כל אחת, הוא יושב עם הלקוח להבין מה הלקוח צריך ומשם הוא לוקח את זה למקומות מרשימים. ברונו - חרוץ, מקשיב, מגלה הבנה ואמפתיה - מומלץ בחום"
    },
    {
      id: 2,
      name: "Anastacia Tsarfati",
      role: "Owner of Safegarden",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1710178263/logo_tswkge.png",
      quote: "ממליצה בחום על ברונו! באתר של SafeGarden חיפשתי מתכנת פרונט שיבין את החזון של האתר ואת הצרכים של המערכת. ברונו עבד בצורה מדויקת ומהירה, שאל את השאלות הנכונות וידע בדיוק מה הצרכים של המערכת. השיתוף פעולה איתו היה קליל ומקצועי והכי חשוב אנושי!"
    },
    
    
  ];

  return (
    <section className="testimonial-section" id="testimonial">
      <div className="container">
        <div className="headerTestimonial">
     
          <h2 className="title">
          מה הלקוחות שלנו אומרים
          </h2>
         
      
          <p className="subtitle">
          אנחנו מביאים רעיונות לחיים עם עיצובים וטכנולוגיה חדשנית.
            <br />
            גלו את העבודה האחרונה שלנו!
          </p>
        </div>
        
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="slide">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p className="testimonial-quote">"{testimonial.quote}"</p>
                    <div className="testimonial-author">
                      <div className="author-info">
                        <h3 className="author-name">{testimonial.name}</h3>
                        <p className="author-role">{testimonial.role}</p>
                      </div>
                      <div className="author-image">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;