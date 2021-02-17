import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";


import register from "./components/Registration";
import "./styles.css";
import "./RegistrationStyles.scss";

const routes = (
  <BrowserRouter>
    <Route exact path="/" component={register} />
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
ReactDOM.render(routes, rootElement);

