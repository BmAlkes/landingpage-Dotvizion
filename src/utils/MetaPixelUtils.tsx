// Placeholder para seu ID do Meta Pixel - substitua com seu ID real quando implementar
const META_PIXEL_ID = 'YOUR_META_PIXEL_ID';

// Função para inicializar o Meta Pixel
export const initializeMetaPixel = () => {
  // Esta é uma implementação simplificada - você expandirá isso no futuro
  console.log('Meta Pixel inicializado com ID:', META_PIXEL_ID);
  
  // Quando você estiver pronto para implementar o Meta Pixel, descomente este código
  // e substitua 'YOUR_META_PIXEL_ID' com seu ID real
  /*
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  
  fbq('init', META_PIXEL_ID);
  fbq('track', 'PageView');
  */
};

// Função para verificar se o usuário aceitou cookies
export const hasUserAcceptedCookies = (): boolean => {
  return document.cookie.includes('dotvizion-cookie-consent=true');
};

// Função para remover cookies relacionados ao Meta Pixel
export const removeMetaPixelCookies = () => {
  console.log('Removendo cookies do Meta Pixel');
  
  // Lista de possíveis cookies do Facebook/Meta
  const metaCookies = ['_fbp', '_fbc', 'fr'];
  
  // Para cada cookie conhecido do Meta
  metaCookies.forEach(cookieName => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
  
  console.log('Cookies do Meta removidos');
};

// Função para usar quando você quiser carregar o Pixel após consentimento
export const setupMetaPixelWithConsent = () => {
  if (hasUserAcceptedCookies()) {
    initializeMetaPixel();
  } else {
    console.log('Usuário não aceitou cookies, Meta Pixel não será carregado');
  }
};

// Declare tipos para o fbq (para uso futuro)
declare global {
  interface Window {
    fbq?: any;
  }
}