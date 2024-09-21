
//Funcion anonima
export const FourthComponent = () => {
  
  const handleClicked = (e, name) => {
    alert ("Haz hecho click en el boton verde" + name)
  }

  const handleDoubleClicked = () => {
    alert ("Haz hecho doble click")
  }

  const handleMouseEnter = (e) => {
    alert("Has entrado a la caja");
  }
  
  const handleMouseLeave = (e) => {
    alert("salido de la caja");
  }

  const handleMouse = (e, action) => {
    alert(`Has ${action} la caja`)
  }

  const handleInsideInput = (e) => {
    console.log("estas dentro del input, escribe tu nombre")
  }

  const handleOutsideInput = (e) => {
    console.log("estas afuera del input, Adios")
  }

  return (
    <div>
      <h1>Fourth Component</h1>
      <button className="btn btn-danger" onClick={
        () => {alert("Hola soy una funcion anonima")}
      }>Haz click</button>
      <button className="btn btn-success" onClick={e => handleClicked(e, "Juan")}>Haz click aqui tambien</button>
      <button className="btn btn-info" onDoubleClick={handleDoubleClicked}>
        Haz doble click
      </button>
      <div id="box1" 
        onMouseEnter={e => handleMouseEnter(e)}
        onMouseLeave={e => handleMouseLeave(e)}
      >
        
        <p>Pasa el mouse por encima</p>
      </div>
      <div id="box2" className="mt-4"
        onMouseEnter={e => handleMouse(e,"Has entrado")}
        onMouseLeave={e => handleMouse(e,"Has salido")}
      ></div>
      <div className="mt-4">
        <input type="text"
          onFocus={e => handleInsideInput(e)}
          onBlur={e => handleOutsideInput(e)}
        />
      </div>
    </div>
  )
}

