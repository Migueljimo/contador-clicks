import React from 'react';
import Boton from '../styleSheets/'


function Boton({ texto, esBotonDeClick, manejarClick }) {
    return (
<button className={esBotonDeClick ? 'boton-click' : 'boton-reset'} 
onClick={manejarClick} >
        {texto}
</button>
    );
}

export default Boton;