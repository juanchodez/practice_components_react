export const SecondComponent = () => {
  
  const books = [
    "Harry Potter y la piedra filosofal",
    "Harry Potter y la camara secreta",
    "Harry Potter y el prisionero de azkaban",
    "Harry Potter y la caliz de fuego",
    "Harry Potter y la orden del fenix",
    "Harry Potter y el misterio del principe",
    "Harry Potter y las reliquias de la muerte",
    "otro libro"
  ];
  
  //condicion ? (si es verdadero) : (si falso)
    return (
    <>
    
    <h1>Arreglo</h1>
    <div>
      <ul>
        {books.length >= 1 ? (
              books.map((book, index) => {
                  return <li key = {index}>{book} </li>
              })
        ) : (
          <p>NO existen libros</p>
        )}
        

      </ul>
    </div>
    </>
  )
}


