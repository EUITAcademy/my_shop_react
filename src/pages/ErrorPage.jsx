import { useRouteError } from 'react-router-dom';

import AppHeader from '../components/AppHeader.jsx';


function ErrorPage() {
    const error = useRouteError();

    return (
        <>
            <AppHeader />
            <p>{error.status ?? 'Error'}</p>
            <p>{error.statusText ?? 'Something went wrong!'}</p>
        </>
    );
}

export default ErrorPage;