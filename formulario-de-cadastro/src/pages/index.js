import { Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";

function Pages() {
  return (
    <Switch>
      <Route exact path="/">
        <Register />
      </Route>
      <Route path="/login/:name">
        <Login />
      </Route>
    </Switch>
  );
}

export default Pages;
