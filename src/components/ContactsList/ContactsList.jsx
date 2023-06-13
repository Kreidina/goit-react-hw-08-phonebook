import { Text } from '@chakra-ui/react';
import css from './ContactsList.module.css';
import Filter from 'components/Filter/Filter';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import { useContacts } from 'hooks';

const ContactsList = () => {
  const { contacts } = useContacts();

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
