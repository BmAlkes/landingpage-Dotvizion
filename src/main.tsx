import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DotVizionToastContainer } from "./components/ToastifyPersonalizado";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <DotVizionToastContainer/>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
