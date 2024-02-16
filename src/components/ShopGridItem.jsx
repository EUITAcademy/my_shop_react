import classes from './ShopGridItem.module.css';


export default function ShopGridItem({ item, ...props }) {

  return (
    <div className={classes.item} {...props}>
      <div >
        <h2>{item.title}</h2>
        <img src={item.imageUrl} />
        <p>{item.subtitle}</p>
        <p className={classes.price}>{item.price + '$'}</p>
      </div>
      <div className={classes.row}>
        <button >Details</button>
        <button >Add to Cart</button>
      </div>
    </div>
  );
} 