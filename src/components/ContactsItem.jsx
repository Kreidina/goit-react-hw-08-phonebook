import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import {
  Avatar,
  Button,
  ListItem,
  Tag,
  TagLabel,
  Text,
} from '@chakra-ui/react';

const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <ListItem
      key={id}
      display="flex"
      alignItems="center"
      sx={{
        '@media screen and (max-width: 480px)': {
          fontSize: 'var(--chakra-fontSizes-md)',
        },
      }}
    >
      <Tag size="lg" colorScheme="green" borderRadius="full">
        <Avatar
          w="30px"
          h="30px"
          mr="10px"
          name={name}
          src="https://bit.ly/broken-link"
          sx={{
            '@media screen and (max-width: 480px)': {
              w: '25px',
              h: '25px',
            },
          }}
        />
        <TagLabel>{name}:</TagLabel>
      </Tag>
      <Text ml="10px">{number}</Text>{' '}
      <Button
        color="var(--chakra-colors-teal-500)"
        height="var(--chakra-sizes-6)"
        ml="auto"
        type="button"
        onClick={() => dispatch(deleteContacts(id))}
      >
        Delete
      </Button>
    </ListItem>
  );
};

export default ContactsItem;
