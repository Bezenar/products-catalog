import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './filtersSlice';
import productsSlice from './productsSlice';

export const store = configureStore({
  reducer: {
    [productsSlice.name]: productsSlice.reducer,
    [filtersSlice.name]: filtersSlice.reducer,
  },
});

export type T_RootState = ReturnType<typeof store.getState>;
export type T_AppDispatch = typeof store.dispatch;
