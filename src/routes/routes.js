import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Index";
import Login from "../pages/Login";
import Register from "../pages/Register";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
