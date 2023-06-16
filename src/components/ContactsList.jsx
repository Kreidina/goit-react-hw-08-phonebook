import { List, Text } from '@chakra-ui/react';
import ContactsItem from 'components/ContactsItem';
import Filter from 'components/Filter';
import { useContacts } from 'hooks';

const ContactsList = () => {
  const { contacts } = useContacts();

  return (
    <>
      <Text fontSize="3xl" textAlign="center">
        Contacts
      </Text>
      <Filter />
      {contacts.length !== 0 && (
        <List spacing={3}>
          {contacts.map(({ name, number, id }) => {
            return (
              <ContactsItem name={name} number={number} key={id} id={id} />
            );
          })}
        </List>
      )}
    </>
  );
};
export default ContactsList;
