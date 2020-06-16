import React, { ReactElement } from "react";
import { CartProduct } from "../../containers/Cart/cartSlice";

import "./cartItem.scss";

import minusIcon from "../../assets/icons/minus-square.svg";
import plusIcon from "../../assets/icons/plus-square.svg";
import defaultImage from "../../assets/default-image.png";

interface Props {
  onIncrement(): void;
  onDecrement(): void;
  onRemoveItem(): void;
  item: CartProduct;
}

function CartItem({
  onIncrement,
  onDecrement,
  onRemoveItem,
  item,
}: Props): ReactElement {
  const itemSize = item.sizes.find((size) => size.sku === item.size);

  return (
    <div className="cardItem">
      <div className="cardItem__imageContainer">
        <img src={item.image || defaultImage} alt={item.name} />
        <button onClick={onRemoveItem}>Remover Item</button>
      </div>
      <div className="cardItem__data">
        <div className="justifiedBetween">
          <span className="cardItem__title">{item.name}</span>
          <span className="cardItem__title">
            {item.actual_price ? item.actual_price : item.regular_price}
          </span>
        </div>
        <div className="justifiedBetween">
          <span className="cardItem__description">Tam: {itemSize?.size}</span>
          <span className="cardItem__description">{item.installments}</span>
        </div>
        <div className="cartItem__buttons">
          <button onClick={onDecrement}>
            <img src={minusIcon} alt="Minus Icon" />
          </button>
          <span>{item.quantity}</span>
          <button onClick={onIncrement}>
            <img src={plusIcon} alt="Plus Icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export { CartItem };
