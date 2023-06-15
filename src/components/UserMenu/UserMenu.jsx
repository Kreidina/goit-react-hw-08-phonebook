import { Avatar, Button } from '@chakra-ui/react';
import { useAuth } from 'hooks';
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserLogout } from 'redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <>
      <div className={css.userMenu}>
        {/* <Flex minWidth="max-content" alignItems="center" gap="2"> */}
        <div className={css.welcome}>
          <Avatar
            w="30px"
            h="30px"
            mr="2px"
            name={user.name}
            src="https://bit.ly/broken-link"
          />
          <p
            style={{
              fontFamily: 'Courgette, cursive',
            }}
          >
            Welcome, {user.name}
          </p>
        </div>
        <Button
          colorScheme="teal"
          h="var(--chakra-sizes-7)"
          ml="10px"
          onClick={() => dispatch(fetchUserLogout())}
        >
          Log out
        </Button>
      </div>
      {/* </Flex> */}
    </>
  );
};

export default UserMenu;
