import "./AboutUsSection.css";

export const AboutSection = () => {
  return (
    <section id="who-we-are" dir="rtl">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">
            הצוות שמגשים את הרעיונות שלך למציאות דיגיטלית
          </h2>
          <p className="about-description">
            אנחנו לא עוד סטודיו לבניית אתרים. אנחנו יוצרים פתרונות דיגיטליים
            חכמים שמביאים תוצאות לעסקים! עם ניסיון של שנים, אנחנו מספקים אתרים
            ואפליקציות שמותאמים בדיוק לצרכים של הלקוחות שלנו – מעיצוב ייחודי ועד
            טכנולוגיות מתקדמות. החזון שלנו הוא להפוך כל רעיון למציאות דיגיטלית
            חדשנית, עם דגש על איכות, ביצועים ושירות אישי.
          </p>

          <div className="stats-container">
            <div className="stat-box">
              <h3 className="stat-number">5+</h3>
              <p className="stat-description">ניסיון של +5 שנים בפיתוח אתרים ואפליקציות</p>
            </div>

            <div className="stat-box">
              <h3 className="stat-number">100+</h3>
              <p className="stat-description">לקוחות מרוצים מכל העולם</p>
            </div>

            <div className="stat-box">
              <h3 className="stat-number">50+</h3>
              <p className="stat-description">שנות ניסיון בפיתוח דיגיטלי</p>
            </div>
          </div>
          <a
            href="https://www.dotvizion.com/about"
            target="_blank"
            rel="noreferrer"
          >
            <button className="learn-more-btn">
              התחילו את הפרויקט שלכם עכשיו<span className="arrow-icon">←</span>
            </button>
          </a>
        </div>

        <div className="about-image">
          <img
            src="https://res.cloudinary.com/landingpage2/image/upload/v1741279889/image_1_eibfiw.png"
            alt="About Us"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
};
