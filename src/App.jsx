import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import { SmartPreloader } from "./components/SmartPreloader";
import { useCSSLoaded } from "./hooks/useCSSLoaded";

function App() {
  const isCSSLoaded = useCSSLoaded();

  useEffect(() => {
    if (isCSSLoaded) {
      // CSS está completamente cargado, mostrar contenido con transición suave
      const loading = document.getElementById('loading');
      
      if (loading) {
        // Transición más elegante con scale y fade
        loading.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        loading.style.opacity = '0';
        loading.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
          loading.remove();
        }, 600);
      }
      
      // No aplicar transformaciones al root para evitar conflictos con navbar
      const root = document.getElementById('root');
      if (root) {
        root.classList.add('css-loaded');
      }
    }
  }, [isCSSLoaded]);

  // No renderizar el contenido principal hasta que CSS esté cargado
  if (!isCSSLoaded) {
    return null;
  }

  return (
    <>
      <SmartPreloader />
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
