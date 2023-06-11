import { Text } from '@chakra-ui/react';
import css from './ContactsList.module.css';
import Filter from 'components/Filter/Filter';

const ContactsList = () => {
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
      {/* {visibleContacts.length !== 0 ? ( */}
      <ul className={css.contactList}>
        {/* {visibleContacts.map(({ name, phone, id }) => { */}
        {/* return <ContactItem name={name} number={phone} key={id} id={id} />; */}
        {/* })} */}
      </ul>
      {/* ) : ( */}
      {/* !isLoading && (
        <p className={css.message}>There is no contact with that name</p>
      ) */}
      {/* )} */}
    </>
  );
};
export default ContactsList;
