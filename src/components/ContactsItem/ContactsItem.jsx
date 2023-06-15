import { useDispatch } from 'react-redux';
import css from './ContactsItem.module.css';
import { deleteContacts } from 'redux/contacts/operations';
import { ListIcon, ListItem } from '@chakra-ui/react';

const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <ListIcon
        // as={MdCheckCircle}
        color="green.500"
      />
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
    </ListItem>
  );
};

export default ContactsItem;

// <ListItem>
//   <ListIcon as={MdCheckCircle} color="green.500" />
//   Assumenda, quia temporibus eveniet a libero incidunt suscipit
// </ListItem>
// <ListItem>
//   <ListIcon as={MdCheckCircle} color="green.500" />
//   Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
// </ListItem>
// {/* You can also use custom icons from react-icons */}
// <ListItem>
//   <ListIcon as={MdSettings} color="green.500" />
//   Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
// </ListItem>
