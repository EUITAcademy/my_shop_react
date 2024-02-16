
import { redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm.jsx";


export default function AuthPage() {
    return (<AuthForm />)
}

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
    // Todo: Login or signup
}