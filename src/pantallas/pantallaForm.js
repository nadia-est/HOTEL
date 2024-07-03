import React from 'react';
import "../form.css"
import Form from '../componentes/form';
import Navform from '../componentes/navForm';

function PantallaForm(){
return(
 <div className='body'>

 <Navform/>
<div>
  <h3 id='tf'>FORMULARIO AGREGAR</h3>
</div>
 <Form/>

 </div>
 
    


)


}

export default PantallaForm