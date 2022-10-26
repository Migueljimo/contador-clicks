//import logo from './logo.svg';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import './App.css';
import Boton from './componentes/boton';


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
        <Boton 
         texto='Click'
         esBotonDeClick={true}
         manejarClick={manejarClick}  />
        <Boton
        texto='Reset'
        esBotonDeClick={false}
        manejarClick={resetContador} />
      </div>


    </div>
  );
}

export default App;
