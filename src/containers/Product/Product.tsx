import React, { ReactElement, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem, incrementItem } from "../Cart/cartSlice";

import { RootState } from "../../store";
import defautImage from "../../assets/default-image.png";

import { Product as IProduct } from "../Home/productsSlice";
import "./product.scss";

const getAvaibleSizes = (product: IProduct) =>
  product.sizes.filter(({ available }) => available);

function Product(): ReactElement {
  const { productCodeColor } = useParams();
  const { data: products } = useSelector((state: RootState) => state.products);

  const cartProducts = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const [selectedSize, setSelectedSize] = useState("");

  const selectedProduct = products.find(
    (product) => product.code_color === productCodeColor
  );

  function handleAddItem() {
    const alreadyAdded = cartProducts.find(
      (cartProduct) =>
        cartProduct.size === selectedSize &&
        cartProduct.code_color === (selectedProduct as IProduct).code_color
    );

    if (alreadyAdded) {
      dispatch(
        incrementItem({
          codeColor: (selectedProduct as IProduct).code_color,
          size: selectedSize,
        })
      );
    } else {
      dispatch(
        addItem({ ...(selectedProduct as IProduct), size: selectedSize })
      );
    }
  }

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
              Escolha o Tamanho: <br />
              {getAvaibleSizes(selectedProduct).map((size) => (
                <button
                  key={size.sku}
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
            <button
              onClick={handleAddItem}
              className="product__addCart product__sizeButton"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export { Product };
