import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { usersApi } from './users/usersApi';
import { pageReducer } from './page/reducer';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const persistConfig = {
  page: { key: 'tweet-page', storage },
  api: { key: 'tweet-api', storage },
};

const persistedPageReducer = persistReducer(persistConfig.page, pageReducer);
const persistedUserApiReducer = persistReducer(
  persistConfig.api,
  usersApi.reducer
);

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: persistedUserApiReducer,
    page: persistedPageReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    usersApi.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
