// Hacer importes necesarios
import React from 'react'
import './estilos/header.css';
import logo from './img/jaumebalmes.png';
import 'font-awesome/css/font-awesome.min.css';

// Componente Header de Public
const Header = () => {
  return (
    <>
      {/* Estructura del Header */}
      <header className='header'>
        <img src={logo} alt="Institut Jaume Balmes" />
        <i className='fa fa-solid fa-language' />
      </header>
      
    </>
  )
}

// Exportar el compoente Header
export default Header;
