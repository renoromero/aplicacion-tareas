import React from 'react';
import '../style/Tarea.css'
import { AiOutlineCloseSquare } from 'react-icons/ai'

function Tarea ({ id, texto, completada, completarTarea, eliminarTarea }) {
    return(
        <div className={completada ?'tarea-contenedor completada' : 'tarea-contenedor'}>
          <div className='tarea-texto'
            onClick={() => completarTarea(id)}>
            {texto}
          </div>
          <div 
            className='tarea-icono-contenedor'
            onClick={() => eliminarTarea(id)}>
            <AiOutlineCloseSquare className='tarea-icono'/>
          </div>
        </div>
        
    );
}

export default Tarea;