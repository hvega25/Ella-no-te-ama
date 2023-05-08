//Hacer los imports necesarios
import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import Header from './Header';

//Componente PublicLayout
const PublicLayout = () => {

    // Definir estado para logearte y el inicio de sesión
    const {usuarioStorage, estaLogueado, iniciarSesion} = useAuth();
    //Cada vez que cargue el componente, añade un usuario con un array vacio y solo 1 vez
    useEffect(() => {
        iniciarSesion(usuarioStorage);
        
    }, [iniciarSesion, usuarioStorage]);

  return (
    <div className='fondo2'>
        {/* Cuando aun no esta logueado muestrate el Header Publico, el Outlet es para que me cargue el componente actual y en caso contrario llevame al login */}
        {estaLogueado && <Header/>}
        {estaLogueado ?
            <Outlet />
        : 
            <Navigate to="/login" />
        }
    </div>
  )
}

// Exportamos el componente PublicLayout
export default PublicLayout;
