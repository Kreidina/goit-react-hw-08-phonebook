import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { fetchCreateUser } from 'redux/auth/operations';
// import { object, string } from 'yup';

// const schema = object({
//   name: string().required(),
//   email: string().email().required(),
//   password: string().min(8).required(),
// });
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8).required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();

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
        {() => (
          <Form>
            <Field name="name">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>User name</FormLabel>
                  <Input {...field} type="text" placeholder="Enter name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Email</FormLabel>
                  <Input {...field} type="email" placeholder="Enter email" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>

                  {/* <ErrorMessage name="email" component="div" /> */}
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter password"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>

                  {/* <ErrorMessage name="password" component="div" /> */}
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

export default RegisterForm;
