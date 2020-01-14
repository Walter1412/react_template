import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "js/views/home";
import Login from "js/views/login";
import About from "js/views/about";
import Hook from "js/views/hook";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/hook">
          <Hook />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
