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

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = '';
    },
    [fetchContacts.rejected](state) {
      state.isLoading = false;
    },

    ///////////////////
    [addNewContact.pending](state) {
      state.isLoading = true;
    },
    [addNewContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items.push(action.payload);
      state.error = '';
    },
    [addNewContact.rejected](state) {
      state.isLoading = false;
    },

    ///////////////////
    [deleteContacts.pending](state) {
      state.isLoading = true;
    },
    [deleteContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items.filter(item => item.id !== payload.id);
      state.error = '';
    },
    [deleteContacts.rejected](state) {
      state.isLoading = false;
    },
  },
});

// const arrayThunks = [fetchContacts, addNewContact, deleteContacts];
// const chooseType = type => arrayThunks.map(thunk => thunk[type]);

// const handelPending = state => {
//   state.isLoading = true;
// };

// const handelRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

// const handlFulfilled = state => {
//   state.isLoading = false;
//   state.error = '';
// };

// const fulfilledFetch = (state, { payload }) => {
//   state.items = payload;
// };

// const fulfilledAdd = (state, { payload }) => {
//   state.items.push(payload);
// };

// const fulfilledDelete = (state, { payload }) => {
//   state.items.filter(item => item.id !== payload.id);
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.fulfilled, fulfilledFetch)
//       .addCase(addNewContact.fulfilled, fulfilledAdd)
//       .addCase(deleteContacts.fulfilled, fulfilledDelete)
//       .addCase(isAnyOf(...chooseType('pending'), handelPending))
//       .addCase(isAnyOf(...chooseType('fulfilled'), handlFulfilled))
//       .addCase(isAnyOf(...chooseType('rejected'), handelRejected));
//   },
// });

export const contactsReducer = contactsSlice.reducer;
