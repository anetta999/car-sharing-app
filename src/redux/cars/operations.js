import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
axios.defaults.baseURL = 'https://65a8f3fa219bfa37186803a5.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async ({ value = '', page = 1 }, thunkAPI) => {
    const params = new URLSearchParams({
      make: value,
      page,
      limit: 12,
    });

    try {
      const { data } = await axios.get(`/adverts/?${params}`);
      return data;
    } catch (error) {
      toast.error('Something went wrong, please try reloading the page', {
        duration: 5000,
      });

      thunkAPI.rejectWithValue(error.message);
    }
  }
);
