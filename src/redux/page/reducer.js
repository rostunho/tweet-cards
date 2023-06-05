import { createReducer } from '@reduxjs/toolkit';
import { updatePageAction } from './actions';

const initialState = { current: 1 };

export const pageReducer = createReducer(initialState, builder => {
  builder.addCase(updatePageAction, (state, action) => {
    console.log('state: ', state);
    console.log('action: ', action);
    state.current = state.current + action.payload;
  });
});
