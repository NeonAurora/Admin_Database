import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: 'api',
  endpoints: (builder) => ({
    insertData: builder.mutation({
      query: (data) => ({
        url: 'insertion',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useInsertDataMutation } = api;
