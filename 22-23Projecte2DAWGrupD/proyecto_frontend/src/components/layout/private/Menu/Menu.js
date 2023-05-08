import React from 'react'
import "../estilos/menu.css";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
const Menu = () => {

  return (
    <div>
      <div className='contenedor_menu'>
        <div className='logo_usuario'>
          <i className=" fa fa-solid fa-user"></i>
        </div>
        <div className='contenedor_botones'>
          <div className='content'>
            <Link to="alumno"><button><i className="fa fa-solid fa-user"></i>Alumno</button></Link>
          </div>
          <div className='content'>
            <Link to="grupo"><button><i className='fa fa-duotone fa-book'></i>Grupo</button></Link>
          </div>
          <div className='content'>
            <Link to="registro"><button><i className='fa fa-solid fa-file'></i>Registro</button></Link>
          </div>
          <div className='content'>
            <Link to="horario"><button><i className='fa fa-clock-o'></i>Horario</button></Link>
          </div>
          <div className='content'>
            <Link to="asistencia"><button><i className='fa fa-regular fa-check-square'></i>Asistencia</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;
