

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <polyline points="9 10 4 15 9 20"></polyline>
          <polyline points="15 10 20 15 15 20"></polyline>
        </svg>
      ),
      title: "Custom Web Development",
      description: "Professional, high-performance websites tailored to your brand.",
      cta: "Build Your Website",
      ctaColor: "text-cyan-300",
      highlighted: false
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
          <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
          <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
          <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
          <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
          <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
        </svg>
      ),
      title: "Branding & Creative Design",
      description: "Stand out with visually stunning brand identities & UI/UX design",
      cta: "See Our Branding Work",
      ctaColor: "text-orange-500",
      highlighted: false
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <path d="M7 9h2v2H7V9z"></path>
          <path d="M15 9h2v2h-2V9z"></path>
        </svg>
      ),
      title: "SEO & Digital Marketing",
      description: "Boost your search rankings & drive more organic traffic.",
      cta: "―",
      ctaColor: "text-orange-500",
      highlighted: true
    },
    {
      id: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18"></path>
          <path d="M18 17l3-3-3-3"></path>
          <path d="M3 8h12a3 3 0 0 1 3 3v9"></path>
        </svg>
      ),
      title: "Business Growth Consultation",
      description: "Personalized strategies to scale your business efficiently",
      cta: "Get a Free Strategy Call",
      ctaColor: "text-orange-500",
      highlighted: false
    }
  ];

  return (
    <div className="bg-[#0D1214] py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-semibold text-center mb-20 w-full max-w-[956px] mx-auto font-['Noto_Sans_Hebrew'] leading-[130%]"
            style={{
              background: "radial-gradient(39.49% 258.56% at 50% 50%, #FC8814 0%, #6FCFED 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
          Looking for Website Development
          <br />
          or Digital Growth?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`bg-[#111A1F] rounded-lg p-8 flex flex-col items-center md:items-start text-center md:text-left h-full
                ${service.highlighted ? 'border border-orange-500' : ''}`}
            >
              <div className={`mb-6 ${service.highlighted ? 'text-orange-500' : 'text-white'}`}>
                {service.icon}
              </div>
              
              <h3 className="text-white text-xl font-bold mb-3">
                {service.title}
              </h3>
              
              {service.highlighted ? (
                <h4 className="text-orange-500 text-lg font-semibold mb-4">Marketing</h4>
              ) : null}
              
              <p className="text-gray-300 mb-6 flex-grow">
                {service.description}
              </p>
              
              <a 
                href="#" 
                className={`${service.ctaColor} font-medium hover:underline`}
              >
                {service.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;