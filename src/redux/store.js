import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from './users/usersApi';
import { cardsReducer } from './page/reducer';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    page: cardsReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    usersApi.middleware,
  ],
});

setupListeners(store.dispatch);
