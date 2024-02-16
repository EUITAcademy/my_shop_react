import { CartContext } from "../store/CartContext.jsx";
import { useContext } from 'react';
import { getToken } from "../util/token-manager.js";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CartItem from "../components/CartItem.jsx";
import axios from "axios";

function CartPage() {

    const { cartItems, removeAllCartItems } = useContext(CartContext);

    // filter out duplicate items from the cartItems array based on their id property.

    // Set creates a Set object, which automatically removes duplicate values.
    // Array.from converts the Set object back into an array.

    // .map(id => ...) iterates over each unique id in the array and uses cartItems.find() 
    // to find the corresponding item object in the cartItems array.
    const uniqueItems = Array.from(new Set(cartItems.map(item => item.id))).map(id => {
        return cartItems.find(item => item.id === id);
    });

    // Total price of all items 
    const totalPrice = cartItems.reduce((total, i) => total + i.price, 0);

    const priceStyle = {
        color: '#0D9276',
        fontWeight: '700',
    };

    async function order() {

        try {

            // Axios offers several advantages over native Fetch method
            // such as neat error handling, request cancellation and other features
            const data = {
                order: cartItems,
            };

            await axios.post('http://localhost:8080/order', data, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${getToken()}`
                }
              });
            // clear cart
            removeAllCartItems();
            // show success
            toast.success("Order created successfully! Thank you!");

        } catch (err) {
            const errorMessage = err.response.data.message;
            const status = err.response.status;
            toast.error(errorMessage + ' ' + status);
        }

    }


    return (
        <div style={{ margin: '20px' }}>
            {uniqueItems.length > 0 ?
                <>
                    {uniqueItems.map((item) => <CartItem item={item} key={item.id} />)}
                    <h2 style={priceStyle}> {totalPrice + '$'} </h2>
                    <button onClick={order}>Checkout</button>
                </>
                : <p> Cart is empty </p>}
            <ToastContainer />
        </div>
    );
}

export default CartPage;

