import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Maker from "../components/maker/";
import Carrito from "../components/carrito/";
import { ContextStore } from "../store";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={props => <ContextStore comp={<App />} />} />
      <Route
        exact
        path="/tienda"
        render={props => <ContextStore comp={<Maker />} />}
      />
      }
      <Route
        exact
        path="/carrito"
        render={props => <ContextStore comp={<Carrito />} />}
      />
    </Switch>
  </BrowserRouter>
);
