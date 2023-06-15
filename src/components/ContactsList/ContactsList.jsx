import {
  Avatar,
  Button,

  List,

  ListItem,
  Text,
} from '@chakra-ui/react';

import Filter from 'components/Filter/Filter';
// import ContactsItem from 'components/ContactsItem/ContactsItem';
import { useContacts } from 'hooks';
import { useDispatch,  } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';


const ContactsList = () => {
  const { contacts } = useContacts();
  const dispatch = useDispatch();

  return (
    <>
      <Text
        fontSize="3xl"
        textAlign="center"
        // ml="10px"
        // textShadow="1px 2px #319795"
        // color="#d6d5d0"
      >
        Contacts
      </Text>
      <Filter />
      {contacts.length !== 0 && (
        <List spacing={3}>
          {contacts.map(({ name, number, id }) => {
            return (
              <ListItem
                key={id}
                display="flex"
                alignItems="center"
                justifyContent=" space-between"
              >
                <Avatar
                  w="30px"
                  h="30px"
                  name={name}
                  src="https://bit.ly/broken-link"
                />

                <Text
                  fontSize="xl"
                  // textAlign="center"
                  // ml="10px"
                  // textShadow="1px 2px #319795"
                  // color="#d6d5d0"
                >
                  {name}: {number}
                </Text>
                <Button
                  // mt={4}
                  color="var(--chakra-colors-orange-600)"
                  height="var(--chakra-sizes-6)"
                  type="button"
                  onClick={() => dispatch(deleteContacts(id))}
                >
                  Delete
                </Button>
              </ListItem>
              // </Flex>
              // <ContactsItem name={name} number={number} key={id} id={id} />
            );
          })}
        </List>
      )}
    </>
  );
};
export default ContactsList;
