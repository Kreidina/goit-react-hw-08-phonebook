import css from './ContactsItem.module.css';
const ContactsItem = () => {
  return (
    <li className={css.contactItem}>
      <span>{/* {name}: {number} */}</span>
      <button
        className={css.deleteBtn}
        type="button"
        // onClick={() => dispatch(deleteContacts(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactsItem;
