// Hacer los importes necesarios
import React, { useState } from 'react'
import NavBar from './NavBar'
import '../estilos/pagesCss/alumno.css';
import useFetch from '../../../../hooks/useFetch';
import { Global } from '../../../../helpers/Global';
import Buscador from './Buscador';
// Componente Grupo
const Grupo = () => {

  // LLamar al hook useFetch para hacer la petición fetch a la API students
  // Llamar a los 3 metodos necesarios para mostrar los alumnos, cargando y 
  // si hay un error
  const { usuarios, cargando, error} = useFetch(Global.urlGroup+'group', 'GET');
  // Definir estados para mostrar 5 usuarios en la pagina actual
  const [ page, setPage ] = useState(1);
  const [ users ] = useState(6);
  const [filtrados, setFiltrados] = useState([]);
  // Hacer el calculo total de las paginas, en caso de haber 2 usuarios
  // habra 2 paginas, 2 usuarios en la 1r y 1 en la segunda y así funciona
  const totalPage = filtrados ? Math.ceil(filtrados.length / users): 0;

  // Hacer el calculo del ultimo usuario y del Primer usuario
  const indiceUltimoUsers = page * users;
  const indicePrimerUsers = indiceUltimoUsers - users;

  // Filtrar los usuarios actualez que estan en esa pagina actual.
  const usuariosActual = filtrados ? filtrados.slice(indicePrimerUsers, indiceUltimoUsers): null;
  
  // Array para mostrar el numero de paginas que hay
  const pageNumbers = [];

  // En un for hacer el calculos de las paginas totales entre los usuarios
  // El resultado que de hacer un push para subirlo al array
  for(let i = 1; i<= totalPage; i++) {
    pageNumbers.push(i);
  }

  let campo = ['aula','aula','grupo','aula'];
  let cursos = ['DAW 1', 'DAW 2', 'SMIX 1', 'SMIX 2', 'DAM 1', 'DAM 2'];
  return (
    <div className='container-alumno'>
      <NavBar />
      <Buscador opciones={cursos} datos={usuarios} campo={campo} setFiltrados={setFiltrados} placeholder={"Filtrar por "+campo[0]} />
      {/* Mostrar Mensaje cargando hasta hacer la petición */}
      {/* En caso de error en la petición */}
      {/* Si no hay usuarios, mostrar un mensaje y si hay algun usuario mostrar la tabla */}
        {cargando ? <p className='cargando'>Cargando...</p> :
        error ? <p className='error-fetch'>{error}</p> :
        usuarios.length === 1 ? <p className='not-usuarios'>No hay usuarios para mostrar</p> :
        <>
        <table className='table'>
        <thead>
          <tr>
            <th>AlumnoId</th>
            <th>Grupo</th>
            <th>Curso</th>
            <th>Aula</th>
            <th>Cicle</th>
            <th>GrupoId</th>
          </tr>
        </thead>
        <tbody>
          {/* Recorrer el array de usuarios actual y mostrarlos por la tabla */}
          {usuariosActual.map((grupo) => (
          <tr key={grupo.id}>
          <td>{grupo.id}</td>
          <td>{grupo.grupo}</td>
          <td>{grupo.curso}</td>
          <td>{grupo.aula}</td>
          <td>{grupo.cicle}</td>
          <td>{grupo.grupoId}</td>
        </tr>
          ))}
        </tbody>
      </table>
      {/*  */}
      <div className='pagination-container'>
      <button onClick={() => (setPage(page-1))} disabled={page === 1}> &lt; Anterior</button>
            <ul className='pagination'>
              {pageNumbers.map((number) => (
                <li key={number} className={number === page ? 'active':''} onClick={() => setPage(number)}>
                  {number}
                </li>
              ))}
            </ul>
            <button onClick={() => (setPage(page+1))} disabled={page === totalPage}>Siguiente &gt;</button>
      </div>
        </>
      
        }
    </div>
  )
}

export default Grupo