import { Fragment } from "react";


export const SecondComponent = () => {
  
  const books = [
    "Harry Potter y la piedra filosofal",
    "Harry Potter y la camara secreta",
    "Harry Potter y el prisionero de azkaban",
    "Harry Potter y la caliz de fuego",
    "Harry Potter y la orden del fenix",
    "Harry Potter y el misterio del principe",
    "Harry Potter y las reliquias de la muerte"
  ];
  
    return (
    <>
    
    <h1>Arreglo</h1>
    <div>
      <ul>
        {
            books.map((book, index) => {
                return <li key = {index}>{book} </li>

            })
        }
      <li>{books[0]}</li>
      <li>{books[1]}</li>
      <li>{books[2]}</li>
      <li>{books[3]}</li>
      <li>{books[4]}</li>
      <li>{books[5]}</li>
      <li>{books[6]}</li>
      </ul>
    </div>
    </>
  )
}


