import { createSelector } from '@reduxjs/toolkit';

export const selectCartModule = (state) => state.cart;

export const selectDishAmount = (state, dishId) =>
  selectCartModule(state)[dishId] || 0;

export const selectAmounts = createSelector(
  [(state, dishIds) => dishIds, (state) => state],
  (dishIds, state) => dishIds.map((dishId) => selectDishAmount(state, dishId))
);

export const SelectCartDishIds = createSelector([selectCartModule], (cart) => {
  return Object.keys(cart);
});
