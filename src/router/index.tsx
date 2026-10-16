import { createBrowserRouter } from 'react-router';
import { APP_ROUTE } from '../constants';
import Product from '../views/Product';
import ProductsList from '../views/ProductsList';

const router = createBrowserRouter([
  {
    path: APP_ROUTE.ROOT,
    element: <ProductsList />,
  },
  {
    path: APP_ROUTE.PRODUCT,
    element: <Product />,
  },
]);

export default router;
