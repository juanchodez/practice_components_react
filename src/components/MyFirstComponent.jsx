
export const MyFirstComponent = () => {
  
  const name = 'juan carlos hernandez';

  const github_profile = "https://github.com/juanchodez";

  const student = {
    name: "Juan",
    last_Name: "hernandez",
    mobile: "3167862521",
    linkedin: "https://www.linkedin.com/feed/"

  }
  
  return (
    <>
    <div>
      MyFirstComponent
    </div>
    <div className="container  py-1 mb-2">
    <h1>Temas de React</h1>
    <ul>
        <li>Componentes</li>
        <li>Eventos</li>
        <li>Estados</li>
        <li>Props</li>
        
    </ul>
    </div>
    <div className="container  py-2 mt-2">
    <h1>Datos del docente</h1>
      <p>Nombre: <strong>{name}</strong></p>
      <p>GitHub: <a href={github_profile}> {github_profile}</a> </p>
    </div>
    <div className="container  py-2 mt-2">
    <h1>Datos del docente</h1>
      <p>Nombre: <strong>{student.name}</strong></p>
      <p>Apellido: <strong>{student.last_Name}</strong></p>
      <p>Celular: <strong>{student.mobile}</strong></p>
      <p>Linkedin: <a href={student.linkedin}> {student.linkedin} </a></p>
    </div>
    <div className="container">
      <h1>Objeto completo</h1>
      <pre>{JSON.stringify(student)}</pre>
    </div>

    </>
  )
}



