import { Button, ButtonGroup, Text } from '@chakra-ui/react';
import css from './HomePages.module.css';
import { NavLink } from 'react-router-dom';

const HomePages = () => {
  return (
    <div className={css.homeContainer}>
      <div className={css.content}>
        <Text fontSize="5xl" ml="10px">
          Contact Navigator
        </Text>
        <ButtonGroup gap="2">
          <NavLink to="/register">
            <Button colorScheme="teal">Sign Up</Button>
          </NavLink>
          <NavLink to="/login">
            <Button colorScheme="teal">Log in</Button>
          </NavLink>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default HomePages;
