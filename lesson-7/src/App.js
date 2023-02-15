import {Fragment, useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
    const [cartIsShow,setCartIsShow ] = useState(false);

    const showCartHandler = () => {
        if(cartIsShow === true){
            setCartIsShow(false);
        }else{
            setCartIsShow(true)
        }
    }

    return (
        <CartProvider>
            {cartIsShow && <Cart onClose={showCartHandler}/>}
            <Header onShowCart={showCartHandler}/>
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
}

export default App;
