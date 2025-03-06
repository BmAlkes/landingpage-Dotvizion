import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <div className="services-wrapper">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">
            Looking for Website Development
            <br />
            or Digital Growth ?
          </h2>
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
            <h3 className="service-title">Custom Web Development</h3>
            <p className="service-description">
              Professional, high-performance websites tailored to your brand.
            </p>
            <a href="#" className="service-link">
              Build Your Website
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
            <h3 className="service-title">Branding & Creative Design</h3>
            <p className="service-description">
              Stand out with visually stunning brand identities & designs.
            </p>
            <a href="#" className="service-link">
              Get Our UI/UX Work
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
            <h3 className="service-title">Web Application</h3>
            <p className="service-description">
              Boost your search rankings & drive targeted traffic to your site.
            </p>
            <a href="#" className="service-link">
              Improve Your Online Presence
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
            <h3 className="service-title">Online Store</h3>
            <p className="service-description">
              Promotional strategies to scale your business effectively.
            </p>
            <a href="#" className="service-link">
              Get a Free Strategy Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
