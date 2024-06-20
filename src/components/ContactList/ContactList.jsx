import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import styles from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';
const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  //const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  return (
    <>
     <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.item}>
          {contact.name}: {contact.phone}
          <button onClick={() => dispatch(deleteContact(contact.id))} className={styles.listButton}>Delete</button>
        </li>
      ))}
    </ul>
    </>
  );
};

export default ContactList;