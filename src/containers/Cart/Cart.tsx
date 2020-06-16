import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../../components/CartItem";
import { RootState } from "../../store";
import { incrementItem, decrementItem, removeEntireItem } from "./cartSlice";

interface Props {}

function Cart({}: Props): ReactElement {
  const items = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

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
      <footer className="cart__footer"></footer>
    </div>
  );
}

export { Cart };
