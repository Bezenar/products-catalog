import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://static.ui.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<[], void>({
      query: () => 'fingerprint/ui/public.json',
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
