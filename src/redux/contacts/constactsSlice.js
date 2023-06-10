// const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
// const {
//   fetchContacts,
//   addNewContact,
//   deleteContacts,
// } = require('./operations');

// const initialState = {
//   items: [],
//   isLoading: false,
//   error: '',
// };

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

// export const contactsReducer = contactsSlice.reducer;
