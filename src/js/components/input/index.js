import React, { useState } from "react";
import styles from "./style.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

function Input(props) {
  const { type: inputType, value, onChange, ...restProps } = props;

  const [type] = useState(inputType || "text");

  return (
    <>
      <input
        value={value}
        type={type || "text"}
        onChange={onChange}
        className={cx("input")}
        {...restProps}
      ></input>
    </>
  );
}

export default Input;
