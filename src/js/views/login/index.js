import React from "react";
import LoginForm from "./compnoents/Form";
import { css } from "@emotion/core";

let basic = css`
  color: green;
`;

let important = css`
  color: hotpink;
`;

function Login() {
  return (
    <>
      <LoginForm />
      <div className={[basic]}>sdffasfasf</div>
    </>
  );
}
export default Login;
