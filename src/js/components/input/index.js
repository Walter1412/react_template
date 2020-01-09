import React, { useState } from "react";
import styles from "./style.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

function Input(props) {
  const { type: inputType, value: inputValue, ...restProps } = props;

  const [type] = useState(inputType || "text");
  const [value, setValue] = useState(inputValue);

  function handleValue(event) {
    setValue(event.target.value);
  }
  return (
    <>
      <input
        value={value}
        type={type || "text"}
        onChange={handleValue}
        className={cx("input")}
        {...restProps}
      ></input>
    </>
  );
}

export default Input;
