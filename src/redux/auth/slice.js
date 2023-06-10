import { fetchCreateUser, fetchLogin, fetchLogout } from './operations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const arrayFetch = [fetchCreateUser, fetchLogin, fetchLogout];
const chooseFetch = type => arrayFetch.map(fetch => fetch[type]);

// const handelPending = state => (state.isLoading = true);

// const handelRejected = (state, { payload }) => {
//   state.error = payload;
//   state.isLoading = false;
// };

const handelFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const fulfilledCreate = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const fulfilledLogin = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};
const fulfilledLogout = state => {
  state.isLoggedIn = false;
};

const authSliсe = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // .addCase(isAnyOf(...chooseFetch('pending')), handelPending)
      // .addCase(isAnyOf(...chooseFetch('rejected')), handelRejected)
      .addCase(isAnyOf(...chooseFetch('fulfilled')), handelFulfilled)
      .addCase(fetchCreateUser.fulfilled, fulfilledCreate)
      .addCase(fetchLogout.fulfilled, fulfilledLogout)
      .addCase(fetchLogin.fulfilled, fulfilledLogin);
  },
});

export const authReducer = authSliсe.reducer;
