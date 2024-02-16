import classes from './ShopGridItem.module.css';

import { useNavigate } from 'react-router-dom';
import { CartContext } from "../store/CartContext.jsx";
import { useContext } from 'react';

export default function ShopGridItem({ item, ...props }) {

  // Navigation
  const navigate = useNavigate();

  function navigateToDetails(id) {
    navigate(`${id}`);
  }

  const { addCartItem } = useContext(CartContext);

  return (
    <div className={classes.item} {...props}>
      <div >
        <h2>{item.title}</h2>
        <img src={item.imageUrl} />
        <p>{item.subtitle}</p>
        <p className={classes.price}>{item.price + '$'}</p>
      </div>
      <div className={classes.row}>
        <button onClick={() => navigateToDetails(item.id)}>Details</button>
        <button onClick={() => addCartItem(item)}>Add to Cart</button>
      </div>
    </div>
  );
} 