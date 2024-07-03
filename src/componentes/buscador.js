import React from "react";


function Buscar({ setinfo }){

const handlersearch=(event)=>{
  event.preventDefault();
  const categoria = event.target.elements.categoria.value;

  fetch(`http://localhost:4000/habitaciones/${categoria}`)
  .then((res)=>res.json())
  .then((info)=>setinfo(info.data))
  .catch((err)=>console.log(err))

}



return(
<div className=''>

<div>
  <h3 id='bh'>BUSCAR HABITACIONES POR CATEGORIA</h3>
</div>
  <form className="contFormBuscar" onSubmit={(event)=>handlersearch(event)} >
  <div className="mb-3">
    <label htmlFor="nombre" className="label "></label>
    <input type="text" className="form" id="nombre" name="categoria" required />
  </div>
   <button type="submit" className="btn buscar">Buscar</button>
  </form>
  </div>
)


}

export default Buscar;