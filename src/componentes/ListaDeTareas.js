import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../style/ListaDeTareas.css';
import Tarea from './Tareas'

function ListaDeTareas () {

  const [tareas, setTareas] = useState ([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();

      const tareasActualizadas = [tarea, ...tareas];

      setTareas(tareasActualizadas);
    }
  }

    return (
     <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tareas) =>
        <Tarea
          key={tareas.id}
          id={tareas.id}
          texto={tareas.texto}
          completada={tareas.completada} />
          )
        }
      </div> 
     </>
    );
}

export default ListaDeTareas 