import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
