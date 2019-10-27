import React from 'react';
import Home from '../home';
import { Switch, Route } from 'react-router-dom';
function About() {
  return <div>hi About</div>;
}
function App() {
  // 宣告一個新的 state 變數，我們叫他「count」
  // const [count, setCount] = useState(0);

  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>

    // <div>
    //   <p>You clicked {count} times</p>
    //   <button onClick={() => setCount(count + 1)}>Click me</button>
    // </div>
  );
}

export default App;
