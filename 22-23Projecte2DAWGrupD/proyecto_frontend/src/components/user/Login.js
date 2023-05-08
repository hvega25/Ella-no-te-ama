// Hacer los imports necesarios
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFetch from '../../hooks/useFetch';
import { Global } from '../../helpers/Global';
import '../layout/public/estilos/login.css';
import 'font-awesome/css/font-awesome.min.css';

//Componente Login
const Login = () => {

  //Definir estados para el usuario y la contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(null);
  const [errorValidated, setErrorValidated] = useState(null);
  //Llamar a mi hook useFetch creado y llamar a los 3 metodos definidos
  //Pasarle como parametro la url de mi API y el metodo que quiero hacerle
  const { usuarios, cargando, error } = useFetch(Global.urlUsers + 'users', 'GET');
  //Ver si tengo la sesion iniciada
  const { iniciarSesion, estaLogueado } = useAuth();
  //Declarar la navegación para ir a otro componente 
  let navigate = useNavigate();
  //Metodo para enviar el formulario
  const enviarDatos = e => {
    //Evitar que se envie el formulario
    e.preventDefault();

    //Comprobar que el usuario de mi APi sea igual al usuario y contraseña del los inputs a enviar
    const usuario = usuarios.find(
      usuario => usuario.username === username && usuario.password === password
    );

    // Comprobación en caso de que haya 1 input vacio
    if (username.trim() === "" && password.trim() === "") {
      setErrorValidated("Ingrese el nombre y la contraseña porfavor !!");
      setValidated("");
    }
    else if (username.trim() === "") {
      setErrorValidated("Ingrese el nombre del usuario porfavor !!");
      setValidated("");
    }
    else if (password.trim() === "") {
      setErrorValidated("Ingrese la contraseña porfavor !!");
      setValidated("");
    }
    //Comprobar en caso de que sea incorrecto las credenciales
    else if (!usuario) {
      // Mostrar mensaje de incorrecto y a los 3 segundos limpiarme ese mensaje
      setTimeout(() => {
        setErrorValidated("");
        document.getElementById("name").style.border = "";
        document.getElementById("password").style.border = "";
      }, 3000);

      setErrorValidated("Usuario o contraseña incorrectos");
      setValidated("");

      //En caso de que sea correcto, navegame al componente /menu e iniciame la sesión
    } else {
      // Iniciar sesión a los 2 segundos y mostrar mensaje "iniciando sesión..."
      setTimeout(() => {
        navigate("/menu");
        iniciarSesion(usuario);
        setValidated("");
      }, 2000);
      setValidated("Iniciando sesión...");
      setErrorValidated(""); // Limpiar el setError para que no aparezca 2 mensajes en 1
    }
  }

  useEffect(() => {
    // Comprobar si estoy logueado, rediriguirme a la ruta /menu
    if (estaLogueado) {
      navigate("/menu");
    }
  }, [estaLogueado, navigate])

  return (
    <div className='fondo'>
      {/* En caso de que la validación sea incorrecta */}
      {errorValidated &&
        <div className='error'>
          <p>{errorValidated}</p>  
        </div>
      }
      {error ?
        <div className='error'>
          <p>{error}</p>
        </div>
        : cargando ? <div className='loading'>Cargando...</div> :

          <form className='form' onSubmit={enviarDatos}>
            <i className='fa fa-regular fa-users' />
            <div className='form-group'>
              <label htmlFor='name'>
                <i className="fa fa-regular fa-user" />
              </label>
              <input id='name' type="text" name='name' placeholder='Usuario' onChange={e => setUsername(e.target.value)} />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>
                <i className="fa fa-unlock-alt"></i>
              </label>
              <input id='password' type="password" name="password" placeholder='Contraseña' onChange={e => setPassword(e.target.value)} />
            </div>

            <input type="submit" value="Enviar" />
            <p>¿Has olvidado la contraseña?</p>
            {validated &&
              <div className='validated'>
                <p style={{ color: 'aquamarine' }}>{validated}</p>
              </div>
            }
          </form>
      }
    </div>
  )
}

//Exportamos el componente Login para luego llamarme desde otros componentes
export default Login;