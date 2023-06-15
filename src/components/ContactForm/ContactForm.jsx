import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewContact } from 'redux/contacts/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = nanoid();
  const phoneId = nanoid();

  const submitContact = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      addNewContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
        id: nanoid(),
      })
    );
    form.reset();
  };

  return (
    <>
      <FormControl>
        <form onSubmit={submitContact}>
          <FormLabel htmlFor={nameId}>Name</FormLabel>
          <Input
            // _placeholder={{
            //   color: 'var(--chakra-colors-teal-500)',
            // }}
            placeholder="Enter name"
            id={nameId}
            type="text"
            name="name"
          />
          <FormLabel htmlFor={phoneId}>Phone</FormLabel>
          <Input
            type="tel"
            name="number"
            // _placeholder={{
            //   color: 'var(--chakra-colors-teal-500)',
            // }}
            placeholder="Enter phone"
            id={phoneId}
          />
          <Button
            mt={4}
            color="var(--chakra-colors-gray-50)"
            background="var(--chakra-colors-orange-300)"
            type="submit"
          >
            Add contact
          </Button>
        </form>
      </FormControl>
    </>
  );
};

export default ContactForm;
