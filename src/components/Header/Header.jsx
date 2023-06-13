import { Box, Divider, Flex, Spacer } from '@chakra-ui/react';
// import css from './Header.module.css';
import Navigator from 'components/Navigator/Navigator';
import UserMenu from 'components/UserMenu/UserMenu';
import AutNav from 'components/AutNav/AutNav';
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
      <Divider mb="10px" />
    </>
  );
};

export default Header;
