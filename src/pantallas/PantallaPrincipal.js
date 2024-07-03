import React from 'react';
import Nav from '../componentes/nav';
import ServiciosComida from '../componentes/comida';
import ServicioGym from '../componentes/gym';
import ServicioPile from '../componentes/pile';
import Amenidades from '../componentes/amenidades';
import Footer from '../componentes/footer';
import "../inicio.css"

function PantallaPrincipal() {
  return (
    <div className='body'>
      <Nav />
        <ServiciosComida />
        <ServicioGym />
        <ServicioPile />
      <Amenidades />
      <Footer/>
    </div>
  );
}

export default PantallaPrincipal;
