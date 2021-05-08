import { connect } from 'react-redux';
import * as action from '../redux/actions';

const ContactList = ({ contacts, filter, deleteContact }) => {
   const getfiltredContacts = () => {
      const normalizeFilter = filter.toLowerCase();
      return contacts.filter(contact =>
         contact.name.toLowerCase().includes(normalizeFilter),
      );
   };
   return (
      <ul className="phonebook__list">
         {getfiltredContacts().map(contact => (
            <li key={contact.id} className="pnonebook__listItem">
               <p>
                  {contact.name} : {contact.number}
               </p>
               <button type="button" onClick={() => deleteContact(contact.id)}>
                  Delete contact
               </button>
            </li>
         ))}
      </ul>
   );
};

const mapStateToProps = state => {
   return {
      contacts: state.phonebook.contacts,
      filter: state.phonebook.filter,
   };
};

const mapDispatchToProps = dispatch => {
   return {
      deleteContact: id => dispatch(action.deleteContact(id)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
