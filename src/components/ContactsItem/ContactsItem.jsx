import { useDispatch } from 'react-redux';
import css from './ContactsItem.module.css';
import { deleteContacts } from 'redux/contacts/operations';

const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.contactItem}>
      <span>
        {name}: {number}
      </span>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => dispatch(deleteContacts(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactsItem;
