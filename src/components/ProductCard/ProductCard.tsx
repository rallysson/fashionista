import React, { ReactElement } from "react";
import { Product } from "../../containers/Home/productsSlice";
import { Link } from "react-router-dom";

import defautImage from "../../assets/default-image.png";
import "./productCard.scss";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props): ReactElement {
  return (
    <section className="card">
      {product.discount_percentage && (
        <div className="card__discountPercentage">
          <span>{product.discount_percentage} off</span>
        </div>
      )}
      <Link to={`products/${product.style}`}>
        <img
          className="card__image"
          src={product.image || defautImage}
          alt={product.name}
        />
        <div className="card__descriptionContainer">
          <b>{product.name}</b>
          {product.discount_percentage ? (
            <div>
              <span className="card__promotion">{product.regular_price}</span>
              <span>{product.actual_price}</span>
            </div>
          ) : (
            <span>{product.regular_price}</span>
          )}
        </div>
      </Link>
    </section>
  );
}

export { ProductCard };
