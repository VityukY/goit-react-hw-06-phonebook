import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';

const reducer = (state = { initialValue: 0 }, action) => {
   switch (action.type) {
      case 'type1':
         return { initialValue: state.initialValue + -1 };

      case 'type2':
         return { initialValue: state.initialValue + -1 };

      default:
         return state;
   }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

export default store;
