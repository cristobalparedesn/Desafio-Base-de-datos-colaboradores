import { nanoid } from "nanoid";

const AgregarColaborador = ({nombre, setNombre, email, setEmail, colaboradores, setColaboradores}) => {
  const handleSubmit = (e) =>{
    e.preventDefault()
    setColaboradores([
      ...colaboradores,
      {
        nombre: nombre,
        correo: email,
        id: nanoid(),
      }
    ])
  }

  return(
    <div className="container">
      <h3>AGREGAR UN COLABORADOR</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input name="nombre" type="text" placeholder="Ingrese nombre del colaborador" onChange={(e) => setNombre(e.target.value)} />

        <label htmlFor="correo">Correo:</label>
        <input name="correo" type="email" placeholder="Ingrese email del colaborador" onChange={(e) => setEmail(e.target.value)} />

        <button type="submit">Agregar Colaborador</button>
      </form>
    </div>
  )
}

export default AgregarColaborador;