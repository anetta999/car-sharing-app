import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars/carsSlice';
import { filterReducer } from './cars/filterSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filter: filterReducer,
  },
});
