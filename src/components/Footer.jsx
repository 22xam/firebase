import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <p>© {currentYear} Gym Manager. Todos los derechos reservados.</p>
      <p>Desarrollado por: Suarez Matias</p>
    </footer>
  );
}

export default Footer;
