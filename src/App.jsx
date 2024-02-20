import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './pages/Root.jsx';
import ShopPage from './pages/ShopPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import CartPage from './pages/CartPage.jsx';
import ItemDetailsPage from './pages/ItemDetailsPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,  
    children: [
      // index: true means this will be first route of parent by default
      {
        index: true, element: <ShopPage />,
      },
      {
        path: 'auth',
        element: <AuthPage />,
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
    // <Root />
    <RouterProvider router={router} />
  );
}

export default App;
