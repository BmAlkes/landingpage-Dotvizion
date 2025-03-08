import React, { useState, useEffect } from 'react';

// Função para ativar o Meta Pixel (comunica com o script já presente no HTML)
const enableMetaPixel = () => {
  // Sinaliza para o script do Meta que o consentimento foi dado
  document.cookie = "meta_pixel_consent=true; max-age=31536000; path=/; sameSite=strict";
  
  // Se o fbq já estiver disponível, podemos inicializar diretamente
  if (window.fbq) {
    try {
      // Se o Meta Pixel já estiver ativo, isso será ignorado
      window.fbq('consent', 'grant');
      // Para garantir que PageView seja rastreado após o consentimento
      window.fbq('track', 'PageView');
      console.log('Meta Pixel ativado com sucesso');
    } catch (e) {
      console.error('Erro ao ativar Meta Pixel:', e);
    }
  } else {
    // Se fbq ainda não estiver disponível, podemos disparar um evento para o script HTML
    window.dispatchEvent(new Event('metaPixelConsent'));
    console.log('Sinal de consentimento enviado para o Meta Pixel');
  }
};

// Função para desativar o Meta Pixel
const disableMetaPixel = () => {
  // Revoga o consentimento
  document.cookie = "meta_pixel_consent=false; max-age=31536000; path=/; sameSite=strict";
  
  // Se o fbq já estiver disponível, revoga o consentimento
  if (window.fbq) {
    try {
      window.fbq('consent', 'revoke');
      console.log('Consentimento para Meta Pixel revogado');
    } catch (e) {
      console.error('Erro ao revogar consentimento do Meta Pixel:', e);
    }
  }
  
  // Remove cookies relacionados ao Facebook
  const metaCookies = ['_fbp', '_fbc', 'fr'];
  metaCookies.forEach(cookieName => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
};

const SimpleCookieConsentBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Estados para cada tipo de cookie
  const [essentialCookies, setEssentialCookies] = useState(true); // Sempre true
  const [analyticsCookies, setAnalyticsCookies] = useState(true);
  const [marketingCookies, setMarketingCookies] = useState(true);
  
  useEffect(() => {
    // Verificar se o usuário já deu consentimento anteriormente
    const hasConsentCookie = document.cookie.includes('dotvizion-cookie-consent=');
    
    // Se não houver cookie de consentimento, mostrar o banner após 2 segundos
    if (!hasConsentCookie) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
    
    // Carregar preferências salvas e ativar/desativar Meta Pixel se necessário
    try {
      const preferencesMatch = document.cookie.match(/dotvizion-cookie-preferences=([^;]*)/);
      if (preferencesMatch && preferencesMatch[1]) {
        const preferences = JSON.parse(decodeURIComponent(preferencesMatch[1]));
        setAnalyticsCookies(preferences.analytics || false);
        setMarketingCookies(preferences.marketing || false);
        
        // Ativar/desativar Meta Pixel com base na preferência de marketing
        if (preferences.marketing) {
          enableMetaPixel();
        } else {
          disableMetaPixel();
        }
      }
    } catch (e) {
      console.error('Erro ao carregar preferências de cookies:', e);
    }
  }, []);
  
  const savePreferences = (preferences: { essential: boolean; analytics: boolean; marketing: boolean }) => {
    // Salvar as preferências
    document.cookie = `dotvizion-cookie-consent=true; max-age=${60*60*24*365}; path=/; sameSite=strict`;
    document.cookie = `dotvizion-cookie-preferences=${JSON.stringify(preferences)}; max-age=${60*60*24*365}; path=/; sameSite=strict`;
    
    // Ativar ou desativar o Meta Pixel com base nas preferências
    if (preferences.marketing) {
      enableMetaPixel();
    } else {
      disableMetaPixel();
    }
    
    // Fechar o banner e as configurações
    setShowBanner(false);
    setShowSettings(false);
  };
  
  const handleAcceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true
    });
  };
  
  const handleDeclineAll = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false
    });
  };
  
  const handleSaveSettings = () => {
    savePreferences({
      essential: true,
      analytics: analyticsCookies,
      marketing: marketingCookies
    });
  };
  
  if (!showBanner && !showSettings) return null;
  
  // O restante do componente permanece o mesmo
  return (
    <>
      <style>
        {/* Seus estilos CSS permanecem iguais */}
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from { transform: translateY(20px); }
            to { transform: translateY(0); }
          }
          
          .cookie-banner {
            animation: fadeIn 0.5s ease-out, slideUp 0.5s ease-out;
          }
          
          .cookie-settings-overlay {
            animation: fadeIn 0.3s ease-out;
          }
          
          .cookie-settings-modal {
            animation: fadeIn 0.3s ease-out, slideUp 0.3s ease-out;
          }
          
          .cookie-toggle {
            position: relative;
            display: inline-block;
            width: 46px;
            height: 24px;
          }
          
          .cookie-toggle input {
            opacity: 0;
            width: 0;
            height: 0;
          }
          
          .cookie-toggle-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 24px;
          }
          
          .cookie-toggle-slider:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
          }
          
          input:checked + .cookie-toggle-slider {
            background-color: #56d0ff;
          }
          
          input:checked + .cookie-toggle-slider:before {
            transform: translateX(22px);
          }
          
          input:disabled + .cookie-toggle-slider {
            opacity: 0.7;
            cursor: not-allowed;
          }
        `}
      </style>
      
      {/* Banner de Consentimento de Cookies */}
      {showBanner && !showSettings && (
        <div className="cookie-banner fixed bottom-0 left-0 right-0 bg-[#0d1117] text-white p-4 z-50 border-t border-[#2d3748]">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">We use cookies to enhance your experience</h3>
            <p className="text-sm text-gray-300 mb-4">
              This website uses cookies to improve your browsing experience, analyze site traffic, and serve personalized content.
              By accepting, you consent to our use of cookies for analytics and personalized ads, including Meta Pixel.
            </p>
            <div className="flex flex-wrap gap-2 justify-end">
              <button 
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 bg-transparent border border-[#2d3748] rounded-full text-white text-sm hover:bg-[#1a1f2e] transition-colors"
              >
                Settings
              </button>
              <button 
                onClick={handleDeclineAll}
                className="px-4 py-2 bg-transparent border border-[#2d3748] rounded-full text-white text-sm hover:bg-[#1a1f2e] transition-colors"
              >
                Decline
              </button>
              <button 
                onClick={handleAcceptAll}
                className="px-4 py-2 rounded-full text-white text-sm font-medium hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(to right, #ff8a00, #56d0ff)" }}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Modal de Configurações - permanece igual */}
      {showSettings && (
        <div className="cookie-settings-overlay fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="cookie-settings-modal bg-[#0d1117] max-w-md w-full rounded-lg border border-[#2d3748] p-6 max-h-[90vh] overflow-y-auto">
            {/* O conteúdo do modal permanece igual */}
            {/* ... */}
            <h2 className="text-xl font-bold mb-4 text-white text-center">Cookie Settings</h2>
            <p className="text-sm text-gray-300 mb-6">
              You can choose which categories of cookies you want to enable. Essential cookies cannot be disabled as they are necessary for the website to function properly.
            </p>
            
            {/* Essential Cookies */}
            <div className="mb-4 pb-4 border-b border-[#2d3748]">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-medium">Essential Cookies</h3>
                <label className="cookie-toggle">
                  <input type="checkbox" checked disabled />
                  <span className="cookie-toggle-slider"></span>
                </label>
              </div>
              <p className="text-sm text-gray-400">These cookies are necessary for the website to function and cannot be disabled.</p>
            </div>
            
            {/* Analytics Cookies */}
            <div className="mb-4 pb-4 border-b border-[#2d3748]">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-medium">Analytics Cookies</h3>
                <label className="cookie-toggle">
                  <input 
                    type="checkbox" 
                    checked={analyticsCookies} 
                    onChange={(e) => setAnalyticsCookies(e.target.checked)} 
                  />
                  <span className="cookie-toggle-slider"></span>
                </label>
              </div>
              <p className="text-sm text-gray-400">These cookies help us understand how visitors interact with our website, allowing us to improve the user experience.</p>
            </div>
            
            {/* Marketing Cookies */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-medium">Marketing Cookies</h3>
                <label className="cookie-toggle">
                  <input 
                    type="checkbox" 
                    checked={marketingCookies} 
                    onChange={(e) => setMarketingCookies(e.target.checked)} 
                  />
                  <span className="cookie-toggle-slider"></span>
                </label>
              </div>
              <p className="text-sm text-gray-400">These cookies are used to track visitors across websites and display personalized ads (includes Meta Pixel).</p>
            </div>
            
            {/* Buttons */}
            <div className="flex justify-center gap-3">
              <button 
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 bg-transparent border border-[#2d3748] rounded-full text-white text-sm hover:bg-[#1a1f2e] transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveSettings}
                className="px-4 py-2 rounded-full text-white text-sm font-medium hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(to right, #ff8a00, #56d0ff)" }}
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Declaração de tipos para TypeScript
declare global {
  interface Window {
    fbq?: (method: string, ...args: any[]) => void;
    _fbq?: any;
  }
}

export default SimpleCookieConsentBanner;