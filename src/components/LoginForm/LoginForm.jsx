import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchLogin } from 'redux/auth/operations';

const LoginForm = () => {
  const emailId = nanoid();
  const passwordId = nanoid();
  const dispatch = useDispatch();

  const submitLogin = e => {
    e.preventDefault();
    const form = e.target;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const login = { email, password };
    dispatch(fetchLogin(login));

    form.reset();
  };

  return (
    <FormControl>
      <form onSubmit={submitLogin}>
        <FormLabel htmlFor={emailId}>Email</FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="Enter email"
          id={emailId}
        />
        <FormLabel htmlFor={passwordId}>Password</FormLabel>
        <Input
          pr="4.5rem"
          type="password"
          name="password"
          placeholder="Enter password"
          id={passwordId}
        />
        <Button
          mt={4}
          colorScheme="teal"
          // isLoading={props.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </FormControl>
  );
};

export default LoginForm;
