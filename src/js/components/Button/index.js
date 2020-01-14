import React, { useState } from "js/components/Input/node_modules/react";
import styles from "./style.module.scss";
import classNames from "js/components/Input/node_modules/classnames/bind";
let cx = classNames.bind(styles);
console.log(cx);

function Buton(props) {
  return (
    <>
      <button {...props}></button>
    </>
  );
}

export default Buton;
