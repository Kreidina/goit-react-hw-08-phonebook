import ContactForm from 'components/ContactForm';
import ContactsList from 'components/ContactsList';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <ContactForm />
      <ContactsList />
    </>
  );
};

export default Contacts;
