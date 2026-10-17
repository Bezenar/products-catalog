import { createBrowserRouter, Outlet } from 'react-router';
import FiltersContainer from '../components/FiltersContainer';
import PageTemplate from '../components/PageTemplate';
import { APP_ROUTE } from '../constants';
import ErrorView from '../views/ErrorView';
import Product from '../views/Product';
import ProductsGrid from '../views/ProductsGrid';
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
        path: APP_ROUTE.ROOT,
        element: <FiltersContainer />,
        children: [
          {
            index: true,
            element: <ProductsList />,
          },
          {
            path: APP_ROUTE.GRID_VIEW,
            element: <ProductsGrid />,
          },
        ],
      },
      {
        path: APP_ROUTE.PRODUCTS,
        element: <Product />,
      },
    ],
  },
  {
    path: APP_ROUTE.ERRORS,
    element: <ErrorView />,
  },
]);

export default router;
