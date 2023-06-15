const { createSlice } = require('@reduxjs/toolkit');
const {
  fetchContacts,
  addNewContact,
  deleteContacts,
} = require('./operations');

const initialState = {
  items: [],
  isLoading: false,
  error: '',
};

const arrayThunks = [fetchContacts, addNewContact, deleteContacts];

const handelPending = state => {
  state.isLoading = true;
};

const handelRejected = state => {
  state.isLoading = false;
};

const fulfilledFetch = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = '';
};
const fulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
  state.error = '';
};

const fulfilledDelete = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.items = state.items.filter(item => item.id !== payload.id);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    arrayThunks.forEach(thunk => {
      builder
        .addCase(thunk.pending, handelPending)
        .addCase(thunk.rejected, handelRejected)
        .addCase(thunk.fulfilled, (state, { payload }) => {
          switch (thunk) {
            case fetchContacts:
              fulfilledFetch(state, { payload });
              break;
            case addNewContact:
              fulfilledAdd(state, { payload });
              break;
            case deleteContacts:
              fulfilledDelete(state, { payload });
              break;
            default:
              break;
          }
        });
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
