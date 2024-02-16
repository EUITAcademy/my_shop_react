import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';

import Root from './pages/root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import AuthPage, { action as authAction, loader as authLoader } from './pages/AuthPage.jsx';
import CartPage from './pages/CartPage.jsx';
import ItemDetailsPage from './pages/ItemDetailsPage.jsx';

import { getToken, isTokenValid } from './util/token-manager.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,   
    errorElement: <ErrorPage />,
     // This will be fired for all routes
     loader: async ({ request }) => {
      const url = new URL(request.url);

      if (url.pathname === '/auth') {
        return null;
      }
      const token = getToken();
      // If there is no token we redirect to auth
      if (!token) {
        return redirect('/auth');
      }
      // If token is expired we also redirect to auth
      const isTokenVaid = isTokenValid();
      if (!isTokenVaid) {
        return redirect('/auth');
      }
      return null;

    },
    children: [
      // index: true means this will be first route of parent by default
      {
        index: true, element: <ShopPage />,
      },
      {
        path: 'auth',
        element: <AuthPage />,
        action: authAction,
        loader: authLoader,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      // Should be last otherwise prev routes won't work
      {
        path: ':productId',
        element: <ItemDetailsPage />,
      },
    ],
  },
]);

function App() {
  return (
        <RouterProvider router={router} />
  );
}

export default App;
