import {Component} from 'react';
import css from './App.module.css'
// import  App  from 'components/App';

  import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
//  import contacts from './contacts.json';
import ContactList from './ContactList/ContactList'
 import Filter from 'components/Filter/Filter';

 import initialContacts from './contacts.json';      
         
      
        
class App extends Component {

  state = {
    contacts: initialContacts,
  //  contacts: initialContacts,
    filter: '',
    name: '',
    number: ''
  };
 
  
    createContacts = (dataForm) => {
		const isAlreadyExist = this.state.contacts.find(
			(el) => el.name === dataForm.name
		)
		if (isAlreadyExist) return alert('Already Exist')

		const newContact = {
			...dataForm,
			id: nanoid(),
		}
		this.setState((prev) => ({
			contacts: [newContact, ...prev.contacts],
		}))
	}
 




  
   handleFilter = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  deleteContacts = (id) => {
         	this.setState((prev) => ({
        		contacts: prev.contacts.filter(el => el.id !== id),
        	}))
         }

  render() {
    console.log(this.state.contacts);
    const { contacts, filter } = this.state;

 const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (

      <div className='container'>
  <h1 className={css.h1}>Phonebook</h1>
        <ContactForm createContacts={this.createContacts}/> 
       

  <h2 className={css.h2}>Contacts</h2>
          <Filter handleFilter ={this.handleFilter} />     
        
        <ContactList contacts={this.state.contacts}
         deleteContacts={this.deleteContacts}
            filteredContacts={filteredContacts}
        />

  
</div>


    )
  }
};
  
export default App;

    
  
 
  

 


    
    
    
  


  //  <form onSubmit={this.handleSubmit}>
  //         <label>
  //           Name
  //           <input
  //             type="text"
  //             name="name"
  //             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  //             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //             required
  //              value={this.state.name}
  //             onChange={this.handleInputChange}
  //           />
  //         </label>
  //         <label>
  //           Number
  //           <input
  //             type="tel"
  //             name="number"
  //             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  //             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //             required
  //              value={this.state.number}
  //             onChange={this.handleInputChange}
  //           />
  //         </label>
  //         <button type="button" onClick={this.handleAddContact}>
  //           Add contact
  //         </button>
  //       </form>