import {useState, useEffect} from 'react'

// Componente useFetch (pasar como parametro la url y el metodo para que sea 100% reutilizable)
// y no establecer un metodo o una url por defecto
const useFetch = (url, method) => {
    // Definir estados para el usuario, para cuando tarde hacer la peticion fetch que aparezca cargando
    // y por si ha ocurrido un error al hacer la petición a la API
    const [usuarios, setUsuarios] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    // Hacer la petición una vez que cargue el componente
    useEffect(() => {
        // Definir metodo y que sea asincrono
        const fetchData = async () => {
          // Definimos una instrucción de errores con el try catch por ocurre algo
          try {
            // Hacer la petición fetch mediante la url y el metodo que le pasemos
            const response = await fetch(url, {
                method: method || 'GET',
            });
            // De la respuesta de esa peticion convertirlos en un objeto json
            const data = await response.json();
            if(Array.isArray(data)) {
              setUsuarios(data);
            }else{
              throw new Error('La respuesta no es un arreglo');
            }
            // Actualizar el estado del usuario
            setUsuarios(data);
            // Actualizar el cargando en false (No aparece cuando obtenga todos los datos del usuario)
            setCargando(false);
            setError(false);
          // En caso de error
          } catch (error) {
            // Actualizame el error y el cargando a false
            setError("Error al Obtener los datos de la API");
            setCargando(false);
          }
        };
        // Llamar a mi metodo fetchData()
        fetchData();
      // Solamente cuando la url o el metodo cambie
      }, [url, method]);
    
    // Retornar los usuarios, cargando y el error
    return { usuarios, cargando, error };
}

// Exportar el hook useFetch
export default useFetch;