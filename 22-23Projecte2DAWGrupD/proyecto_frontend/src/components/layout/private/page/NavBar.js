import React from 'react'
import { NavLink } from 'react-router-dom';
import '../estilos/navBar.css';
import 'font-awesome/css/font-awesome.min.css';
const NavBar = () => {
  return (
    <div className='navBar'>
        <nav className='nav'>
        <div className='icono-container'>
          <NavLink to="/menu" ><i className="fa fa-reply" aria-hidden="true"></i></NavLink>
        </div>
            <NavLink to="../alumno"><button><i className="fa fa-solid fa-user"></i>Alumno</button></NavLink>
            <NavLink to="../grupo"><button><i className='fa fa-duotone fa-book'></i>Grupo</button></NavLink>
            <NavLink to="../registro"><button><i className='fa fa-solid fa-file'></i>Registro</button></NavLink>
            <NavLink to="../horario"><button><i className='fa fa-clock-o'></i>Horario</button></NavLink>
            <NavLink to="../asistencia"><button><i className='fa fa-regular fa-check-square'></i>Asistencia</button></NavLink>
        </nav>
    </div>
  )
}

export default NavBar