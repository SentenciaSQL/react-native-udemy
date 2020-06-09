import React from "react";

function Saludar(props){
  const { userInfo, saludarFn } = props;
  const { nombre = "Anonimo", edad = 0 } = userInfo;

  return(
    <div>
      <button onClick={() => saludarFn(nombre, edad)}>Saludar</button>
    </div>
  )
}

export default Saludar;
