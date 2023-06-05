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
      query: page => `/users?page=${page}&limit=3`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        console.log('currentArg: ', currentArg);
        console.log('previousArg: ', previousArg);
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
      invalidatesTags: ['Users'],
    }),
    // handleFollowers: builder.mutation({
    //   query: ({ id, body }) => ({
    //     url: `/users/${id}`,
    //     method: 'PUT', //it is mockapi specific
    //     body,
    //   }),
    // }),
  }),
});

export const {
  useGetAllUsersQuery,
  useFilterByFollowQuery,
  useGetUsersPageQuery,
  useUpdateUserMutation,
} = usersApi;
