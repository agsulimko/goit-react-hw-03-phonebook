import { Component } from 'react';
import css from'./ContactForm.module.css'

const INITIAL_STATE = {
    //  contacts: [],
    //  filter: '',
    id:'',
    name: '',
    number: '',
    //  isValid: true,
}
       
    

class ContactForm extends Component {
  
    state = INITIAL_STATE
 
  


    handleInputChange = ({ target: { value, name } }) => {
        this.setState({
            [name]: value.trim()
        });
       console.log(name);
        console.log(value);
        //  console.log(this.state);
        // console.log(e.target);
        // console.log(e.target.name);
        // console.log(e.target.value);   
    };
   
         
    handleSubmit = (e) => {
        e.preventDefault()
        //  if (!this.state.name || !this.state.number)
        //      return this.setState({ isValid: false })
           this.props.createContacts(this.state)
          this.setState(INITIAL_STATE)
        console.log(e);
        console.log(this.state);

         this.reset();
    }


    Contact = (filterQuery) => {
        this.setState((prev) => ({
            filteredTodo: prev.contacts.filter((el) =>
                el.name.toLowerCase().includes(filterQuery.toLowerCase())
            ),
        }))
    };



    // Clear the input fields after processing
        
    
    reset = () => {

        this.setState({
            name: '',
            number: '',
            filter: '',

        });
    };
    
    render() {
        // console.log(this.state);
        return (
            
            <form className={css.form } onSubmit={this.handleSubmit}>
                {/* <label htmlFor={nanoid()}> */}
                <label className={css.label} >
                    Name
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name" 
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        className={css.input}
                        // className={`form-control ${!this.state.isValid && 'is-invalid'}`}
                        // id={nanoid()}
                        // id={nanoid()}
                    />
                </label >
                <label className={css.label}>
                    {/* <label htmlFor={nanoid()}></label> */}
                    Number
                    <input
                        type="tel"
                        name="number"
                        placeholder="Enter number XXX-XX-XX"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleInputChange}
                        className={css.input}
                    />
                </label >
                <button className={css.btnAdd} type="submit" onClick={this.handleAddContact}>
                    Add contact
                </button>
            </form>
               
          
            
        );
    };

}
 


export default ContactForm;























