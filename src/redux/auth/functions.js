export const handelPending = state => {
  state.isLoading = true;
};

export const rejectedCurrent = state => {
  state.isLoading = false;
};
export const handelRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handelFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.error = null;
};

export const fulfilledLogout = state => {
  state.isLoading = false;
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.user = {};
  state.token = '';
  state.error = null;
};

export const fulfilledCurrent = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = true;
  state.user = payload;
  state.error = null;
};
