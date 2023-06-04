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
    getUsersPage: builder.query({
      query: ({ page, limit }) => `/users?page=${page}&limit=${limit}`,
      providesTags: ['Users'],
    }),
    filterByFollow: builder.query({
      query: boolean => `/users?isFollowedByMe=${boolean}`,
      providesTags: ['Users'],
    }),
    updateStatus: builder.mutation({
      query: ({ id, body }) => ({
        url: `/users/${id}`,
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT', //it is mockapi specific
        body,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useFilterByFollowQuery,
  useGetUsersPageQuery,
  useUpdateStatusMutation,
} = usersApi;
