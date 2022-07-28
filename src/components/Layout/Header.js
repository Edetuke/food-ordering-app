import foodImg from "../../assets/food.jpg";
import classes from "./Header.module.css";
import { Fragment } from "react";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img
          className={classes["main-image"]}
          src={foodImg}
          alt="A table full of food"
        ></img>
      </div>
    </Fragment>
  );
};

export default Header;
