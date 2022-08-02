import foodImg from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImg} alt="A table full of food"></img>
      </div>
    </Fragment>
  );
};

export default Header;
