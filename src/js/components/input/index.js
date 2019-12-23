import React, { useState } from "react";

function Input(props) {
  const [type] = useState(props.type || "text");
  const [value, setValue] = useState(props.value);
  function handleValue(event) {
    setValue(event.target.value);
  }
  return (
    <>
      <input type={type || "text"} value={value} onChange={handleValue}></input>
    </>
  );
}

export default Input;
