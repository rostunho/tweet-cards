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
        console.log('endpointName: ', endpointName);
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        console.log('CURRENT CACHE: ', currentCache[0].id);
        console.log('NEWITEMS: currentCache', newItems[0].id);

        const duplication = currentCache.find(
          user => user.id === newItems[0].id
        );
        console.log('F I N D :', duplication);
        !duplication && currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg, state, endpointState }) {
        console.log('currentArg: ', currentArg);
        console.log('previousArg: ', previousArg);
        console.log('state: ', state);
        console.log('endpointState: ', endpointState);

        if (!previousArg || !endpointState) {
          return false;
        }

        return currentArg !== previousArg;
      },
      providesTags: (result, error, arg) =>
        // result
        //   ? [...result.map(({ id }) => ({ type: 'Users', id })), 'Users']
        //   : ['Users'],
        {
          console.log('results before: ', result);
          if (result) {
            return [
              ...result.map(({ id }) => ({ type: 'Users', id: Number(id) })),
              'Users',
            ];
          }
          console.log('results after: ', result);
          return ['Users'];
        },
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
      invalidatesTags: (result, error, arg) => {
        console.log('arg id: ', arg.id);
        return [{ type: 'Users', id: arg.id }];
      },
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
