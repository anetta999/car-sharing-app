import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const carsInitialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  extraReducers: builder => {
    builder
      //fetchAllCars
      .addCase(fetchCars.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
