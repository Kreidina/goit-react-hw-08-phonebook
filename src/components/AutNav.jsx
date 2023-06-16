import { Button, ButtonGroup } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const AutNav = () => {
  return (
    <>
      <ButtonGroup gap="2">
        <NavLink to="/register">
          <Button h="var(--chakra-sizes-7)" colorScheme="teal">
            Sign Up
          </Button>
        </NavLink>
        <NavLink to="/login">
          <Button h="var(--chakra-sizes-7)" colorScheme="teal">
            Log in
          </Button>
        </NavLink>
      </ButtonGroup>
    </>
  );
};

export default AutNav;
