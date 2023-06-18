export const handelPending = state => {
  state.isLoading = true;
};

export const handelRejected = state => {
  state.isLoading = false;
};

export const fulfilledFetch = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
};
export const fulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
};

export const fulfilledDelete = (state, { payload }) => {
  state.isLoading = false;
  state.items = state.items.filter(item => item.id !== payload.id);
};
