import { Box, Divider, Flex, Spacer } from '@chakra-ui/react';
// import css from './Header.module.css';
import Navigator from 'components/Navigator/Navigator';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import AutNav from 'components/AutNav/AutNav';
import { selectisLoggedIn } from 'redux/auth/selectors';

const Header = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);

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
