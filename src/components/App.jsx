import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import { RegistretedRoute } from './RegistretedRoute';
import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  // const { isRefreshing } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {/* {!isRefreshing && ( */}
      <div className="general-contain">
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
              element={<PrivateRoute component={Contacts} redirectTo="/" />}
            />
          </Route>
        </Routes>
      </div>
      {/* )} */}
    </>
  );
};
