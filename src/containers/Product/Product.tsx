import React, { ReactElement, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../../store";
import defautImage from "../../assets/default-image.png";

import "./product.scss";
import { Product as IProduct } from "../Home/productsSlice";

interface Props {}

function Product({}: Props): ReactElement {
  const { productCodeColor } = useParams();
  const { data: products } = useSelector((state: RootState) => state.products);
  const [selectedSize, setSelectedSize] = useState("");

  const selectedProduct = products.find(
    (product) => product.code_color === productCodeColor
  );

  const getAvaibleSizes = (product: IProduct) =>
    product.sizes.filter(({ available }) => available);

  return (
    <div className="product">
      {selectedProduct && (
        <>
          <div className="product__imageContainer">
            <img
              className="product__image"
              src={selectedProduct.image || defautImage}
              alt={selectedProduct.name}
            />
            {selectedProduct.discount_percentage && (
              <div className="card__discountPercentage">
                <span>{selectedProduct.discount_percentage} off</span>
              </div>
            )}
          </div>
          <div className="product__description">
            <span className="product__name">{selectedProduct.name}</span>

            <div>
              {selectedProduct.discount_percentage ? (
                <div>
                  <span className="card__promotion">
                    {selectedProduct.regular_price}
                  </span>
                  <span>{selectedProduct.actual_price}</span>
                </div>
              ) : (
                <span>{selectedProduct.regular_price}</span>
              )}
              <span className="product__installmets">
                em até {selectedProduct.installments}
              </span>
            </div>

            <div className="product__sizes">
              {getAvaibleSizes(selectedProduct).map((size) => (
                <button
                  className={`product__sizeButton ${
                    size.sku === selectedSize
                      ? "product__sizeButton--selected"
                      : ""
                  }`}
                  onClick={() => setSelectedSize(size.sku)}
                >
                  {size.size}
                </button>
              ))}
            </div>
            <button className="product__addCart product__sizeButton">
              Adicionar ao Carrinho
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export { Product };
