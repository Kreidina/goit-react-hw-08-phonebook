import { Avatar, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchUserLogout } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Avatar
          w="30px"
          h="30px"
          name={user.name}
          src="https://bit.ly/broken-link"
        />
        <p>Welcome, {user.name}</p>
        <NavLink to="/">
          <Button
            colorScheme="teal"
            h="var(--chakra-sizes-7)"
            onClick={() => dispatch(fetchUserLogout())}
          >
            Log out
          </Button>
        </NavLink>
      </Flex>
    </div>
  );
};

export default UserMenu;
