import React, { useEffect, useState } from "react";
import TestPNG from "../../../assets/images/static/test.png";
import Input from "../../components/Input";

function Home() {
  const [form, setForm] = useState({
    test: "1231sdfg"
  });
  useEffect(() => {
    console.log("useEffect work");
  });

  return (
    <div>
      <Input
        value={form.test}
        onChange={event => setForm({ test: event.target.value })}
      ></Input>
      <div>{form.test}</div>
      <h1>Hello Home</h1>
      <img src={TestPNG} alt="test" />
    </div>
  );
}
export default Home;
