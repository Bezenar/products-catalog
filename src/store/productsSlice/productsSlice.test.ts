import { configureStore } from '@reduxjs/toolkit';
import { describe, expect, it } from 'vitest';
import ProductsApi from '../../api/ProductsApi';
import type { I_AdaptedGetDevicesRes, T_ProductsSlice } from '../../types';
import productsSlice, { getDevices } from './index';

const adaptedResponse: I_AdaptedGetDevicesRes = {
  version: '2026.10',
  devices: [
    {
      id: 'router-1',
      product: { name: 'Dream Router' },
    },
  ],
};

describe('productsSlice', () => {
  it('initializes with empty devices and no loading or error', () => {
    expect(productsSlice.reducer(undefined, { type: 'unknown' })).toEqual({
      isLoading: false,
      hasError: false,
      devices: [],
      version: '',
    });
  });

  it('sets loading and clears errors when getDevices is pending', () => {
    const initialState: T_ProductsSlice = {
      isLoading: false,
      hasError: true,
      devices: [],
      version: '',
    };
    const state = productsSlice.reducer(initialState, getDevices.pending('request-1', undefined));

    expect(state).toEqual({
      isLoading: true,
      hasError: false,
      devices: [],
      version: '',
    });
  });

  it('stores devices and version when getDevices is fulfilled', () => {
    const state = productsSlice.reducer(
      undefined,
      getDevices.fulfilled(adaptedResponse, 'request-1', undefined),
    );

    expect(state).toEqual({
      isLoading: false,
      hasError: false,
      devices: adaptedResponse.devices,
      version: adaptedResponse.version,
    });
  });

  it('loads devices from ProductsApi', async () => {
    const getDevicesFromApi = vi
      .spyOn(ProductsApi.prototype, 'getDevices')
      .mockResolvedValue(adaptedResponse);
    const store = configureStore({ reducer: productsSlice.reducer });

    await store.dispatch(getDevices());

    expect(getDevicesFromApi).toHaveBeenCalledOnce();
  });

  it('converts ProductsApi failures to rejected thunk actions', async () => {
    vi.spyOn(ProductsApi.prototype, 'getDevices').mockRejectedValue(new Error('Request failed'));
    const store = configureStore({ reducer: productsSlice.reducer });

    const result = await store.dispatch(getDevices());

    expect(result).toMatchObject({ meta: { rejectedWithValue: true } });
  });

  it('sets the error state when getDevices is rejected', () => {
    const initialState: T_ProductsSlice = {
      isLoading: true,
      hasError: false,
      devices: adaptedResponse.devices,
      version: adaptedResponse.version,
    };
    const state = productsSlice.reducer(
      initialState,
      getDevices.rejected(new Error('Request failed'), 'request-1', undefined),
    );

    expect(state).toEqual({
      isLoading: false,
      hasError: true,
      devices: adaptedResponse.devices,
      version: adaptedResponse.version,
    });
  });
});
