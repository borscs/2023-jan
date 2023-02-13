import {Fragment, useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

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
        <Fragment>
            {cartIsShow && <Cart onClose={showCartHandler}/>}
            <Header onShowCart={showCartHandler}/>
            <main>
                <Meals/>
            </main>
        </Fragment>
    );
}

export default App;
