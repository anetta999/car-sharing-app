import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  itemsLimit: 12,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer;
