import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => {
  return state.cars.cars;
};

export const selectLoading = state => {
  return state.cars.isLoading;
};

export const selectError = state => {
  return state.cars.error;
};

export const selectFilter = state => {
  return state.filter;
};

export const selectFilteredCars = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => {
    return cars.filter(car =>
      car?.make?.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
