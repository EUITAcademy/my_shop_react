
import AppHeader from '../components/AppHeader.jsx';
import { Outlet } from 'react-router-dom';

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
