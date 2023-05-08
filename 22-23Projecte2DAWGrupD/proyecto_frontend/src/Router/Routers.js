// Importar los imports necesarios
import React from 'react'
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Menu from '../components/layout/private/Menu/Menu';
import PublicLayout from '../components/layout/public/PublicLayout';
import {PrivateLayout} from '../components/layout/private/PrivateLayout';
import Login from '../components/user/Login';
import Alumno from '../components/layout/private/page/Alumno';
import Grupo from '../components/layout/private/page/Grupo';
import Registro from '../components/layout/private/page/Registro';
import Asistencia from '../components/layout/private/page/Asistencia';
import Horario from '../components/layout/private/page/Horario';

// Componente Routers
const Routers = () => {
    return (
        <>
        {/* Definir Rutas, inidicar que haremos una configuración de Rutas */}
            <BrowserRouter>
            {/* Indicar que habra varias rutas */}
            <Routes>
                {/* Definir las rutas de los componentes (Por default la arrel el componente PublicLayout) */}
                {/* Donde cargara mi componente de Login */}
                <Route path="/" element={<PublicLayout />} > {/* Esto sirve para las rutas privadas*/}
                    {/* La ruta del login sera la ruta inicial de la aplicación */}
                    <Route index element={<Login />} />
                    <Route path="login" element={<Login />} />
                </Route>

                <Route path="/menu" element={<PrivateLayout />}>
                    <Route path="/menu" element={<Menu />} />
                    <Route path="alumno" element={<Alumno />} />
                    <Route path="grupo" element={<Grupo />} />
                    <Route path="registro" element={<Registro />} />
                    <Route path="horario" element={<Horario />} />
                    <Route path="asistencia" element={<Asistencia />} />
                </Route>

                <Route path="*" element={<h2>Error</h2>} />
            </Routes>
        </BrowserRouter>
        
        </>
    )
}

export default Routers;
