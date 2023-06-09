import {
  // Avatar,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Spacer,
} from '@chakra-ui/react';
// import css from './Header.module.css';
// import Navigator from 'components/Navigator/Navigator';
// import UserMenu from 'components/UserMenu/UserMenu';
// import AutNav from 'components/AutNav/AutNav';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="2" p="10px">
        <Box p="2">
          {/* <SkipNavLink>Skip to content</SkipNavLink> */}
          <div style={{ listStyle: 'none' }}>
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <NavLink size="md" to="/">
                Home
              </NavLink>

              {/* Umova */}

              {/* <NavLink size="md" to="/contacts">
                Contacts
              </NavLink> */}
            </Flex>
          </div>
        </Box>
        <Spacer />
        {/*///////////////////////////// <AutNav /> */}

        <ButtonGroup gap="2">
          <NavLink to="/register">
            <Button colorScheme="teal">Sign Up</Button>
          </NavLink>
          <NavLink to="/login">
            <Button colorScheme="teal">Log in</Button>
          </NavLink>
        </ButtonGroup>

        {/* //////////////////////////<UserMenu /> */}
        {/* <div>
          <Flex minWidth="max-content" alignItems="center" gap="2">
            <Avatar name="kav" src="https://bit.ly/broken-link" /> */}
        {/* <Avatar bg="teal.500" /> */}
        {/* <p>Welcome 'userName'</p>
            <NavLink to="/">
              <Button colorScheme="teal">Log out</Button>
            </NavLink>
          </Flex>
        </div> */}
      </Flex>
      <Divider mb="10px" />
    </>
  );
};

export default Header;
