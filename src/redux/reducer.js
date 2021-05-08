import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const contactsReducer = createReducer([], {
   [actions.addContact]: (state, { payload }) => [...state, payload],
   [actions.deleteContact]: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
});
const filterReducer = createReducer('', {
   [actions.changeFilter]: (_, { payload }) => payload,
});

const complexContactsReducer = combineReducers({
   contacts: contactsReducer,
   filter: filterReducer,
});

export default complexContactsReducer;
