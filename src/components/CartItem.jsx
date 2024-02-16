import classes from './CartItem.module.css';


import { CartContext } from "../store/CartContext.jsx";
import { useContext } from 'react';

export default function CartItem({ item, ...props }) {

    const { cartItems, removeCartItem } = useContext(CartContext);

    // item count in cart 
    const filteredItems = cartItems.filter(i => i.id === item.id);

    // filtered Items length
    const itemLength = filteredItems.length;

    // Total item price
    const totalItemPrice = filteredItems.reduce((total, i) => total + i.price, 0);

    return (
        <div {...props} className={classes.item}>
            <p>
                {itemLength < 0 ? item.title : item.title + ' (' + itemLength + ')'}
            </p>
            <p className={classes.price}>
                {totalItemPrice + '$'}
            </p>
            <button onClick={() => removeCartItem(item)}>Remote item</button>
        </div>
    );
} 