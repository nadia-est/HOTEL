import React from 'react';
import iniciarsesion from "../IMGHABS/iniciarsesion.png";

function Navform(){
return(
   
      <main className="cuerpotres">
        <div className="zonaoscuratres"></div>
        <div className="botondos">
          <button type="button" className="btn">
            <img className="iconoArriba" src={iniciarsesion} alt="Icono" />
            <span className="textobtn">Iniciar sesión</span>
          </button>
        </div>
        <div className="linea">
          <hr className="lineaArriba" />
        </div>
        <section className="arriba">
          <nav className="navbar NavArribados navbar-expand-lg">
            <div className="container-fluid">
              <a className="nav-link inicio" href="/">Inicio</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link habitaciones" href="/secundaria">Habitaciones</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link servicios" href="/servicios">Servicios Especiales</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nosotros" href="/nosotros">Nosotros</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link contactanos" href="/contactanos">Contáctanos</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
        <div className="principalHab">
          <div className="titulosHab">
            <h1 className="tituloUnoHab">VelvetVista Hotels</h1>
            <h2 className="tituloDosHab">¡Bienvenido administrador!</h2>
            <h4 className="tituloDosform">Si deseas actualizar alguna habitacion o crear una nueva solo debes completar el siguiente formulario </h4>
  
          </div>
        </div>
      </main>
   


)


}

export default Navform