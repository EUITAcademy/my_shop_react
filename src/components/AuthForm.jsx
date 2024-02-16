import classes from './AuthForm.module.css';

import { Form, useSearchParams, useActionData, useNavigation, Link } from 'react-router-dom';
import Loader from './Loader';

const AuthForm = () => {

    const [searchParams] = useSearchParams();
    const errors = useActionData();

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
                {errors?.email && <span className={classes.error}>{errors.email}</span>}
            </p>
            <p>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                {errors?.password && <span className={classes.error}>{errors.password}</span>}
            </p>
            {!isLogIn && <p>
                <label htmlFor="confirm_password">Confirm password:</label>
                <input type="password" id="confirm_password" name="confirmPassword" />
                {errors?.confirmPassword && <span className={classes.error}>{errors.confirmPassword}</span>}
            </p>}

            {
                errors?.server && <p>
                    <span className={classes.error}>{errors.server}</span>
                </p>
            }

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