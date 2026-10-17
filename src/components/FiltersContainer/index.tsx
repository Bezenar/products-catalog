import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import Spinner from 'lib/atoms/Spinner';
import cn from 'lib/utils/cn';
import type { T_RootState, T_AppDispatch } from '../../store';
import { getDevices } from '../../store/productsSlice';
import Filters from '../Filters';
import s from './FiltersContainer.module.scss';

const FiltersContainer: React.FC = () => {
  const { isLoading, hasError } = useSelector((state: T_RootState) => state.products);
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
      <Filters />

      <Outlet />
    </>
  );
};

export default FiltersContainer;
