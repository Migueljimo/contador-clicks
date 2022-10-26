import React from 'react';
import '../styleSheets/Boton.css';


function Boton({ texto, esBotonDeClick, manejarClick }) {
    return (
<button className={esBotonDeClick ? 'boton-click' : 'boton-reset'} 
onClick={manejarClick} >
        {texto}
</button>
    );
}

export default Boton;