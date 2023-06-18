import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreateUser } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';

import { object, string } from 'yup';

const schema = object().shape({
  name: string().required('*required'),
  email: string().email('Invalid email').required('*required'),
  password: string().min(8).required('*required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const submitRegistration = (value, { resetForm }) => {
    dispatch(
      fetchCreateUser({
        ...value,
      })
    );
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={submitRegistration}
        validationSchema={schema}
      >
        {props => (
          <Form>
            {error === 'error signup' && (
              <Box
                color=" red"
                textAlign=" center"
                boxShadow="base"
                rounded="md"
                borderRadius="15px"
                m="10px 0"
                p="5px 0"
              >
                You have entered an invalid email address or a user with this
                email address is already registered
              </Box>
            )}
            <Field name="name">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>User name</FormLabel>
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter name"
                    autoComplete="off"
                  />
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel>Email</FormLabel>
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Enter email"
                    autoComplete="off"
                  />
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel>Password</FormLabel>
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter password"
                    autoComplete="off"
                  />
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              type="submit"
              disabled={!props.isValid}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
