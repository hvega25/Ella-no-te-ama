import { useState } from 'react'

// Hook useAuth
const useAuth = () => {

    const usuarioStorage = JSON.parse(localStorage.getItem('usuario'));
    // Establecer un estado para obtener en el localStorage el usuario que hay
    const [estaLogueado, setEstaLogueado] = useState(usuarioStorage !== null && Object.keys(usuarioStorage).length > 0);

    // Metodo para iniciar sesión y guardar esa información en el localStorage una vez que te loguees
    const iniciarSesion = (usuario) => {
        // Obtener los datos del usuario
        const usuarioFiltrado = {...usuario};
        // Borrar la contraseña para no almacenarla en el localStorage
        delete usuarioFiltrado.password;
        // Guardar con clave usuario los datos del usuario
        localStorage.setItem('usuario', JSON.stringify(usuarioFiltrado));
        // Definir que estas logueado a true
        setEstaLogueado(true);
    }

    // Metodo para cerrar sesión y remover los datos que hay en usuaro del localStorage
    const cerrarSesion = () => {
        localStorage.removeItem('usuario');
        // Indicar que ya no estas logueado
        setEstaLogueado(false);
    }

    // Retornar las funciones para luego reutilizarlo mediante la desestructuración
  return {usuarioStorage, estaLogueado, iniciarSesion, cerrarSesion}
}

// Exportar el hook useAuth
export default useAuth;
