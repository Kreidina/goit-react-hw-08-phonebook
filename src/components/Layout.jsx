import Header from 'components/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth, useContacts } from 'hooks';
import Loader from 'components/Loader';

const Layout = () => {
  const { isAuthLoading } = useAuth();
  const { isContactsLoading } = useContacts();
  const shouldLoading = isAuthLoading || isContactsLoading;

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        {shouldLoading && <Loader />}
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
