import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PantallaPrincipal from './pantallas/PantallaPrincipal';
import PantallaSecundaria from './pantallas/PantallaSecundaria';
import PantallaForm from './pantallas/pantallaForm';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PantallaPrincipal />} />
        <Route path="/secundaria" element={<PantallaSecundaria />} />
        <Route path="/form" element={<PantallaForm />} />
      </Routes>
    </Router>
  );
}

export default App;
