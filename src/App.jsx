import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './pages/root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import AuthPage, { action as authAction, loader as authLoader } from './pages/AuthPage.jsx';
import CartPage from './pages/CartPage.jsx';
import ItemDetailsPage from './pages/ItemDetailsPage.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,   
    errorElement: <ErrorPage />,
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
