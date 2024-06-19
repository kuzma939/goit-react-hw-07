import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contactsOps';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
 //const filter = useSelector((state) => state.filters.name);
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  //const filteredContacts = contacts.filter(contact =>
  //  contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.item}>
            {name}: {number}
            <button onClick={() => dispatch(deleteContact(id))} className={styles.button}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;