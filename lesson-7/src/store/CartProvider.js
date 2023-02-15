import CartContext from "./cart-context";
import { useReducer} from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) =>{
    if(action.type === 'ADD'){
        const updateItems = state.items.concat(action.item);
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updateItems,
            totalAmount: updateTotalAmount
        }
    }
    return {};
};

 const CartProvider = (props) => {

    const [cartState, discPatchCartReducer] = useReducer(cartReducer, defaultCartState);

    const addItemCartHandler = (item) => {
        discPatchCartReducer({type: 'ADD', item: item});
    }

    const removeItemCartHandler = (id) => {
        discPatchCartReducer({type: 'REMOVE', id: id});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemCartHandler,
        removeItem: removeItemCartHandler,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};


export default CartProvider;
