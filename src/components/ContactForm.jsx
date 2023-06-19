import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from 'redux/contacts/operations';
import { Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import { selectContacts } from 'redux/contacts/selectors';

const schema = object().shape({
  name: string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Invalid name'
    )
    .required(),
  number: string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Invalid phone number'
    )
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const toast = useToast();

  const submitContact = (value, { resetForm }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === value.name.toLowerCase()
      )
    )
      return toast({
        title: 'Contact already exists',
        description: `contact with name: ${value.name} is already present in contacts`,
        status: 'info',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });

    if (
      contacts.some(
        contact => contact.number.toLowerCase() === value.number.toLowerCase()
      )
    )
      return toast({
        title: 'Contact already exists',
        description: `contact with number: ${value.number} is already present in contacts`,
        status: 'info',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    dispatch(
      addNewContact({
        ...value,
        id: nanoid(),
      })
    );
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={submitContact}
        validationSchema={schema}
      >
        {props => (
          <Form>
            <Field name="name">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Name</FormLabel>
                  <FormErrorMessage>{form.touched.name}</FormErrorMessage>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter name"
                    autoComplete="off"
                  />
                </FormControl>
              )}
            </Field>
            <Field name="number">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.number && form.touched.number}
                >
                  <FormLabel>Number</FormLabel>
                  <FormErrorMessage>{form.touched.number}</FormErrorMessage>
                  <Input
                    {...field}
                    type="tel"
                    placeholder="Enter phone"
                    autoComplete="off"
                  />
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              type="submit"
              sx={{
                '@media screen and (max-width: 480px)': {
                  h: 'var(--chakra-sizes-8)',
                },
              }}
              disabled={!props.isValid}
            >
              Add contact
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
