import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "../Layout/HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numbertOfCartItems = cartCtx.items.reduce((curNumber, item) => {}, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numbertOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
