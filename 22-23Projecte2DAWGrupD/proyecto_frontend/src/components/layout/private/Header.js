import React from 'react'
import "./estilos/header.css"
import logo from "./img/jaumebalmes.png";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {

  const { cerrarSesion, usuarioStorage } = useAuth();
  return (
    <div>{/* contenedor de todo el header privado*/}
      <header className='header_privado'>
        <div className='imagen_logo'>
          {/*Ubicación del logo */}
          <img src={logo} alt="Logo Balmes" />
        </div>
        {/*Contenedor del estado del usuario donde indica su rol, su nombre */}
        <div className='estatus_usuario'>
          <div className='imagen_usuario'>
            <i className=" fa fa-solid fa-user"></i>
          </div>
          <div className='contenedor_datosUsuario'>
            {/** Recuperación de la base de datos */}
            <div className='nombre_usuario'> {usuarioStorage.username}</div>
            <div className='rol_usuario'> {usuarioStorage.rol}</div>
          </div>

          <div className='logout'>
            <Link to="/login">
              {/** Función del boton de desconectar */}
              <i className="fa fa-power-off" aria-hidden="true" onClick={cerrarSesion}></i>
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;
