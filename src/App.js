/*import PropTypes from 'prop-types';*/
import { Component } from 'react';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import Form from './Components/addForm';
import shortid from 'shortid';
import './Components/styles.css';

class App extends Component {
   state = {
      contacts: [],
      filter: '',
   };
   componentDidMount() {
      const contacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(contacts);
      if (parsedContacts) {
         this.setState({ contacts: parsedContacts });
      }
   }
   componentDidUpdate(prevProps, prevState) {
      if (this.state.contacts !== prevState.contacts) {
         localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      }
   }

   getfiltredContacts = () => {
      const normalizeFilter = this.state.filter.toLowerCase();
      return this.state.contacts.filter(contact =>
         contact.name.toLowerCase().includes(normalizeFilter),
      );
   };

   updateContacts = ({ name, number }) => {
      if (this.checkDuplicates(name)) {
         alert(`${name} уже в списке`);
         return;
      }
      const newContact = {
         name,
         number,
         id: shortid.generate(),
      };
      this.setState(prevState => ({
         contacts: [newContact, ...prevState.contacts],
      }));
   };

   checkDuplicates = name => {
      const currentContactsName = this.state.contacts.map(
         contact => contact.name,
      );
      return currentContactsName.includes(name);
   };

   changeFilter = e => {
      this.setState({ filter: e.currentTarget.value });
   };

   deleteContact = id => {
      this.setState(prevState => ({
         contacts: prevState.contacts.filter(contact => contact.id !== id),
      }));
   };

   render() {
      return (
         <div className="phonebook">
            <h1 className="phonebook__titel"> Phonebook</h1>
            <Form onSubmit={this.updateContacts} />
            <h2> Contacts List</h2>
            <Filter value={this.state.filter} onChange={this.changeFilter} />
            <ContactList
               ContactList={this.getfiltredContacts()}
               onClick={this.deleteContact}
            />
         </div>
      );
   }
}
export default App;
