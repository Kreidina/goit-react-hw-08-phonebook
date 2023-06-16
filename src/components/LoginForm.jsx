import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchLogin } from 'redux/auth/operations';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const submitLogin = (value, { resetForm }) => {
    dispatch(
      fetchLogin({
        ...value,
      })
    );
    resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={submitLogin}>
        {props => (
          <Form>
            <Field name="email">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input {...field} type="email" placeholder="Enter email" />
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter password"
                  />
                </FormControl>
              )}
            </Field>
            <Button mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
