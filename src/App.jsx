import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from './componentes/Navbar'
import Home from "./componentes/secciones/Home"
import Cursos from "./componentes/secciones/Cursos"
import About from "./componentes/secciones/About"
import Preguntas from "./componentes/secciones/Preguntas"
import Planes from "./componentes/secciones/Planes"
import Login from './pages/Login';

const AppContent = () => {
  const location = useLocation();

  // Si estamos en /login, no mostramos Navbar
  const hideNavbar = location.pathname === "/login";

  return (
    <div className="overflow-x-hidden">
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/about" element={<About />} />
        <Route path="/preguntas" element={<Preguntas />} />
        <Route path="/planes" element={<Planes />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
