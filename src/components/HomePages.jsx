import { Box, Button, ButtonGroup, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

const HomePages = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box
      position="relative"
      h="500px"
      backgroundColor="rgba(109, 132, 58, 0.1)"
      maxWidth=" 800px"
      backgroundSize="contain"
      m=" auto"
      backgroundImage='url("https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=410&q=80")'
      backgroundPosition="center"
      sx={{
        '@media screen and (max-width: 480px)': {
          backgroundSize: 'auto',
        },
      }}
    >
      <Box
        position=" absolute"
        left="22%"
        bottom="5%"
        sx={{
          '@media screen and (min-width: 481px)': {
            left: '30%',
          },
          '@media screen and (min-width: 769px)': {
            left: '45%',
          },
        }}
      >
        <Text
          fontSize="4xl"
          textShadow="1px 2px #319795"
          color="#d6d5d0"
          sx={{
            '@media screen and (min-width: 481px)': {
              fontSize: '6xl',
            },
            '@media screen and (min-width: 769px)': {
              fontSize: '7xl',
              ml: '10px',
            },
          }}
        >
          phonebook
        </Text>
        {!isLoggedIn && (
          <ButtonGroup
            gap="2"
            display=" block"
            maxWidth=" 200px"
            margin=" auto"
          >
            <NavLink to="/register">
              <Button
                colorScheme="teal"
                sx={{
                  '@media screen and (max-width: 480px)': {
                    height: 'var(--chakra-sizes-6)',
                  },
                }}
              >
                Sign Up
              </Button>
            </NavLink>
            <NavLink to="/login">
              <Button
                colorScheme="teal"
                sx={{
                  '@media screen and (max-width: 480px)': {
                    height: 'var(--chakra-sizes-6)',
                  },
                }}
              >
                Log in
              </Button>
            </NavLink>
          </ButtonGroup>
        )}
      </Box>
    </Box>
  );
};

export default HomePages;
