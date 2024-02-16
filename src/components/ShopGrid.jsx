
import classes from './ShopGrid.module.css';
import ShopGridItem from './ShopGridItem.jsx';

export default function ShopGrid({ items }) {

    return (
        <div className={classes.grid}>
            {items.map((item) => <ShopGridItem key={item.id} item={item} />)}
        </div>
    );
}