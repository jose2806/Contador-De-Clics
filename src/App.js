import './App.css';
import freeCodeCampLogo from './imagenes/logo.PNG'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics,setNumClics] = useState(0); 

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reinciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' 
        src={freeCodeCampLogo}
        alt='Logo de freecodecamp'
        />
      </div>    
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton texto='Click' esBotonDeClic={true} manejarClic={manejarClic}/>
        <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={reinciarContador}/>
      </div>
    </div>
  );
}

export default App;
