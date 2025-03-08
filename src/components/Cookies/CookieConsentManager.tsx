import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { initializeMetaPixel, removeMetaPixelCookies } from '../../utils/MetaPixelUtils';

// Função que é chamada quando o usuário aceita cookies
const handleAcceptCookies = () => {
  console.log('Cookies aceitos - carregando Meta Pixel');
  initializeMetaPixel();
};

// Função que é chamada quando o usuário recusa cookies
const handleDeclineCookies = () => {
  console.log('Cookies recusados - removendo cookies do Meta Pixel');
  removeMetaPixelCookies();
};

const CookieConsentManager: React.FC = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      sameSite="strict"
      cookieName="dotvizion-cookie-consent"
      expires={365} // Expira em 1 ano
      overlay
      
      // Estilo que corresponde ao design do seu site
      style={{
        background: "#0d1117",
        color: "white",
        padding: "1rem",
        borderTop: "1px solid #2d3748",
        fontFamily: "inherit",
        zIndex: 9999,
      }}
      
      // Estilo do botão de aceitação que corresponde ao gradiente usado no seu site
      buttonStyle={{
        background: "linear-gradient(to right, #ff8a00, #56d0ff)",
        color: "white",
        fontSize: "0.9rem",
        padding: "0.6rem 1.2rem",
        borderRadius: "2rem",
        fontWeight: 500,
        cursor: "pointer",
        boxShadow: "0 4px 15px rgba(255, 138, 0, 0.3)",
        border: "none",
      }}
      
      // Estilo do botão de recusa
      declineButtonStyle={{
        background: "transparent",
        border: "1px solid #2d3748",
        color: "white",
        fontSize: "0.9rem",
        padding: "0.6rem 1.2rem",
        borderRadius: "2rem",
        fontWeight: 400,
        marginRight: "10px",
      }}
      
      // Callbacks para aceitar ou recusar
      onAccept={handleAcceptCookies}
      onDecline={handleDeclineCookies}
      
      // Podemos esconder o overlay clicando fora
      hideOnAccept={true}
      hideOnDecline={true}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.5rem" }}>
          We use cookies to enhance your experience
        </h3>
        <p style={{ fontSize: "0.9rem", lineHeight: 1.5, color: "rgba(255, 255, 255, 0.7)" }}>
          This website uses cookies to improve your browsing experience, analyze site traffic, and serve personalized content.
          By accepting, you consent to our use of cookies for analytics and personalized ads, including Meta Pixel.
          You can change your preferences at any time.
        </p>
      </div>
    </CookieConsent>
  );
};

export default CookieConsentManager;