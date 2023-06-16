import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const RegistretedRoute = ({
  component: Component,
  redirectTo = '/',
}) => {
  console.log(Component, 'com');
  console.log(redirectTo, 'red');

  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
