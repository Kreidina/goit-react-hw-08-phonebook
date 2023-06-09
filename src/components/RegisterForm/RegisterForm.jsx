import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

const RegisterForm = () => {
  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();
  return (
    <>
      <FormControl>
        <FormLabel htmlFor={nameId}>User name</FormLabel>
        <Input placeholder="User name" id={nameId} />
        <FormLabel htmlFor={emailId}>Email</FormLabel>
        <Input type="email" placeholder="Enter email" id={emailId} />
        <FormLabel htmlFor={passwordId}>Password</FormLabel>
        <Input
          pr="4.5rem"
          type="password"
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
      </FormControl>
    </>
  );
};

export default RegisterForm;
