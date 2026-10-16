import { createBrowserRouter, Outlet } from 'react-router';
import PageTemplate from '../components/PageTemplate';
import { APP_ROUTE } from '../constants';
import Product from '../views/Product';
import ProductsList from '../views/ProductsList';

const router = createBrowserRouter([
  {
    path: APP_ROUTE.ROOT,
    element: (
      <PageTemplate title="Devices" author="Maxim Bezhenar">
        <Outlet />
      </PageTemplate>
    ),
    children: [
      {
        index: true,
        element: <ProductsList />,
      },
      {
        path: APP_ROUTE.PRODUCT,
        element: <Product />,
      },
    ],
  },
]);

export default router;
