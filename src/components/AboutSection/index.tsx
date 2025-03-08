import "./AboutUsSection.css";

export const AboutSection = () => {
  return (
    <section id="who-we-are" dir="rtl">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">מי אנחנו</h2>
          <p className="about-description">
            אנחנו צוות נלהב המוקדש ליצור חוויות דיגיטליות שמניעות תוצאות. עם
            מומחיות בעיצוב אתרים, שיווק ומיתוג, אנחנו עוזרים לעסקים כמו שלך
            לבלוט בעולם הדיגיטלי.
          </p>

          <div className="stats-container">
            <div className="stat-box">
              <h3 className="stat-number">5+</h3>
              <p className="stat-description">שנות נסיון</p>
            </div>

            <div className="stat-box">
              <h3 className="stat-number">100+</h3>
              <p className="stat-description">פרויקטים מוצלחים</p>
            </div>

            <div className="stat-box">
              <h3 className="stat-number">50+</h3>
              <p className="stat-description">לקוחות מרוצים</p>
            </div>
          </div>
          <a href="https://www.dotvizion.com/about" target="_blank" rel="noreferrer">
            <button className="learn-more-btn">
              למידע נוסף<span className="arrow-icon">←</span>
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
