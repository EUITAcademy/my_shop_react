import { Outlet } from 'react-router-dom';

import AppHeader from '../components/AppHeader.jsx';

function Root() {
    return (
        <>
            <AppHeader />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Root;
