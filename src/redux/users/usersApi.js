import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://647b84b0d2e5b6101db16495.mockapi.io/api/v1',
  }),
  tagTypes: ['Users'],

  endpoints: builder => ({
    getAllUsers: builder.query({
      query: () => '/users',
      providesTags: ['Users'],
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApi;
