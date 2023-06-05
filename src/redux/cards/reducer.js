import { createReducer } from '@reduxjs/toolkit';
import { updateCardsAction, updatePageAction } from './actions';

const initialState = {
  items: [],
  currentPage: 1,
};

export const cardsReducer = createReducer(initialState, builder => {
  builder
    .addCase(updateCardsAction, (state, action) => {
      state.items = [...state.items, ...action.payload];
    })
    .addCase(updatePageAction, (state, action) => {
      state.currentPage = state.currentPage + 1;
    });
});

// export const cardsReducer = createReducer([], builder => {
//   builder.addCase(updateCardsAction, (state, action) =>
//     state.concat(action.payload)
//   );
// });
