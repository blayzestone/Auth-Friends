import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/protected" component={FriendsList} />
        <Route path="/login" component={LoginForm} />
        <Route component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
