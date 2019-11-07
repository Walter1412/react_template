import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
function About() {
  const [count, setCount] = useState(0);
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
