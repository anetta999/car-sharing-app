import { createSlice } from '@reduxjs/toolkit';

const LS_KEY = 'favorites';

const initialFavoritesState = {
  favorites: localStorage.getItem(LS_KEY)
    ? JSON.parse(localStorage.getItem(LS_KEY))
    : [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialFavoritesState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites.push(action.payload);
      localStorage.setItem(LS_KEY, JSON.stringify(state.favorites));
    },
    removeFromFavorites: (state, action) => {
      const removedFavorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );

      state.favorites = removedFavorites;

      localStorage.setItem(LS_KEY, JSON.stringify(state.favorites));
    },
  },
});

export const { setFavorites, removeFromFavorites } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
