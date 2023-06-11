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
};

const authSliсe = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [fetchCreateUser.pending](state) {
      state.isLoading = true;
    },
    [fetchCreateUser.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [fetchCreateUser.rejected](state) {
      state.isLoading = false;
    },
    //////////////////////
    [fetchLogin.pending](state) {
      state.isLoading = true;
    },
    [fetchLogin.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [fetchLogin.rejected](state) {
      state.isLoading = false;
    },
    ///////////////////////////
    [fetchUserLogout.pending](state) {
      state.isLoading = true;
    },
    [fetchUserLogout.fulfilled](state) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = {};
      state.token = '';
    },
    [fetchUserLogout.rejected](state) {
      state.isLoading = false;
    },

    //////////////////
    [fetchCurrentUser.pending](state) {
      state.isLoading = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    [fetchCurrentUser.rejected](state) {
      state.isLoading = false;
    },
  },
});

export const authReducer = authSliсe.reducer;
// const arrayFetch = [fetchCreateUser, fetchLogin, fetchLogout];
// const chooseFetch = type => arrayFetch.map(fetch => fetch[type]);

// const handelPending = state => (state.isLoading = true);

// const handelRejected = state => (state.isLoading = false);

// const handelFulfilled = state => {
//
// };

// const fulfilledCreate = (state, { payload }) => {
//   state.isLoading = false;

//   state.user = payload.user;
//   state.token = payload.token;
//   state.isLoggedIn = true;
// };

// const fulfilledLogin = (state, { payload }) => {
//   state.isLoading = false;

//   state.user = payload.user;
//   state.token = payload.token;
//   state.isLoggedIn = true;
// };

// const fulfilledLogout = state => {
//   state.isLoading = false;
//   state.isLoggedIn = false;
// };

// extraReducers: builder => {
//   builder
//     .addCase(fetchCreateUser.pending, handelPending)
//     .addCase(fetchCreateUser.fulfilled, fulfilledCreate)
//     // .addCase(fetchCreateUser.rejected, handelRejected)

//     .addCase(fetchLogin.pending, handelPending)
//     .addCase(fetchLogin.fulfilled, fulfilledLogin)
//     // .addCase(fetchLogin.rejected, handelRejected);

//     .addCase(fetchLogout.pending, handelPending)
//     .addCase(fetchLogout.fulfilled, fulfilledLogout);
//   // .addCase(fetchLogout.rejected, handelRejected);

//   // .addCase(isAnyOf(...chooseFetch('pending')), handelPending)
//   // .addCase(isAnyOf(...chooseFetch('rejected')), handelRejected)
//   // .addCase(isAnyOf(...chooseFetch('fulfilled')), handelFulfilled)
// },
