import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";

function Foobar() {
  return <div>Protected</div>;
}

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/protected" component={Foobar} />
        <Route path="/login" component={LoginForm} />
        <Route component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
