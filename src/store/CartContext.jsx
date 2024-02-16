import { createContext, useState } from "react";

import { useCookies } from "react-cookie";


const CartContext = createContext();

const CartProvider = ({ children }) => {

    // Get items from cookies initially
    const [cookies, setCookie] = useCookies(['cartItems']);
    const savedItems = cookies['cartItems'] ?? [];

    // Set initial state with savedItems 
    const [cartItems, setCartItems] = useState(savedItems);

    function addCartItem(item) {
        const updatedItems = [...cartItems, item];
        setCartItems(updatedItems);
         // Set items in cookies
        setCookie('cartItems', updatedItems);
    }

    function removeCartItem(item) {
        const index = cartItems.findIndex(i => i.id === item.id);
        // if index === -1, means no items in array found
        if (index !== -1) {
            const updatedCart = [...cartItems];
            updatedCart.splice(index, 1);
            setCartItems(updatedCart)
            // Set items in cookies
            setCookie('cartItems', updatedCart);
        }
    }

    function removeAllCartItems() {
            setCartItems([])
            setCookie('cartItems', []);
    }

    return (
        <CartContext.Provider value={{ cartItems, addCartItem, removeCartItem, removeAllCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };




