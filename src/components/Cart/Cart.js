import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (prop) => {
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "shusi", amount: 2, price: 12.34 }].map((item) => 
       <li key={item.id}>{item.name}</li>
      )}
    </ul>
  );
  return (
    <Modal>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>33.3</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
