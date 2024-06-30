import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { apiService } from './service/api';
import { cartSlice } from './ui/cart';

export const store = configureStore({
  reducer: combineSlices(apiService, cartSlice),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});
