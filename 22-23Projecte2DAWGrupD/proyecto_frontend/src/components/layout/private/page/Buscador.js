import React, { useEffect, useState } from 'react'

const Buscador = ({opciones, datos, campo, setFiltrados,placeholder}) => {
    const [buscador, setBuscador] = useState('');
    const [filtrarOpciones, setFiltrarOpciones] = useState('');

    useEffect(() =>{
        var a = buscador.toLowerCase();
        if(datos !== null) {
            const filtro_datos = datos.filter((dato) => 
            (dato[campo[0]].toLowerCase().includes(a)  ||
            dato[campo[1]].toLowerCase().includes(a)  ||
            dato[campo[3]].toLowerCase().includes(a) )
            && dato[campo[2]].toLowerCase().includes(filtrarOpciones.toLowerCase())
            
            )
            setFiltrados(filtro_datos);
        }
    }, [buscador, setFiltrados, datos,campo, filtrarOpciones]);

    return (
        <div className='buscador_filtrer'>
            <input  className='input_filtra' placeholder={placeholder} onChange={e => setBuscador(e.target.value)}/>
            <select className='select_options' name="filtrar" id="filtro" onChange={(e) => setFiltrarOpciones(e.target.value)} >
                <option value="">Todos</option>
                {
                    opciones.map((opcion, index) => (
                    <option className='opciones'  key={index} value={opcion}>
                        {opcion}
                    </option>
                    ))
                }
            </select>
        </div>
    )
}

export default Buscador