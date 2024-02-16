import classes from './AppHeader.module.css';

export default function AppHeader() {

    return (
        <nav className={classes.header} >
            <h1 className={classes.title}>My Clothing Shop</h1>
        </nav>
    );
}