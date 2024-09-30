// useScrollToSection.js
import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback((sectionId) => {
    if (location.pathname === '/') {
      // Si ya estás en el landing, hacer scroll directo
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si estás en otra página, navegar primero al landing
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Espera para que el landing se cargue antes de hacer scroll
    }
  }, [navigate, location.pathname]);

  return scrollToSection;
};

export default useScrollToSection;
