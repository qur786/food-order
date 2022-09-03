import { HTMLProps } from "react";
import { Modal } from "../Modal";
import classes from "./index.module.css";

interface CartProps {
  onCartHide: HTMLProps<HTMLDivElement | HTMLButtonElement>["onClick"];
}

export function Cart({ onCartHide }: CartProps) {
  const cartItems = [
    { id: "1", name: "Sushi", description: "Rice with fish", price: 100 },
  ].map((meal) => {
    return (
      <ul className={classes["cart-items"]}>
        <li>{meal.name}</li>
      </ul>
    );
  });
  return (
    <Modal onBackdropClick={onCartHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>50</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCartHide}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
