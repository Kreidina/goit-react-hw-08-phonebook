import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { fetchCreateUser } from 'redux/auth/operations';

const RegisterForm = () => {
  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);

  const submitRegistration = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const newUsers = { name, email, password };
    dispatch(fetchCreateUser(newUsers));
    form.reset();
  };

  return (
    <>
      <FormControl>
        <form onSubmit={submitRegistration}>
          <FormLabel htmlFor={nameId}>User name</FormLabel>
          <Input
            _placeholder={{
              color: 'var(--chakra-colors-teal-500)',
            }}
            placeholder="Enter name"
            id={nameId}
            type="text"
            name="name"
          />
          <FormLabel htmlFor={emailId}>Email</FormLabel>
          <Input
            type="email"
            name="email"
            _placeholder={{
              color: 'var(--chakra-colors-teal-500)',
            }}
            placeholder="Enter email"
            id={emailId}
          />
          <FormLabel htmlFor={passwordId}>Password</FormLabel>
          <Input
            pr="4.5rem"
            type="password"
            name="password"
            _placeholder={{
              color: 'var(--chakra-colors-teal-500)',
            }}
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
    </>
  );
};

export default RegisterForm;
