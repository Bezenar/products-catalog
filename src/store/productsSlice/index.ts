import type { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from 'lib/utils/createAppSlice';
import ProductsApi from '../../api/ProductsApi';
import type { I_AdaptedGetDevicesRes, T_ProductsSlice } from '../../types';

const initialState: T_ProductsSlice = {
  isLoading: false,
  hasError: false,
  devices: [],
  version: '',
};

const slice = createAppSlice({
  name: 'products',
  initialState,
  reducers: (create) => ({
    getDevices: create.asyncThunk(
      async (_, { rejectWithValue }) => {
        try {
          return await new ProductsApi().getDevices();
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
          state.hasError = false;
        },
        fulfilled: (state, action: PayloadAction<I_AdaptedGetDevicesRes>) => {
          state.isLoading = false;
          state.hasError = false;
          state.devices = action.payload.devices;
          state.version = action.payload.version;
        },
        rejected: (state) => {
          state.isLoading = false;
          state.hasError = true;
        },
      },
    ),
  }),
});

export const { getDevices } = slice.actions;

export default slice;
