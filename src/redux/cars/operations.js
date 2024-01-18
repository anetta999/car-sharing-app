import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://65a8f3fa219bfa37186803a5.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/adverts');
      return data;
    } catch (error) {
      console.log(error);

      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOneCarById = createAsyncThunk(
  'cars/fetchOneCar',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts/${id}`);
      return data;
    } catch (error) {
      console.log(error);

      thunkAPI.rejectWithValue(error.message);
    }
  }
);
