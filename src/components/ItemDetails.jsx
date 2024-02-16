import classes from './ItemDetails.module.css';

export default function ItemDetails({ item }) {

    return (
        <div className={classes.row}>
            <img src={item.imageUrl} />
            <div className={classes.main} >
                <div className={classes.content} >
                    <h2>{item.title}</h2>
                    <p>{item.subtitle}</p>
                    <p className={classes.price}>{item.price + '$'}</p>
                </div>
                <button >Add to cart</button>
            </div >
        </div>
    );
} 