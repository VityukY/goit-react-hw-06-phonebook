import types from './action-types';

const addContact = value => ({
   type: types.ADD,
   payload: value,
});
const deleteContact = value => ({
   type: types.DELETE,
   payload: value,
});
const changeFilter = value => ({
   type: types.CHANGE_FILTER,
   payload: value,
});

const action = { addContact, deleteContact, changeFilter };
export default action;
