import classes from './MealItem.module.css'
import MealItemForm from "./MealItemFrom";
import {useContext} from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
    const cartContext = useContext(CartContext);

    const addItemHandler = (amount) => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>${props.price.toFixed(2)}</div>
            </div>
            <div>
                <MealItemForm id={props.id} addItem={addItemHandler}/>
            </div>
        </li>
    );
};
export default MealItem;
