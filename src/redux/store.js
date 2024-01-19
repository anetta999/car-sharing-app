import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars/carsSlice';
import { favoritesReducer } from './cars/favoritesSlice';
import { paginationReducer } from './cars/paginationSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    pagination: paginationReducer,
    favorites: favoritesReducer,
  },
});
