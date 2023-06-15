import { Button, ButtonGroup, Text } from '@chakra-ui/react';
import css from './HomePages.module.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

const HomePages = () => {
  const { isLoggedIn } = useAuth();
  return (
    <section className={css.hero}>
      {/* <div className={css.homeContainer}> */}
      <div className={css.content}>
        <Text
          className={css.title}
          fontSize="7xl"
          ml="10px"
          textShadow="1px 2px #319795"
          color="#d6d5d0"
        >
          phonebook
        </Text>
        {!isLoggedIn && (
          <ButtonGroup
            className={css.buttonGroup}
            gap="2"
            display=" block"
            maxWidth=" 200px"
            margin=" auto"
          >
            <NavLink to="/register">
              <Button colorScheme="teal" className={css.button}>
                Sign Up
              </Button>
            </NavLink>
            <NavLink to="/login">
              <Button colorScheme="teal" className={css.button}>
                Log in
              </Button>
            </NavLink>
          </ButtonGroup>
        )}
      </div>
      {/* </div> */}
    </section>
  );
};

export default HomePages;
