import classes from './ItemDetails.module.css';
import { CartContext } from "../store/CartContext.jsx";
import { useContext } from 'react';


export default function ItemDetails({ item }) {

    const { addCartItem } = useContext(CartContext);

    return (
        <div className={classes.row}>
            <img src={item.imageUrl} />
            <div className={classes.main} >
                
                <div className={classes.content} >
                    <h2>{item.title}</h2>
                    <p>{item.subtitle}</p>
                    <p className={classes.price}>{item.price + '$'}</p>
                </div>

                <button onClick={() => addCartItem(item)}>Add to cart</button>
            </div >
        </div>
    );
} 