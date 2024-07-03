import React from 'react';

function Form(){

const handlerSubmit=(e)=>{
e.preventDefault();

let info = new FormData(e.target);

const forminfo = Object.fromEntries(info);

forminfo.precio = Number(forminfo.precio);

fetch("http://localhost:4000/habitaciones/new",{
  method:"POST",
   headers: {
        'Content-Type': 'application/json'
      },
  body: JSON.stringify(forminfo)

})
.then((res)=>{return res.json()})
.then((info)=> console.log(info))
.catch((err) => {
        console.log("No se logró obtener info: " + err);
      });
}

return(

<>
<form className="contForm" onSubmit={(e) => handlerSubmit(e)}>
  <div className="mb-3">
    <label htmlFor="nombre" className="form-label">Nombre</label>
    <input type="text" className="form" id="nombre" name="Nombre" required />
  </div>
  <div className="mb-3">
    <label htmlFor="descripcion" className="form-label">Descripción</label>
    <input type="text" className="form" id="descripcion" name="descripcion" required />
  </div>
  <div className="mb-3">
    <label htmlFor="categoria" className="form-label">Categoría</label>
    <input type="text" className="form" id="categoria" name="categoria" required />
  </div>
  <div className="mb-3">
    <label htmlFor="precio" className="form-label">Precio</label>
    <input type="number" className="form" id="precio" name="precio" required />
  </div>
  <div className="mb-3">
    <label htmlFor="imagen" className="form-label">Imagen (URL)</label>
    <input type="url" className="form" id="imagen" name="imagen" required />
  </div>
  <div className="mb-3">
    <label htmlFor="acceso_spa" className="form-label">Acceso Al Spa</label>
    <input type="text" className="form" id="acceso_spa" name="acceso_spa" required />
  </div>
  <div className="mb-3">
    <label htmlFor="acceso_gym" className="form-label">Acceso Al Gym</label>
    <input type="text" className="form" id="acceso_gym" name="acceso_gym" required />
  </div>
  <div className="mb-3">
    <label htmlFor="servicio_habitacion" className="form-label">Servicio a la Habitación</label>
    <input type="text" className="form" id="servicio_habitacion" name="servicio_habitacion" required />
  </div>
  <button type="submit" className="btn agregar">Agregar</button>
</form>


</>
)
 

}


export default Form