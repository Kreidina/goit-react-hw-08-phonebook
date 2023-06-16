import { Box, Divider, Flex, Spacer } from '@chakra-ui/react';
import Navigator from 'components/Navigator';
import UserMenu from 'components/UserMenu';
import AutNav from 'components/AutNav';
import { useAuth } from 'hooks';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Navigator />
        </Box>
        <Spacer />
        {isLoggedIn ? <UserMenu /> : <AutNav />}
      </Flex>
      <Divider
        mb="10px"
        sx={{
          '@media screen and (max-width: 480px)': {
            mt: '10px',
          },
        }}
      />
    </>
  );
};

export default Header;
