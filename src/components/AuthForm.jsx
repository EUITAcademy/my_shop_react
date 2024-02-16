import { useState } from 'react';
import classes from './AuthForm.module.css';

const AuthForm = () => {

    const [isLogIn, setIsLogin] = useState(true);

    return (
        <form method='POST' className={classes.form}>
            <h1>
                {isLogIn ? 'Log in' : 'Sign Up'}
            </h1>
            <p>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
            </p>
            <p>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
            </p>
            {!isLogIn && <p>
                <label htmlFor="confirm_password">Confirm password:</label>
                <input type="password" id="confirm_password" name="confirmPassword" />
            </p>}

            <button onClick={
                () => setIsLogin((isLogIn) => !isLogIn)
            }>
                {isLogIn ? 'Log In' : 'Sign Up'}
            </button>

        </form>
    );
};

export default AuthForm;