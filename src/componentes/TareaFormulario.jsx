import React, { useState } from "react";
import '../stylesheet/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid'

function TareaFormulario(props) {

    const [input, setInput] = useState('')

    const manejarCambio = e => {
        setInput(e.target.value)
    }

    const manejarEnvio = e => {

        e.preventDefault() //Permite que no se vuelva a cargar la pag cuando enviamos el formulario
        
        const tareaNueva = {
            id: uuidv4(), //uuidv4 se encarga de los id unicos
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva)
    }

    return (
        <form 
        className='tarea-form'
        onSubmit={manejarEnvio} >
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribi una tarea :)'
                name='texto'
                onChange={manejarCambio}
            />
            <button
                className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    )
}

export default TareaFormulario