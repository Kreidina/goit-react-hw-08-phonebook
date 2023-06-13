import { Avatar, Button, Flex } from '@chakra-ui/react';
import { useAuth } from 'hooks';
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserLogout } from 'redux/auth/operations';

const UserMenu = () => {
  const { user } = useAuth();
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
        <Button
          colorScheme="teal"
          h="var(--chakra-sizes-7)"
          onClick={() => dispatch(fetchUserLogout())}
        >
          Log out
        </Button>
      </Flex>
    </div>
  );
};

export default UserMenu;
