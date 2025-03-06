import './hero.css';

const HeroSection = () => {


  return (
    <div className="hero-container" id="home">
      <div className='effectRight'></div>
      <div className='effectLeft'></div>
    <div className="hero-content">
      <h1 className="hero-title">
        <span className="title-white">Transforming</span>
        <br />
        <span className="title-orange">Ideas into </span>
        <span className="title-blue">Digital</span>
        <br />
        <span className="title-blue">Excellence</span>
      </h1>
      <p className="hero-description">
        We craft innovative digital solutions that drive growth
        and elevate your brand. From design to development,
        DotVision is your partner in success
      </p>
      <button className="learn-more-btn">
        <a href="https://www.dotvizion.com" target="_blank" rel="noreferrer">

        <span className="arrow-icon">←</span> Learn More About Us
        </a>
      </button>
      <div className="clients-section">
        <div className="avatar-group">
          <img src="https://res.cloudinary.com/landingpage2/image/upload/v1740851419/Ellipse_11_cst6ms.png" alt="Client" className="avatar" />
          <img src="https://res.cloudinary.com/landingpage2/image/upload/v1740851419/Ellipse_9_x3lypd.png" alt="Client" className="avatar" />
          <img src="https://res.cloudinary.com/landingpage2/image/upload/v1740851420/Ellipse_7_ed7fmr.png" alt="Client" className="avatar" />
          <img src="https://res.cloudinary.com/landingpage2/image/upload/v1740851420/Ellipse_2_rutcc6.png" alt="Client" className="avatar" />
          <img src="https://res.cloudinary.com/landingpage2/image/upload/v1740851419/Ellipse_10_h492rr.png" alt="Client" className="avatar" />
        </div>
        <p className="clients-text">100+ Clients world wide trusted by us</p>
      </div>
    </div>
    <div className="hero-image">
      <div className="image-gradient-overlay">
        <img src="https://res.cloudinary.com/landingpage2/image/upload/v1740848211/Frame_7_ihzoqa.webp" alt="" />
      </div>
    </div>
  </div>

  );
};

export default HeroSection;