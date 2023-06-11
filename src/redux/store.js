import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/constactsSlice';
import { filterReduser } from './contacts/filterSlise';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReduser,
  },
});
