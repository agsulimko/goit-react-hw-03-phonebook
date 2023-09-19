//  export handleDelete from '../ContactList/ContactList'
import css from './Contact.module.css'
const Contact = ({ contacts, deleteContacts }) => {
    return (
        <li className={css.item}>
            
            <h3>{contacts.name}</h3>
                <h3>{contacts.number}</h3>
            
            <button
                type='button'
                className={css.btnClose}
                aria-label='Close'
                onClick={() => deleteContacts(contacts.id)}
            >Delete</button>
        </li>)
}
export default Contact;




