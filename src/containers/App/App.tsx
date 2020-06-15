import React, { ReactElement, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchProducts } from "../Home/productsSlice";
import { Home } from "../Home";
import { Product } from "../Product";
import { Header } from "../Header";

import "./app.scss";

interface Props {}

function App(): ReactElement {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const isDrawerOpen = false;
  return (
    <div className={`app ${isDrawerOpen ? "app--drawer--visible" : ""}`}>
      <Header />
      <main className="app__main">
        <Switch>
          <Route exact component={Home} path="/" />
          <Route component={Product} path="/products/:productCodeColor" />
        </Switch>
      </main>
    </div>
  );
}

export { App };
