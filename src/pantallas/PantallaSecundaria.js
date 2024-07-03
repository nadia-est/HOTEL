import React, { useEffect,useState } from 'react';
import NavHab from '../componentes/NavHab';
import Footer from '../componentes/footer';
import "../hab.css"
import Buscar from '../componentes/buscador';
import BtnAgregar from '../componentes/btnAgregar';

function PantallaSecundaria() {
const[info,setinfo]=useState([])


  useEffect(() => {
    fetch("http://localhost:4000/habitaciones")
      .then((res) => res.json())
      .then((info) => setinfo(info.resultado))
      .catch((err) => {
        console.log("No se logró obtener info: " + err);
      });
  }, []);

const handleButton = (id) => {
  fetch("http://localhost:4000/habitaciones/"+id,{
method:"delete"

  })
  .then((res)=> {return res.json()})
  .then((info)=> console.log(info))
  .catch((err) => {
        console.log("No se logró obtener info: " + err);
      });
  };


 const handleUpdate = function(id) {

    const habitacion = info.find(function(hab) {
        return hab.id === id;
        
    });
    if (!habitacion) {
        console.error(`No se encontró la habitación con ID ${id}`);
        return;
       
    }
 console.log("id seleccionado:",id)
    const Nombre = window.prompt("Nuevo nombre:", habitacion.Nombre) || habitacion.Nombre;
    const descripcion = window.prompt("Nueva descripción:", habitacion.descripcion) || habitacion.descripcion;
    const categoria = window.prompt("Nueva categoría:", habitacion.categoria) || habitacion.categoria;
    const precioStr = window.prompt("Nuevo precio:", habitacion.precio);
    const precio = parseInt(precioStr) || habitacion.precio; 
    const imagen = window.prompt("Nueva URL de imagen:", habitacion.imagen) || habitacion.imagen;
    const acceso_spa = window.prompt("Acceso al spa (Sí/No):", habitacion.acceso_spa) || habitacion.acceso_spa;
    const acceso_gym = window.prompt("Acceso al gym (Sí/No):", habitacion.acceso_gym) || habitacion.acceso_gym;
    const servicio_habitacion = window.prompt("Servicio a la habitación (Sí/No):", habitacion.servicio_habitacion) || habitacion.servicio_habitacion;



  const updatedHabitacion = {
      Nombre: Nombre,
      descripcion:descripcion,
      categoria: categoria,
      precio:precio,
      imagen: imagen,
      acceso_spa:acceso_spa,
      acceso_gym: acceso_gym,
      servicio_habitacion:servicio_habitacion,
    };

console.log(updatedHabitacion)

 fetch("http://localhost:4000/habitaciones/"+id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedHabitacion)
    })
    .then((res) => res.json())
    .then((info) => { return setinfo(info.resultado);
    })
    .catch((err) => {
      console.log("No se logró actualizar: " + err);
    });
}


  return (
     <div className='body'>
      <NavHab />
      <div className='contenedorhab'>
      <h1 id='titulohab'>Habitaciones que inspiran</h1>
      <p id='ph'>VelvetVista Hotels ofrece una exclusiva experiencia 5 estrellas en uno de los mejores hoteles en Santo Domingo, República Dominicana. Un refugio para el descanso con habitaciones y suites caracterizadas por la amplitud, el lujo, el confort y las atenciones exclusivas de las que pueden disfrutar los huéspedes gracias a los servicios Ambassador Level y Royal Level.</p>
     </div>
      <Buscar setinfo={setinfo} />
      <div className='container'>
        <div className='row'>
          {info && info.map((habitacion)  => (
            <div key={habitacion.id} className='col-md-4'>
              <div className="card mb-4" style={{ width: '25rem' }}>
                <img src={habitacion.imagen} className="card-img-top" alt={habitacion.Nombre} />
                <div className="card-body">
                  <h5 className="card-title">{habitacion.Nombre}</h5>
                  <p className="card-text">{habitacion.descripcion}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Categoría: {habitacion.categoria}</li>
                  <li className="list-group-item">Precio: ${habitacion.precio}</li>
                  <li className="list-group-item">Acceso al spa: {habitacion.acceso_spa}</li>
                  <li className="list-group-item">Acceso al gym: {habitacion.acceso_gym}</li>
                  <li className="list-group-item">Servicio a la habitación: {habitacion.servicio_habitacion}</li>
                </ul>
                <div className="card-body">
                  <BtnAgregar/>
                  <button className="Eliminar" onClick={() => handleButton(habitacion.id)}>Eliminar </button>
                 <button className="Actualizar" onClick={() => handleUpdate(habitacion.id)}>Actualizar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer/>

    </div>
  );
}

export default PantallaSecundaria;