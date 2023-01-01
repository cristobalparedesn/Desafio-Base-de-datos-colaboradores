const ListaColaboradores = ({colaboradores, buscar}) =>{
  
  return(  
    <div className="container">
      <h4>LISTA DE COLABORADORES</h4>
      <ul>
        {
          colaboradores
          .filter((item) =>{
            return item.nombre
              .toLowerCase()
              .includes(buscar.toLowerCase());
          })
          .map((item) => {
            return <li key={item.id}>{item.nombre} - {item.correo}</li>;
          })
        }
      </ul>
    </div>
  )
}

export default ListaColaboradores;