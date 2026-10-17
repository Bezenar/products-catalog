import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router';
import Spinner from 'lib/atoms/Spinner';
import cn from 'lib/utils/cn';
import NavigationBar from '../../components/NavigationBar';
import type { T_RootState, T_AppDispatch } from '../../store';
import { getDevices } from '../../store/productsSlice';
import s from './Product.module.scss';

const Product: React.FC = () => {
  const { isLoading, hasError } = useSelector((state: T_RootState) => ({
    isLoading: state.products.isLoading,
    hasError: state.products.hasError,
  }));

  const dispatch = useDispatch<T_AppDispatch>();

  useEffect(() => {
    dispatch(getDevices());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <div className={cn('flex ai-center jc-center pt-10', s.loading)}>
        <Spinner label="Loading" size="xl" />
      </div>
    );
  }

  if (hasError) {
    return <Navigate to="/error" />;
  }

  return (
    <>
      <NavigationBar />

      <h1>Product Page</h1>
    </>
  );
};

export default Product;
