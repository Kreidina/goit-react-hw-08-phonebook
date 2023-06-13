import {
  fetchCreateUser,
  fetchCurrentUser,
  fetchLogin,
  fetchUserLogout,
} from './operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
};

const arrayThunks = [
  fetchCreateUser,
  fetchLogin,
  fetchUserLogout,
  fetchCurrentUser,
];

const handelPending = state => {
  state.isLoading = true;
};

const handelRejected = state => {
  state.isLoading = false;
};
const handelFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const fulfilledLogout = state => {
  state.isLoading = false;
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.user = {};
  state.token = '';
};

const fulfilledCurrent = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = true;
  state.user = payload;
};

const authSliсe = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    arrayThunks.forEach(fetch => {
      builder
        .addCase(fetch.pending, handelPending)
        .addCase(fetch.rejected, handelRejected)
        .addCase(fetch.fulfilled, (state, action) => {
          switch (fetch) {
            case fetchCreateUser:
            case fetchLogin:
              handelFulfilled(state, action);
              break;
            case fetchUserLogout:
              fulfilledLogout(state, action);
              break;
            case fetchCurrentUser:
              fulfilledCurrent(state, action);
              break;
            default:
              break;
          }
        });
    });
  },
});

export const authReducer = authSliсe.reducer;
