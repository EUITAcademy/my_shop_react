import { useState } from 'react';
import classes from './AuthForm.module.css';

const AuthForm = () => {

    const [isLogIn, setIsLogin] = useState(true);



     // Event handler for form submission
  const handleSubmit = (event) => {
    // The preventDefault method is a function that belongs to the event object passed 
    // to event handlers in JavaScript. 
    // In the context of a form submission, preventDefault 
    // is used to stop the default behavior of the browser, 
    // which is to refresh the page or navigate to a new URL when the form is submitted.
    event.preventDefault();
    // Perform necessary actions, such as sending data to a server

  };

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
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