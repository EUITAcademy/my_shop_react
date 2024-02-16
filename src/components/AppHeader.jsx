import classes from './AppHeader.module.css';
import { Link } from "react-router-dom";
import { useLocation, useNavigate, useRouteError } from 'react-router-dom';
import { CartContext } from "../store/CartContext.jsx";
import { useContext } from 'react';

import { clearToken } from '../util/token-manager.js';

export default function AppHeader() {

    // This hook returns the current location object.
    let path = useLocation().pathname;
    let error = useRouteError();
    const navigate = useNavigate();

    const { cartItems } = useContext(CartContext);

    return (
        <nav className={classes.header} >
            <h1 className={classes.title}>My Clothing Shop</h1>
            {
                !error && <div className={classes.buttons}>

                    {path === '/cart' && <Link to='/' >Shop</Link>}
                    {(path !== '/cart' && path !== '/auth') && <Link to='cart' className={classes.link}>{
                        cartItems.length > 0 ? `Cart(${cartItems.length})` : 'Cart'
                    }</Link>
                    }
                    {
                        path === '/' && <button onClick={
                            () => {
                                clearToken();
                                navigate('/auth?action=login');
                            }
                        }> Log out </button>
                    }

                </div>
            }
        </nav>
    );
}