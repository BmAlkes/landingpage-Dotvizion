import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <div className="services-wrapper">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">
          מחפשים פיתוח אתרים
            <br />
              או צמיחה דיגיטלית ?          </h2>
        </div>

        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="icon-container">
              <img
                src="https://res.cloudinary.com/landingpage2/image/upload/v1741279158/Vector_xnzgtc.png"
                alt=""
              />
            </div>
            <h3 className="service-title">פיתוח אתרים בהתאמה אישית</h3>
            <p className="service-description">
            אתרים מקצועיים ובעלי ביצועים גבוהים, מותאמים למותג שלך.
            </p>
            <a href="#" className="service-link">
            בנו את האתר שלכם
            </a>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <div className="icon-container">
              <img
                src="https://res.cloudinary.com/landingpage2/image/upload/v1741279159/lightbulb-on_3_ljqsgy.png"
                alt="bulb"
              />
            </div>
            <h3 className="service-title">מיתוג ועיצוב קריאטיבי</h3>
            <p className="service-description">
            הבלט עם זהויות מותג ועיצובים מרהיבים וויזואלית.
            </p>
            <a href="#" className="service-link">
            קבלו את עבודות ה-UI/UX שלנו
            </a>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="icon-container">
              <img
                src="https://res.cloudinary.com/landingpage2/image/upload/v1741279158/it-alt_1_ufykau.png"
                alt=""
              />
            </div>
            <h3 className="service-title">אפליקציות ווב</h3>
            <p className="service-description">
            אפליקציות ווב מותאמות אישית שמביאות פתרונות טכנולוגיים מתקדמים לחווית משתמש מעולה.
            </p>
            <a href="#" className="service-link">
            שדרג את הנוכחות הדיגיטלית שלך
            </a>
          </div>

          {/* Card 4 */}
          <div className="service-card">
            <div className="icon-container">
              <img
                src="https://res.cloudinary.com/landingpage2/image/upload/v1741279159/graph-curve_1_1_ng6vwu.png"
                alt="graphic"
              />
            </div>
            <h3 className="service-title">חנות אונליין</h3>
            <p className="service-description">
            חנות אונליין מותאמת אישית שמאפשרת לך למכור בקלות וביעילות. עם עיצוב אינטואיטיבי, פתרונות תשלום מאובטחים, וחווית משתמש מושלמת, החנות שלך תהיה מוכנה להצלחה בעולם הדיגיטלי.
            </p>
            <a href="#" className="service-link">
            התחל למכור אונליין היום
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
