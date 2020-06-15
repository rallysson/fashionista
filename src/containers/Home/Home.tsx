import React, { ReactElement } from "react";
import { useSelector } from "react-redux";

import { ProductCard } from "../../components/ProductCard";
import { Loader } from "../../components/Loader";
import { RootState } from "../../store";

import "./home.scss";

function Home(): ReactElement {
  const productsSlice = useSelector((state: RootState) => state.products);
  const { data: products, loading } = productsSlice;

  return (
    <div className="home">
      <span className="home__itemsQuantidade">{products.length} itens</span>
      {loading ? (
        <Loader className="home__loader" />
      ) : (
        <section className="home__productsContainer">
          {products.map((product) => (
            <ProductCard key={product.code_color} product={product} />
          ))}
        </section>
      )}
    </div>
  );
}

export { Home };
