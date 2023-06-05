import { createReducer } from '@reduxjs/toolkit';
import { updatePageAction } from './actions';

const initialState = { current: 1 };

export const cardsReducer = createReducer(initialState, builder => {
  builder.addCase(updatePageAction, (state, action) => {
    console.log('state: ', state);
    console.log('action: ', action);
    state.current = state.current + action.payload;
  });
});

// export const cardsReducer = createReducer([], builder => {
//   builder.addCase(updateCardsAction, (state, action) =>
//     state.concat(action.payload)
//   );
// });
