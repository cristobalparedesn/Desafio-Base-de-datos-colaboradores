import { useState } from "react";
import {DataColaboradores} from './api/DataColaboradores';
import BusquedaColaborador from './components/BusquedaColaborador'
import AgregarColaborador from './components/AgregarColaborador';
import ListaColaboradores from './components/ListaColaboradores';

const App = () => {

  // Lista de Colboradores
  const [colaboradores, setColaboradores] = useState(DataColaboradores);
  
  // Agregar un Colaborador
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  // Buscar un colaborador
  const [buscar, setBuscar] = useState("");

  return (
    <div className="container">
      <h1>BASE DE DATOS COLABORADORES</h1>
      <BusquedaColaborador buscar={buscar} setBuscar={setBuscar} colaboradores={colaboradores}/>
      <AgregarColaborador nombre={nombre} setNombre={setNombre} email={email} setEmail={setEmail} colaboradores={colaboradores} setColaboradores={setColaboradores}/>
      <ListaColaboradores colaboradores={colaboradores} buscar={buscar} />
    </div>
  )
}

export default App;