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

export const selectPagination = state => {
  return state.pagination;
};
