import {Fragment} from "react";
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";
import Cart from "../Cart/Cart";
import Card from "../UI/Card";

const Header = (props) => {

    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full'/>
            </div>
        </Fragment>
    );
}

export default Header;
