import {
  fulfilledCurrent,
  fulfilledLogout,
  handelFulfilled,
  handelPending,
  handelRejected,
  rejectedCurrent,
} from './functions';
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
  error: null,
};

const arrayThunks = [
  fetchCreateUser,
  fetchLogin,
  fetchUserLogout,
  fetchCurrentUser,
];

const authSliсe = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    arrayThunks.forEach(fetch => {
      builder
        .addCase(fetch.pending, handelPending)
        .addCase(fetch.rejected, (state, action) => {
          switch (fetch) {
            case fetchUserLogout:
            case fetchLogin:
            case fetchCreateUser:
              handelRejected(state, action);
              break;
            case fetchCurrentUser:
              rejectedCurrent(state, action);
              break;
            default:
              break;
          }
        })
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
