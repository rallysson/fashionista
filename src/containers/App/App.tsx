import React, { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Header } from "../Header";

interface Props {}

function App(): ReactElement {
  return (
    <div>
      <Header />
      <Switch>
        <Route component={Home} path="/" />
      </Switch>
    </div>
  );
}

export { App };
