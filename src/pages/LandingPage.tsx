import { AboutSection } from "../components/AboutSection"
import ContactForm from "../components/ContactForm"
import CookieConsentManager from "../components/Cookies/CookieConsentManager"
import FeaturedProjectsSlider from "../components/FeaturedProjectSlider"
import FeaturesSection from "../components/FeaturesSection"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeroSection from "../components/Hero"
import TestimonialsSection from "../components/TestimonialsSection"


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#030B0F]">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <FeaturedProjectsSlider/>
       <TestimonialsSection />
    <ContactForm />
      <Footer />   
       {/* Banner de Consentimento de Cookies */}
       <CookieConsentManager />
    </div>
  )
}

export default LandingPage