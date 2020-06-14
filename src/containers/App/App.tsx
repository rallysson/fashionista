import React, { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Header } from "../Header";

import "./app.scss";

interface Props {}

function App(): ReactElement {
  const isDrawerOpen = false;
  return (
    <div className={`app ${isDrawerOpen ? "app--drawer--visible" : ""}`}>
      <Header />
      <main className="app__main">
        <Switch>
          <Route component={Home} path="/" />
        </Switch>
      </main>
    </div>
  );
}

export { App };
