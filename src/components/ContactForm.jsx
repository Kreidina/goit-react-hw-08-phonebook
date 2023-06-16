import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addNewContact } from 'redux/contacts/operations';
import { Field, Form, Formik } from 'formik';

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
      <Formik initialValues={initialValues} onSubmit={submitContact}>
        {props => (
          <Form>
            <Field
              name="name"

              // validate={validateName}
            >
              {({ field, form }) => (
                <FormControl
                // isInvalid={form.errors.name && form.touched.name}
                >
                  <FormLabel>Name</FormLabel>
                  <Input {...field} type="text" placeholder="Enter name" />
                  {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
                </FormControl>
              )}
            </Field>
            <Field
              name="number"
              // validate={validateName}
            >
              {({ field }) => (
                <FormControl>
                  <FormLabel>Number</FormLabel>
                  <Input {...field} type="tel" placeholder="Enter phone" />
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
