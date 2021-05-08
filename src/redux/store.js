import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist'; //store.file.js
import storage from 'redux-persist/lib/storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import complexContactsReducer from './reducer';

const middleware = [
   ...getDefaultMiddleware({
      serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
   }),
];

const contactsPersistConfig = {
   key: 'contacts',
   storage,
   blacklist: ['filter'],
};

export const store = configureStore({
   reducer: {
      phonebook: persistReducer(contactsPersistConfig, complexContactsReducer),
   },
   middleware,
   devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
