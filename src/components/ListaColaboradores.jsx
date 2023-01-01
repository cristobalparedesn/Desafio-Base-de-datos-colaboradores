const ListaColaboradores = ({colaboradores}) =>{
  
  return(  
    <div>
      <h3>LISTA DE COLABORADORES</h3>
      <ul>
        {
          colaboradores.map((item) => {
            return <li key={item.id}>{item.nombre} - {item.correo}</li>;
          })
        }
      </ul>
    </div>
  )
}

export default ListaColaboradores;