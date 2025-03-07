import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FeaturedProjectsSlider.css';
import { useEffect, useRef } from 'react';

const FeaturedProjectsSlider = () => {
  // Configurações para o slider
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
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };

  // Iniciar autoplay manualmente após o componente montar
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      // Pequeno timeout para garantir que o slider está completamente inicializado
      setTimeout(() => {
        slider.slickPlay();
      }, 100);
    }

    return () => {
      // Limpar timeout se o componente for desmontado
      if (slider) {
        slider.slickPause();
      }
    };
  }, []);

  // Dados dos projetos
  const projects = [
    {
      id: "1",
      title: "WebCar",
      description: "Platform for selling and publishing cars, where you can add cars, delete cars, speak directly with the seller",
      image: "https://raw.githubusercontent.com/BmAlkes/webcar/main/src/assets/Screenshot_16.png",
      technologies: ["React", "Firebase", "Styled-Components"],
      category: "React",
      links: {
        live: "https://webcar-umber.vercel.app/",
      }
    },
    {
      id: "2",
      title: "MetaDaily",
      description: "Platform for to help to create and manage habits",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1708932226/Screenshot_22_ylvdnf.png",
      technologies: ["NextJS", "TypeScript", "TailwindCSS"],
      category: "NextJS",
      links: {
        live: "https://metadaily.vercel.app/",
      }
    },
    {
      id: "3",
      title: "Club Clothes",
      description: "Eccomerce made with react, and firebase conneting with Stripe api for payments",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1727969288/Screenshot_23_deonbw_1_jhf7jt.png",
      technologies: ["React", "Firebase", "Stripe", "Styled-Components"],
      category: "React",
      links: {
        live: "https://new-club-clothes.vercel.app/",
      }
    },
    {
      id: "4",
      title: "Binvent CRM",
      description: "CRM for Stock Management, Inventory system to control and manage products, using React, express, mongoDB..",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1708932226/Screenshot_24_o3royj.png",
      technologies: ["React", "Express", "MongoDB", "Node.js"],
      category: "React",
      links: {
        live: "https://binvent.vercel.app/",
      }
    },
    {
      id: "5",
      title: "Call Controller",
      description: "Platform for controlling calls and checking the status of calls",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1708932226/Screenshot_25_hdpt1x.png",
      technologies: ["React", "Firebase", "TailwindCSS"],
      category: "React",
      links: {
        live: "https://call-project.vercel.app",
      }
    },
    {
      id: "6",
      title: "Pizza Platform",
      description: "Platform for Pizza",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1708932226/Screenshot_26_luipiv.png",
      technologies: ["JavaScript", "HTML", "CSS"],
      category: "Javascript/HTML",
      links: {
        live: "https://pizza-lac-five.vercel.app/",
      }
    },
    {
      id: "7",
      title: "Online Store",
      description: "Online store built with vanilla JavaScript",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1727969822/Screenshot_27_a6sppc_1_gshqfs.png",
      technologies: ["JavaScript", "HTML", "CSS"],
      category: "Javascript",
      links: {
        live: "https://ecommerce-xhdu.vercel.app/",
      }
    },
    
    {
      id: "8",
      title: "Deliver Coffee",
      description: "Web site for company",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1709303998/deliver_urazsz.png",
      technologies: ["React", "TailwindCSS", "TypeScript"],
      category: "React",
      links: {
        live: "https://deliver-coffe.vercel.app/",
      }
    },
    
    {
      id: "10",
      title: "Accountant",
      description: "A landing page made for accountant",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1722105071/Screenshot_10_fhniyl.png",
      technologies: ["WordPress", "Elementor", "PHP"],
      category: "WordPress/Elementor",
      links: {
        live: "https://lime-heron-339975.hostingersite.com",
      }
    },
    {
      id: "11",
      title: "Lawyer Company",
      description: "A landing page made for Lawyer",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1722105732/Screenshot_11_qjpjde.png",
      technologies: ["WordPress", "Elementor", "PHP"],
      category: "WordPress/Elementor",
      links: {
        live: "https://lavenderblush-grasshopper-239774.hostingersite.com/",
      }
    },
   
    {
      id: "12",
      title: "Nexus Architecture",
      description: "Web site for company",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1734201091/Screenshot_18_zrfoqh.png",
      technologies: ["WordPress", "Elementor", "WooCommerce"],
      category: "WordPress/Elementor",
      links: {
        live: "https://nexusmyhomes.com",
      }
    },
    {
      id: "13",
      title: "Tomato App",
      description: "Web application",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1739906913/Screenshot_10_obqtkw.png",
      technologies: ["React", "MERN", "TailwindCSS"],
      category: "React",
      links: {
        live: "https://tomato-ten-snowy.vercel.app/",
      }
    },
    {
      id: "14",
      title: "Oz Wiz",
      description: "Landing Page",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1739906822/Screenshot_11_vfp5xx.png",
      technologies: ["Wordpress", "Elementor"],
      category: "WordPress/Elementor",
      links: {
        live: "https://oz-wiz.com/",
      }
    },
    
  ];

  return (
    <section className="featured-projects-slider" id="work-projects">
      <div className="container">
        <div className="headerSlider">
          <h2 className="title">
          הפרויקטים המובילים שלנו
          </h2>
          <p className="subtitle">
          אנחנו מביאים רעיונות לחיים עם עיצובים וטכנולוגיה חדשנית.
            <br />
            גלו את העבודה האחרונה שלנו!
          </p>
        </div>
        
        <div className="slider-container">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="slide">
                <div className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  
                  <div className="project-info">
                    <div className="project-category">{project.title}</div>
                    <div className="project-description">{project.description}</div>
                    <div className="project-description">{project.category}</div>
                    <a href={project.links.live} className="view-button" target="_blank" rel="noreferrer">
                      <span className="view-icon">←</span>
                      View
                    </a>
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

export default FeaturedProjectsSlider;