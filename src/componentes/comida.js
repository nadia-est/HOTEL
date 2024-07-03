import React from 'react';
import comida from "../IMAGENES/comida.jpg"
import comida2 from "../IMAGENES/comida2.jpg"
import comida3 from "../IMAGENES/comida3.jpg"

function ServiciosComida() {
    return (
        <section className="sc">
            <div id="carouselExample" className="carousel slide col-md-6">
                <div className="carousel-inner comida">
                    <div className="carousel-item active">
                        <img className="imgComida" src={comida} alt="servicios de comida" />
                    </div>
                    <div className="carousel-item">
                        <img className="imgComida" src={comida2}  alt="imagen 1" />
                    </div>
                    <div className="carousel-item">
                        <img className="imgComida" src={comida3}  alt="imagen 2" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
            <div className="serviciosComida col-md-6">
            <h1 className="tituloServicio">Para todos los gustos</h1>
            <p className="parrafoServicio">Descubre nuestros exclusivos servicios gastronómicos:</p>
            <ul className="serviciosOpciones">
      <li>Room Cooking Service: Disfruta de la comodidad de saborear deliciosos platillos en la intimidad de tu habitación.</li>
      <li>Servicio en Mesa: Nuestro personal atento y profesional te brindará una experiencia culinaria excepcional en nuestro elegante comedor.</li>
      <li>Buffet Asistido: Explora una amplia variedad de opciones culinarias con nuestro buffet asistido, donde nuestro equipo estará encantado de servirte.</li>
      <li>Autoservicio: Para aquellos que prefieren la libertad de elegir, nuestro autoservicio te ofrece una selección de platos deliciosos y frescos.</li>
      <li>Degustación: Sumérgete en una experiencia gourmet con nuestra degustación de exquisitos sabores preparados por nuestros chefs expertos.</li>
    </ul>
    </div>
        </section>
    );
}

export default ServiciosComida;
