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
    getRefreshingUsers: builder.query({
      query: ({ page, limit = 3 }) => `/users?page=1&limit=${page * limit}`,
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
        const duplication = currentCache.find(
          user => user.id === newItems[0].id
        );

        !duplication && currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg, state, endpointState }) {
        if (!previousArg || !endpointState) {
          return false;
        }

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
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetRefreshingUsersQuery,
  useFilterByFollowQuery,
  useGetUsersPageQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
} = usersApi;
