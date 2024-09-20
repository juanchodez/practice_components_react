import PropTypes from "prop-types";

export const ThirdComponent = (props) => {
  return (
    <div>
        <h1>Comunicacion entre Componentes</h1>
        <ul>
            <li>{ props.name } </li>
            <li>{ props.last_name } </li>
        </ul>
      
    </div>
  )
}

ThirdComponent.propTypes = {
    name: PropTypes.string,
    last_name: PropTypes.string
}


