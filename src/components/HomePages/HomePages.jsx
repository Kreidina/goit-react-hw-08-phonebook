import { Button, ButtonGroup, Text } from '@chakra-ui/react';
import css from './HomePages.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectisLoggedIn } from 'redux/auth/selectors';

const HomePages = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  return (
    <section className={css.hero}>
      {/* <div className={css.homeContainer}> */}
      <div className={css.content}>
        <Text
          fontSize="7xl"
          ml="10px"
          textShadow="1px 2px #319795"
          color="#d6d5d0"
        >
          phonebook
        </Text>
        {!isLoggedIn && (
          <ButtonGroup gap="2" ml=" 108">
            <NavLink to="/register">
              <Button colorScheme="teal">Sign Up</Button>
            </NavLink>
            <NavLink to="/login">
              <Button colorScheme="teal">Log in</Button>
            </NavLink>
          </ButtonGroup>
        )}
      </div>
      {/* </div> */}
    </section>
  );
};

export default HomePages;
