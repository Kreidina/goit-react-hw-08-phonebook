import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addNewContact } from 'redux/contacts/operations';
import { Field, Form, Formik } from 'formik';
import { object, string } from 'yup';

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

  const submitContact = (value, { resetForm }) => {
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
