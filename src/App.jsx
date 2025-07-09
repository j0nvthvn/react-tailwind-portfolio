import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";

function App() {
  useEffect(() => {
    // Remover loading spinner y mostrar contenido cuando esté listo
    const timer = setTimeout(() => {
      const loading = document.getElementById('loading');
      const root = document.getElementById('root');
      
      if (loading) loading.remove();
      if (root) root.classList.add('loaded');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
