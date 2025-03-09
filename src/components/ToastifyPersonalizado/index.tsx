
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './DotVizionToast.css'; // Arquivo CSS para customizações adicionais

// Cores da DotVizion (substitua pelos valores reais)
const DotVizionColors = {
  primary: '#3366FF',    // Substitua pela cor primária da DotVizion
  secondary: '#00CC88',  // Substitua pela cor secundária da DotVizion
  danger: '#FF3366',     // Substitua pela cor de erro da DotVizion
  warning: '#FFCC00',    // Substitua pela cor de aviso da DotVizion
  info: '#33CCFF',       // Substitua pela cor informativa da DotVizion
  success: '#00CC88',    // Substitua pela cor de sucesso da DotVizion
  background: '#FFFFFF', // Substitua pela cor de fundo da DotVizion
  text: '#333333',       // Substitua pela cor do texto da DotVizion
};

// Componente ToastContainer personalizado da DotVizion
export const DotVizionToastContainer = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      className="dotvizion-toast-container"
    />
  );
};

// Funções de toast personalizadas
export const DotVizionToast = {
  success: (message:any, options = {}) => {
    return toast.success(message, {
      style: { background: DotVizionColors.success },
      ...options
    });
  },
  
  error: (message:any, options = {}) => {
    return toast.error(message, {
      style: { background: DotVizionColors.danger },
      ...options
    });
  },
  
  warning: (message:any, options = {}) => {
    return toast.warning(message, {
      style: { background: DotVizionColors.warning, color: DotVizionColors.text },
      ...options
    });
  },
  
  info: (message:any, options = {}) => {
    return toast.info(message, {
      style: { background: DotVizionColors.info },
      ...options
    });
  },
  
  // Toast personalizado com estilo totalmente customizado
  custom: (message:any, options = {}) => {
    return toast(message, {
      style: {
        background: DotVizionColors.primary,
        color: '#FFFFFF',
        borderRadius: '4px',
        fontWeight: 'bold',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',

      },
      ...options
    });
  }
};

// Exportando tanto o container quanto as funções de toast
export default DotVizionToast;