import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import { RegistretedRoute } from './RegistretedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Box } from '@chakra-ui/react';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Box w="95%" maxWidth="800px" h="100%" m="auto">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/login"
              element={
                <RegistretedRoute component={Login} redirectTo="/contacts" />
              }
            />
            <Route
              path="/register"
              element={
                <RegistretedRoute component={Register} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            />
          </Route>
        </Routes>
      </Box>
    </>
  );
};
