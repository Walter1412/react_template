import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import styles from "./style.module.scss";
console.log(styles);
function About() {
  const [count, setCount] = useState(0);
  const match = useRouteMatch();
  console.log(match.path);
  useEffect(() => {
    console.log("useEffect work");
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default About;
