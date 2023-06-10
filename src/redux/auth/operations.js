import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchUsers = createAsyncThunk(
  'user/getUser',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users/current');
      return response;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCreateUser = createAsyncThunk(
  'user/createUser',
  async credentials => {
    console.log(credentials);

    try {
      const { data } = await axios.post('/users/signup', credentials);
      return data;
    } catch (e) {
      console.log(e.message);
    }
  }
);

export const fetchLogin = createAsyncThunk(
  'user/userLogin',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchLogout = createAsyncThunk(
  'user/logoutUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/logout', credentials);
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
