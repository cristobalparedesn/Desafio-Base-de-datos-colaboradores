import { useState } from "react";
import {DataColaboradores} from './api/DataColaboradores';
import AgregarColaborador from './components/AgregarColaborador';
import ListaColaboradores from './components/ListaColaboradores';

const App = () => {

  // Lista de Colboradores
  const [colaboradores, setColaboradores] = useState(DataColaboradores);
  
  // Agregar un Colaborador
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      <AgregarColaborador nombre={nombre} setNombre={setNombre} email={email} setEmail={setEmail} colaboradores={colaboradores} setColaboradores={setColaboradores}/>
      <ListaColaboradores colaboradores={colaboradores} />
    </div>
  )
}

export default App;