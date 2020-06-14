import React, { ReactElement, useEffect } from "react";
import { fetchProducts } from "./productsSlice";
import { useDispatch, useSelector } from "react-redux";

import { ProductCard } from "../../components/ProductCard";
import { Loader } from "../../components/Loader";
import { RootState } from "../../store";

import "./home.scss";

function Home(): ReactElement {
  const dispatch = useDispatch();
  const productsSlice = useSelector((state: RootState) => state.products);
  const { data: products, loading } = productsSlice;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="home">
      {loading ? (
        <Loader className="home__loader" />
      ) : (
        <section className="home__productsContainer">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </section>
      )}
    </div>
  );
}

export { Home };
