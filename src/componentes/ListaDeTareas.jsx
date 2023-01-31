import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../stylesheet/ListaDeTareas.css'
import Tarea from '../componentes/Tarea'

function ListaDeTareas() {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if(tarea.texto.trim()) { //Esta condicion prueba q la cadena no esta vacia
            tarea.texto = tarea.texto.trim() //Quitamos espacios innecesarios

            const tareasActualizadas = [tarea, ...tareas] //Array con todas las tareas (nueva + anteriores)
            setTareas(tareasActualizadas) //Actualizamos el estado
        }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
        setTareas(tareasActualizadas)
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id) {
                tarea.completada = !tarea.completada
            }
            return tarea
        })
        setTareas(tareasActualizadas)
    }

    return (
        // Se llaman fragmentos (etiquetas vacias)
        <> 
            <TareaFormulario onSubmit={agregarTarea} />
            <div className='tareas-lista-container'>
                {
                    tareas.map((tarea) =>
                    <Tarea
                    key={tarea.id} //key no se pasa como prop, por eso ponemos .id x2
                    id={tarea.id}
                    texto={tarea.texto}
                    completada={tarea.completada}
                    eliminarTarea={eliminarTarea}
                    completarTarea={completarTarea} />

                    )
                }
            </div>
        </>
    )
}

export default ListaDeTareas