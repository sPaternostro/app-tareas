import './App.css';
import FreeCodeCampLogo from './img/freecodecamp-logo.png'
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="app-tareas">
      <div className='fcc-logo-container'>
        <img 
        src={FreeCodeCampLogo}
        className='fcc-logo' />
      </div>
      <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <ListaDeTareas />
        </div>



        
    </div>
  );
}

export default App;
