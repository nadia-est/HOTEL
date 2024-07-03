import React from 'react';
import pileta from "../IMAGENES/pileta.jpg"
import pileta2 from "../IMAGENES/pileta2.jpg"
function ServicioPile() {
    return (
        <section className="sp">
            <div id="carouselExample3" className="carousel slide col-md-6">
                <div className="carousel-inner pileta">
                    <div className="carousel-item active">
                        <img className="imgPileta" src={pileta} alt="servicios de comida" />
                    </div>
                    <div className="carousel-item">
                        <img className="imgPileta" src={pileta2} alt="imagen 1" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
            <div className="servicioPile">
    <h1 className="tituloServicio">Refrescate</h1>
    <p className="parrafoServicio">¡Sumérgete en la experiencia de nuestras piscinas en la terraza!</p>
    <p className="serviciosOpciones">¡Disfruta de un oasis acuático en nuestro hotel!Con dos piscinas, una en la terraza y otra en el patio, tenemos el lugar perfecto para refrescarte y relajarte.</p>
<p className="serviciosOpciones">Nuestra piscina en la terraza te espera con iluminación especial, creando un ambiente mágico cuando cae la noche. Disfruta de un baño relajante con agua templada mientras admiras las estrellas y las luces de la ciudad desde lo alto. Además, nuestros salvavidas están siempre presentes para garantizar tu seguridad y tranquilidad. Sumérgete en una experiencia única junto al agua en cualquier momento del día en nuestro oasis acuático. ¡Te esperamos para hacer de tu estancia un momento inolvidable!</p>
            </div>
        </section>
    );
}

export default ServicioPile;
