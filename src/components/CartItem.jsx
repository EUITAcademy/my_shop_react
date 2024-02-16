import classes from './CartItem.module.css';

export default function CartItem({ item, ...props }) {
    return (
        <div {...props} className={classes.item}>
            <p className={classes.price}>

            </p>
            <button >Remote item</button>
        </div>
    );
} 