const BusquedaColaborador = ({buscar, setBuscar, colaboradores}) => {
  const handleBuscar = (e) =>{
    e.preventDefault()
    const newArrayFiltrado = colaboradores.filter((item) => {
      return item.nombre.toLowerCase().includes(buscar.toLowerCase());
    });
  }

  return (
    <div className="container">
      <h2>BUSCAR COLABORADOR</h2>
      <form onSubmit={handleBuscar}>
        <label htmlFor="buscar">¿A quién buscas?:</label>
        <input name="buscar" type="text" placeholder="Ingrese el nombre" onChange={(e) => setBuscar(e.target.value)}  />
      </form>
    </div>
  )
}

export default BusquedaColaborador;