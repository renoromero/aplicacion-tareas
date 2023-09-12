import React, { useState, useEffect } from "react";
import TareaFormulario from "./TareaFormulario";
import '../style/ListaDeTareas.css';
import Tarea from './Tareas'
//npx json-server -p 3500 -w data/db.json

function ListaDeTareas () {

const [tareas, setTareas] = useState ([]);

useEffect(()=>{
  fetch("http://localhost:3500/productos")
  .then(res=> res.json()).then((res)=> setTareas(res));

  },[])

 

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();

      const tareasActualizadas = [tarea, ...tareas];

     setTareas(tareasActualizadas); 
      
     fetch("http://localhost:3500/productos",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body: JSON.stringify(tarea)
    })
    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);

    fetch("http://localhost:3500/productos/"+id,{
      method:"DELETE"})
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea
    })
    setTareas(tareasActualizadas);
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
          completada={tareas.completada} 
          eliminarTarea={eliminarTarea}
          completarTarea={completarTarea}/>
          )}

      </div> 
     </>
    );
}

export default ListaDeTareas 