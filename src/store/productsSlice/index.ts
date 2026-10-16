import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import adaptGetDevicesResponse from '../../adapters/adaptGetDevicesResponse';
import type { I_AdaptedGetDevicesRes } from '../../types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://static.ui.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<I_AdaptedGetDevicesRes, void>({
      query: () => 'fingerprint/ui/public.json',
      transformResponse: adaptGetDevicesResponse,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
