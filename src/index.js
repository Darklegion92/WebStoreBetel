import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home";
import Maker from "./components/maker";
import Store from "./redux/store";
import './variables.css'
const Root = (
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/maker/:idItem" component={Maker} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(Root, document.getElementById("root"));
