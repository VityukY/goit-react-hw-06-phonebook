import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import Form from './Components/addForm';
import './Components/styles.css';

const App = () => {
   return (
      <div className="phonebook">
         <h1 className="phonebook__titel"> Phonebook</h1>
         <Form />
         <h2> Contacts List</h2>
         <Filter />
         <ContactList />
      </div>
   );
};

export default App;
