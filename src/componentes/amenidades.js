import React from 'react';
import perro from "../IMAGENES/perro.png"
import internet from "../IMAGENES/internet.png"
import lavanderia from "../IMAGENES/lavanderia.png"
import television from "../IMAGENES/television.png"
import champu from "../IMAGENES/champu.png"
import cuna from "../IMAGENES/cuna.png"
function Amenidades() {
    return (
        <div>
            <hr className="lineaDos" />

            <div className="tituloAmenidades">
                <h1 id="titulo">Servicios y Amenidades</h1>
            </div>

            <hr className="lineaTres" />

            <section className="amenidades">
                <div className="pet">
                    <div className="mascotas">
                        <img className="imgperro" src={perro} alt="Icono" />
                        <div className="contenedorMascotas">
                            <h1 id="tituloAme">Pet friendly</h1>
                            <p id="pAmenidades">Valoramos la compañía de tus mascotas y nos complace ofrecerte instalaciones pet-friendly para que disfrutes de tu estadía junto a tu compañero peludo.</p>
                        </div>
                    </div>
                </div>

                <div className="internet">
                    <div className="wifi">
                        <img className="imgwifi" src={internet} alt="Icono" />
                        <div className="contenedorWifi">
                            <h1 id="tituloAme">Red wifi</h1>
                            <p id="pAmenidades">Disfruta de conexión WiFi en todas nuestras habitaciones para que puedas estar conectado en todo momento y disfrutar al máximo de tu estancia.</p>
                        </div>
                    </div>
                </div>

                <div className="lavar">
                    <div className="lavanderia">
                        <img className="imglavanderia" src={lavanderia} alt="Icono" />
                        <div className="contenedorLava">
                            <h1 id="tituloAme">Lavandería</h1>
                            <p id="pAmenidades">Contamos con servicio de lavandería disponible las 24 horas, equipado con máquinas de alta tecnología y secado rápido para tu comodidad.</p>
                        </div>
                    </div>
                </div>

                <div className="tele">
                    <div className="television">
                        <img className="imgtele" src={television} alt="Icono" />
                        <div className="contenedorTele">
                            <h1 id="tituloAme">Televisión y cable</h1>
                            <p id="pAmenidades">Disfruta de entretenimiento a tu medida: usa nuestra televisión con cable en la habitación o conecta tus plataformas de streaming favoritas para una experiencia personalizada.</p>
                        </div>
                    </div>
                </div>

                <div className="accesorios">
                    <div className="shampo">
                        <img className="imgshampo" src={champu} alt="Icono" />
                        <div className="contenedorShampo">
                            <h1 id="tituloAme">De cortesía</h1>
                            <p id="pAmenidades">Para tu comodidad, ofrecemos champú y jabón de cortesía en todas las habitaciones, para que disfrutes de una experiencia de higiene personal completa durante tu estancia.</p>
                        </div>
                    </div>
                </div>

                <div className="bebes">
                    <div className="cuna">
                        <img className="imgcuna" src={cuna} alt="Icono" />
                        <div className="contenedorCuna">
                            <h1 id="tituloAme">Bebés</h1>
                            <p id="pAmenidades">Amamos a los bebés! Por eso te ofrecemos la posibilidad de elegir nuestras habitaciones con cunas incluidas.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Amenidades;
