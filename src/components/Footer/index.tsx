import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Social Media</h3>
          <ul className="footer-links">
            <li>
              <a
                href="https://www.instagram.com/dotvizionn/"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61571532141434"
                className="footer-link"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Features</h3>
          <ul className="footer-links">
            <li>
              <a
                href="https://www.dotvizion.com/"
                className="footer-link"
                target="_blank"
                rel="noreferrer"
              >
                Get Started
              </a>
            </li>
            <li>
              <a
                href="https://www.dotvizion.com/conditions"
                className="footer-link"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Home</h3>
          <ul className="footer-links">
            <li>
              <a href="#" className="footer-link">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Our works
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-logo-section">
          <img
            src={
              "https://res.cloudinary.com/landingpage2/image/upload/v1732554815/5000x5000-3-removebg-preview_jxhv2o.png"
            }
            alt="DotVizion Logo"
            className="footer-logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
