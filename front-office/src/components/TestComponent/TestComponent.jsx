import React, { useState } from "react";
import "./TestComponent.css";

export default function TestComponent() {
  const [text, setText] = useState();
  const [updated, setUpdated] = useState();

  const textOnChange = (event) => {
    setText(event.target.value);
  };
  const buttonOnClick = () => {
    setUpdated(text);
  };

  return (
    <div>
      <input type="text" value={text} onChange={textOnChange} />
      <button onClick={buttonOnClick}>Actualizar</button>
      <p class="andreu">Texto input: {text}</p>
      <p>Texto actualizado: {updated}</p>
    </div>
  );
}
