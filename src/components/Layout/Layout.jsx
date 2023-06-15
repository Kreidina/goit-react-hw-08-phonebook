import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Spinner } from '@chakra-ui/react';
import { useAuth } from 'hooks';

const Layout = () => {
  const { isAuthLoading } = useAuth();

  return (
    <>
      <header className={css.headerContainer}>
        <Header />
      </header>
      <main className={css.mainContainer} style={{ width: '100%' }}>
        {isAuthLoading && (
          <div className={css.loaderContainer}>
            <Spinner
              className={css.loader}
              thickness="4px"
              speed="1s"
              emptyColor="gray.200"
              size="xl"
              // m="auto"
              // display=" block"
              borderWidth=" 9px"
              color="var(--chakra-colors-teal-500)"
            />
          </div>
        )}
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
