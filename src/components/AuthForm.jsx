import classes from './AuthForm.module.css';

import { Form, useSearchParams, useNavigation, Link } from 'react-router-dom';
import Loader from './Loader';

const AuthForm = () => {

    const [searchParams] = useSearchParams();

    // https://reactrouter.com/en/main/hooks/use-navigation
    const navigation = useNavigation();

    const isSubmitting = navigation.state === "submitting";

    // No action queryparam and invalid query param is handled in loader
    var actionSearchParam = searchParams.get('action');

    var isLogIn = actionSearchParam === 'login';

    return (
        <Form method='POST' className={classes.form}>
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


            <Link to={`?action=${isLogIn ? 'signup' : 'login'}`}>
                {isLogIn ? 'Sign Up instead' : 'Log In instead'}
            </Link>

            {isSubmitting ? <Loader /> : <button>
                {isLogIn ? 'Log In' : 'Sign Up'}
            </button>}

        </Form>
    );
};

export default AuthForm;