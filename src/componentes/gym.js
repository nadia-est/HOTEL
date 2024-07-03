import React from 'react';
import gym from "../IMAGENES/gym.jpg"
import gym2 from "../IMAGENES/gym2.jpg"
import gym3 from "../IMAGENES/gym3.jpg"

function ServicioGym() {
    return (
        <section className="sgym">
            <div className="servicioGym">
    <h1 className="tituloServicio">Tu salud es nuestra prioridad</h1>
    <p className="parrafoServicio">En nuestro gimnasio, encontrarás todo lo que necesitas para mantenerte en forma y relajado durante tu estadía. Con equipos de última generación y un ambiente acogedor, te ofrecemos una experiencia única para cuidar tu bienestar.</p>
    <p className="parrafoServicio">¿Qué actividades puedes disfrutar?</p>
    <ul className="serviciosOpciones">
      <li>Pesas y Entrenamiento de Fuerza: Fortalece tu cuerpo con nuestra amplia variedad de pesas y equipos de entrenamiento de fuerza, diseñados para satisfacer tus necesidades y objetivos.</li>
      <li>Yoga y Meditación: Encuentra equilibrio y armonía en nuestras clases de yoga y meditación, guiadas por instructores expertos que te ayudarán a conectar mente, cuerpo y espíritu.</li>
      <li>Cardio y Acondicionamiento: Mejora tu resistencia y salud cardiovascular con nuestras máquinas de cardio y programas de acondicionamiento físico adaptados a todos los niveles.</li>
    </ul>
     </div>
            <div id="carouselExample2" className="carousel slide col-md-6">
                <div className="carousel-inner gym">
                    <div className="carousel-item active">
                        <img className="imgGym" src={gym} alt="gym del hotel" />
                    </div>
                    <div className="carousel-item">
                        <img className="imgGym" src={gym2} alt="imagen 1" />
                    </div>
                    <div className="carousel-item">
                        <img className="imgGym" src={gym3} alt="imagen 2" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </section>
    );
}

export default ServicioGym;
