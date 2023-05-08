import React, {useEffect} from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import Footer from './Footer';
import Header from './Header';

export const PrivateLayout = () => {

    // Definir estado para logearte y el inicio de sesión
    const {estaLogueado} = useAuth();
    
    let navigate = useNavigate();
    useEffect(() => {
      if(!estaLogueado) {
        navigate("/login");
      }
    }, [estaLogueado, navigate])
  return (
    <>
    {/* Cuando aun no esta logueado muestrate el Header Publico, el Outlet es para que me cargue el componente actual y en caso contrario llevame al login */}
    {estaLogueado && <Header/>}
    {estaLogueado ? <Outlet /> : <Navigate to="/login" />}
    {estaLogueado && <Footer />}
</>
  )
}
