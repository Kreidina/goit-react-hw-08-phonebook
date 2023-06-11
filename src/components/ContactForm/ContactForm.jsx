import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import React from 'react';

const ContactForm = () => {
  const nameId = nanoid();
  const phoneId = nanoid();

  const submitContact = e => {
    e.preventDefault();
  };

  return (
    <>
      <FormControl>
        <form onSubmit={submitContact}>
          <FormLabel htmlFor={nameId}>Name</FormLabel>
          <Input placeholder="Enter name" id={nameId} type="text" name="name" />
          <FormLabel htmlFor={phoneId}>Phone</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Enter phone"
            id={phoneId}
          />
          <Button
            mt={4}
            colorScheme="teal"
            // isLoading={props.isSubmitting}
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
