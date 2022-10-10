import React, { Fragment } from "react";
import mealImage from '../../assets/meals.jpg'
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Food-Heaven 🍽️</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="ImageNotFound" />
            </div>
        </Fragment>
    );
};
export default Header;