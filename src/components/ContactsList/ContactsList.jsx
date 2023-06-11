import { Text } from '@chakra-ui/react';
import css from './ContactsList.module.css';
import Filter from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import ContactsItem from 'components/ContactsItem/ContactsItem';

const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      <Text
        fontSize="5xl"
        textAlign="center"
        // ml="10px"
        // textShadow="1px 2px #319795"
        // color="#d6d5d0"
      >
        Contacts
      </Text>
      <Filter />
      {contacts.length !== 0 && (
        <ul className={css.contactList}>
          {contacts.map(({ name, number, id }) => {
            return (
              <ContactsItem name={name} number={number} key={id} id={id} />
            );
          })}
        </ul>
      )}
    </>
  );
};
export default ContactsList;
