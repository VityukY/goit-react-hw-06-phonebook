import { combineReducers } from 'redux';
import types from './action-types';

const contactsReducer = (
   state = {
      contacts: [
         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
   },

   { type, payload },
) => {
   switch (type) {
      case types.ADD:
         return {
            contacts: [...state.contacts, payload],
         };

      case types.DELETE:
         return {
            contacts: state.contacts.filter(contact => contact.id !== payload),
         };

      default:
         return state;
   }
};

const filterReducer = (state = { filter: '' }, { type, payload }) => {
   switch (type) {
      case types.CHANGE_FILTER:
         return {
            filter: payload,
         };
      default:
         return state;
   }
};

const complexContactsReducer = combineReducers({
   contacts: contactsReducer,
   filter: filterReducer,
});

export default complexContactsReducer;
