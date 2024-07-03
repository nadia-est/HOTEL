import React from 'react';
import iniciarsesion from "../IMAGENES/iniciarsesion.png";
import whatsapp from "../IMAGENES/whatsapp.png";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div id="arriba">
            <main className="cuerpo">
                <div className="zonaoscura"></div>
                <div className="boton">
                    <button type="button" className="btn"><img className="iconoArriba" src={iniciarsesion} alt="Icono" /><span className="textobtn">Iniciar sesión</span></button>
                </div>
                <div className="linea">
                    <hr className="lineaArriba" />
                </div>
                <section className="arriba">
                    <nav className="navbar NavArriba navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="nav-link inicio" to="/">Inicio</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link habitaciones" to="/secundaria">Habitaciones</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link servicios" to="/servicios">Servicios Especiales</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nosotros" to="/nosotros">Nosotros</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link contactanos" to="/contactanos">Contáctanos</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="wsp">
                        <img className="btn-wsp" src={whatsapp} alt="Icono" />
                    </div>
                </section>
                <div className="principal">
    <div className="titulos">
      <h1 className="tituloUno">VelvetVista Hotels</h1>
      <h2 className="tituloDos">Entra como huésped. Sal como familia</h2>
      <h3 className="tituloTres">«Servicio excepcional en cada rincón de nuestro hotel.»</h3>
    </div>

    <div className="reserva">
      <button type="button" className="btn btnReserva">RESERVA AHORA</button>
        <div className="zona-oscura"></div>
    </div>
  </div>

            </main>
        </div>
    );
}

export default Nav;
