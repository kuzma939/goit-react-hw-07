
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../api';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <p>{name}: {number}</p>
          <button className={styles.listButton} onClick={() => dispatch(deleteContactThunk(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;