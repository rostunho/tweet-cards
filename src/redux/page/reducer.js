import { createReducer } from '@reduxjs/toolkit';
import { updatePageAction } from './actions';

const initialState = { current: 1 };

export const pageReducer = createReducer(initialState, builder => {
  builder.addCase(updatePageAction, (state, action) => {
    state.current = state.current + action.payload;
  });
});
