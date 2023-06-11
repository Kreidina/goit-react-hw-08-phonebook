import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './contacts/constactsSlice';
import { filterReduser } from './contacts/filterSlise';
import { authReducer } from './auth/slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReduser,
  },
});

export const persistor = persistStore(store);
