import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://647b84b0d2e5b6101db16495.mockapi.io/api/v1',
  }),
  tagTypes: ['Users', 'Following'],

  endpoints: builder => ({
    getAllUsers: builder.query({
      query: () => '/users',
      providesTags: ['Users'],
    }),
    getSingleUser: builder.query({
      query: id => `/users/${id}`,
      providesTags: ['Users'],
    }),
    getUsersPage: builder.query({
      query: page => `/users?page=${page}&limit=3`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: ['Users'],
    }),
    filterByFollow: builder.query({
      query: boolean => `/users?isFollowedByMe=${boolean}`,
      providesTags: ['Users'],
    }),
    updateUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `/users/${id}`,
        method: 'PUT', //it is mockapi specific
        body,
      }),
      // invalidatesTags: ['Following'],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useFilterByFollowQuery,
  useGetUsersPageQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
} = usersApi;
