import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from './users/usersApi';
import { cardsReducer } from './cards/reducer';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    cards: cardsReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    usersApi.middleware,
  ],
});

setupListeners(store.dispatch);
