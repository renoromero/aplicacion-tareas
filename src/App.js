
import './App.css';
import logo from './imagenes/renato-logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='contenedorLogo'>
      <img
      className='logo'
      src={logo}
      alt='logo'
       />
      </div>
      <div className='listaTareasContenedor'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
