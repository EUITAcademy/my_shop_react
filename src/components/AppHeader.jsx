import classes from './AppHeader.module.css';
import { useLocation, useNavigate, useRouteError } from 'react-router-dom';

import { clearToken } from '../util/token-manager.js';

export default function AppHeader() {

    // This hook returns the current location object.
    let path = useLocation().pathname;

    let error = useRouteError();
    // Programmatically navigate.
    const navigate = useNavigate();

    return (
        <nav className={classes.header} >
            <h1 className={classes.title}>My Clothing Shop</h1>
            {
                !error && <div className={classes.buttons}>
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