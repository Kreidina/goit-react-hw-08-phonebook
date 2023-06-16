import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { fetchUserLogout } from 'redux/auth/operations';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        sx={{
          '@media screen and (max-width: 480px)': {
            display: 'block',
          },
        }}
      >
        <Box display="flex" alignItems="center" m="4px 0 8px">
          <Avatar
            w="30px"
            h="30px"
            mr="2px"
            name={user.name}
            src="https://bit.ly/broken-link"
          />
          <Text fontFamily="Courgette, cursive">Welcome, {user.name}</Text>
        </Box>
        <Button
          colorScheme="teal"
          h="var(--chakra-sizes-7)"
          ml="10px"
          onClick={() => dispatch(fetchUserLogout())}
        >
          Log out
        </Button>
      </Flex>
    </>
  );
};

export default UserMenu;
