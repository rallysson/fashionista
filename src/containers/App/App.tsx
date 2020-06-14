import React, { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Header } from "../Header";

import "./app.scss";

interface Props {}

function App(): ReactElement {
  const isDrawerOpen = false;
  return (
    <div className={`app ${isDrawerOpen && "app--drawer--visible"}`}>
      <Header />
      <Switch>
        <Route component={Home} path="/" />
      </Switch>
    </div>
  );
}

export { App };
