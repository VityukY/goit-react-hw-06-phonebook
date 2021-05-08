import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
/*import types from './action-types';*/
import complexContactsReducer from './reducer';
/*
const reducer = (
   state = {
      contacts: [
         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
   },

   { type, payload },
) => {
   switch (type) {
      case types.ADD:
         return {
            ...state,
            contacts: [...state.contacts, payload],
         };

      case types.DELETE:
         return {
            ...state,
            contacts: state.contacts.filter(contact => contact.id !== payload),
         };

      case types.CHANGE_FILTER:
         return {
            ...state,
            filter: payload,
         };
      default:
         return state;
   }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

*/

const rootReducer = combineReducers({
   phonebook: complexContactsReducer,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
