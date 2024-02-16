import { redirect, json } from "react-router-dom";

import AuthForm from "../components/AuthForm.jsx";

import { setToken } from "../util/token-manager.js";


import axios from "axios";

export default function AuthPage() {
    return (<AuthForm />)
}


// Make sure we always have query param 'action'
export function loader({request}) {
        const url = new URL(request.url);
        const action = url.searchParams.get("action");
        if (!action) {
          return redirect('/auth?action=login');
        }

        return null;
  }

export async function action({ request }) {

    // Get email, password and confirmPassword from form
    const formData = await request.formData();

    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    // Validation
    const errors = {};
    if (!email.includes("@") || email.length < 5) {
        errors.email = "That doesn't look like an email address";
    }

    if (password.length < 6) {
        errors.password = "Password must be > 6 characters";
    }

    // Get seachParams to know if action is login or signup
    const seachParams = new URL(request.url).searchParams;
    const action = seachParams.get('action');

    // Double check if action is login or signup
    if (action !== 'login' && action !== 'signup') {
        // Throw Error
        throw json({ message: 'Unprocessable Entity' }, { status: 401 });
    }

    // Validate confirmPassword for signup action
    if (action === 'signup') {
        if (password !== confirmPassword) {
            errors.confirmPassword = "Passwords must match";
        }
    }

    // return data if we have errors
    if (Object.keys(errors).length) {
        return errors;
    }

    // login or signup based on action
    try {

        // Axios offers several advantages over native Fetch method
        // such as neat error handling, request cancellation and other features
        const data = {
            email: email,
            password: password
        };

        const response = await axios.post(`http://localhost:8080/${action}`, data);

        // Manage token(save to local storage)
        const responseData = response.data;
        const token = responseData.token;
        const expiration = responseData.exp;

        setToken(token, expiration);

        // Redirect to shopping page if everything is ok
        return redirect('/');

    } catch (err) {
        const errorMessage = err.response.data.message;
        const status = err.response.status;

        errors.server = errorMessage + ' ' + status;
        return errors;
        // // throwing Error like this will show Error route
        // throw new Response(errorMessage, { status: status, statusText: errorMessage });
    }


}