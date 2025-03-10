import "./hero.css";

const HeroSection = () => {
  return (
    <div className="hero-container" id="home" dir="rtl">
      <div className="effectRight"></div>
      <div className="effectLeft"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-white">אנחנו לוקחים את</span>
          <br />
          <span className="title-orange">הרעיונות שלך והופכים אותם</span>{" "}
          <span className="title-blue">למוצרים דיגיטליים</span>
          <br />
          <span className="title-blue">מדהימים</span>
        </h1>
        <p className="hero-description">
          אנו יוצרים פתרונות דיגיטליים חדשניים שמניעים צמיחה ומעצימים את המותג
          שלך. מהעיצוב ועד הפיתוח, DotVizion היא השותפה שלך להצלחה.
        </p>
        <button className="learn-more-btn">
          <a href="https://www.dotvizion.com" target="_blank" rel="noreferrer">
             עוד עלינו<span className="arrow-icon">←</span>
          </a>
        </button>
        <div className="clients-section">
          <div className="avatar-group">
            <img
              src="https://res.cloudinary.com/landingpage2/image/upload/v1740851419/Ellipse_11_cst6ms.png"
              alt="Client"
              className="avatar"
            />
            <img
              src="https://res.cloudinary.com/landingpage2/image/upload/v1740851419/Ellipse_9_x3lypd.png"
              alt="Client"
              className="avatar"
            />
            <img
              src="https://res.cloudinary.com/landingpage2/image/upload/v1740851420/Ellipse_7_ed7fmr.png"
              alt="Client"
              className="avatar"
            />
            <img
              src="https://res.cloudinary.com/landingpage2/image/upload/v1740851420/Ellipse_2_rutcc6.png"
              alt="Client"
              className="avatar"
            />
            <img
              src="https://res.cloudinary.com/landingpage2/image/upload/v1740851419/Ellipse_10_h492rr.png"
              alt="Client"
              className="avatar"
            />
          </div>
          <p className="clients-text">100+ לקוחות ברחבי העולם סומכים עלינו</p>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-gradient-overlay">
          <img
            src="https://res.cloudinary.com/landingpage2/image/upload/v1741372944/Frame_7_1_siispk.webp"
            alt=""
            className="hero-main-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;