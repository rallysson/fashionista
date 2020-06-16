import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../../components/CartItem";
import { RootState } from "../../store";
import {
  incrementItem,
  decrementItem,
  removeEntireItem,
  CartProduct,
} from "./cartSlice";

import "./cart.scss";

const formatToPrice = (price: string) =>
  price.replace("R$", "").replace(",", ".");

const calcTotalPrice = (items: CartProduct[]) =>
  items.reduce(
    (acc, item) =>
      acc +
      (Number(formatToPrice(item.actual_price)) ||
        Number(formatToPrice(item.regular_price))) *
        item.quantity,
    0
  );

function Cart(): ReactElement {
  const items = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = calcTotalPrice(items);

  return (
    <div className="cart">
      {items.map((item) => (
        <CartItem
          key={`${item.code_color} ${item.size}`}
          item={item}
          onRemoveItem={() =>
            dispatch(
              removeEntireItem({ codeColor: item.code_color, size: item.size })
            )
          }
          onIncrement={() =>
            dispatch(
              incrementItem({ codeColor: item.code_color, size: item.size })
            )
          }
          onDecrement={() =>
            dispatch(
              decrementItem({ codeColor: item.code_color, size: item.size })
            )
          }
        />
      ))}
      <footer className="cart__footer">Total: R$ {totalPrice}</footer>
    </div>
  );
}

export { Cart };
