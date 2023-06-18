import { createSlice } from '@reduxjs/toolkit';
import {
  fulfilledAdd,
  fulfilledDelete,
  fulfilledFetch,
  handelPending,
  handelRejected,
} from './functions';
import { addNewContact, deleteContacts, fetchContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
};

const arrayThunks = [fetchContacts, addNewContact, deleteContacts];

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
