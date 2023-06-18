import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';

import { object, string } from 'yup';

const schema = object().shape({
  email: string().email('Invalid email').required('*Required'),
  password: string().min(8).required('*Required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
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
      <Formik
        initialValues={initialValues}
        onSubmit={submitLogin}
        validationSchema={schema}
      >
        {props => (
          <Form>
            {error === 'error login' && (
              <Box
                color=" red"
                textAlign=" center"
                boxShadow="base"
                rounded="md"
                borderRadius="15px"
                m="10px 0"
                p="5px 0"
              >
                Your Email or Password is invalid
              </Box>
            )}
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
                  <FormErrorMessage>{form.touched.password}</FormErrorMessage>
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

export default LoginForm;
