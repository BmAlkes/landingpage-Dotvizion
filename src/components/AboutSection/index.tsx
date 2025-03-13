// AboutSection.jsx
import "./AboutUsSection.css";

export const AboutSection = () => {
 
  
  return (
    <section id="who-we-are" dir="rtl">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">
            אני מביא את הרעיונות שלך לעולם הדיגיטלי
          </h2>
          <p className="about-description">
            כל פרויקט שאני מפתח הוא ייחודי, מתוכנן לייצר השפעה ולספק פתרונות חכמים.
            הגישה שלי משלבת יצירתיות וטכנולוגיה כדי להפוך קונספטים לחוויות דיגיטליות בלתי נשכחות.
          </p>
          <h3 className="about-subtitle">
            ניסיון שעושה את ההבדל
          </h3>
          <p className="about-description2">
            💡 פתרונות מותאמים אישית – כל אתר, אפליקציה או חנות אונליין נבנים בהתאם לצרכים הייחודיים של העסק שלך.
            
            📈 ממוקד בתוצאות – לא מדובר רק בעיצוב יפה, אלא בביצועים, המרות וצמיחה עסקית.
            
            🤝 שותפות ארוכת טווח – אני לא רק מספק שירות, אלא בונה מערכות יחסים מבוססות אמון עם כל לקוח.
            
            אמינות כבר מהפרויקט הראשון
            גם אם זו הפעם הראשונה שאתה מכיר את העבודה שלי, המחויבות והמסירות שלי שוות לאלו של סוכנות גדולה.
            המטרה שלי היא לספק תוצאות שמדברות בעד עצמן.
          </p>

          <div className="stats-container">
            <div className="stat-box">
              <h3 className="stat-number">5+</h3>
              <p className="stat-description">
                שנים של ניסיון בפיתוח אתרים, אפליקציות ופתרונות דיגיטליים חדשניים.
              </p>
            </div>

            <div className="stat-box">
              <h3 className="stat-number">50+</h3>
              <p className="stat-description">
                פרויקטים שהושלמו, שהפכו רעיונות לחוויות דיגיטליות עוצמתיות.
              </p>
            </div>

            <div className="stat-box">
              <h3 className="stat-number">∞</h3>
              <p className="stat-description">
                מסירות מלאה לכל פרויקט חדש, עם התחייבות לאיכות, חדשנות ותוצאות.
              </p>
            </div>
          </div>
          
          <button className="learn-more-btn">
            התחילו את הפרויקט שלכם עכשיו<span className="arrow-icon">←</span>
          </button>
        </div>

        <div className="about-image">
          <img
            src="https://res.cloudinary.com/landingpage2/image/upload/v1741843760/WhatsApp_Image_2025-03-13_at_01.44.54_85b61b5f_a4i4zs.webp"
            alt="About Us"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;