
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/filterSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <div className={styles.filter}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={(e) => dispatch(selectFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Filter;
