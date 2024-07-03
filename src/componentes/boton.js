import React from 'react';
import flecha from "../IMAGENES/felcha.png"

function ScrollButton() {
    return (
      <div className="contBtnScroll">
    <div className="btnScroll">
        <a href="#body" aria-label="Ir al inicio">
            <img className="imgScroll" src={flecha} alt="Subir" />
        </a>
    </div>
</div>  
    );
}

export default ScrollButton;
