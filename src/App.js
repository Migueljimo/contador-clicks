//import logo from './logo.svg';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import './App.css';
import Botons from './componentes/Boton';
import Contador from './componentes/Contador';


function App() {

  const manejarClick =()=> {
    console.log('click');
  }
  const resetContador = ()=> {
    console.log('reset');
  }

  return (
    <div className="App">

      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logox'
          src={freeCodeCampLogo}
          alt='Logo de freecodeCamp' />
      </div>

      <div className='contenedor-principal'>

        <Contador />
        
        <Botons 
         texto='Click'
         esBotonDeClick={true}
         manejarClick={manejarClick}  />
        <Botons
        texto='Reset'
        esBotonDeClick={false}
        manejarClick={resetContador} />
      </div>


    </div>
  );
}

export default App;
