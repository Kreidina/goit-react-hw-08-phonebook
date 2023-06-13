import { Flex } from '@chakra-ui/react';
import { useAuth } from 'hooks';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigator = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div style={{ listStyle: 'none' }}>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <NavLink size="md" to="/">
          <Flex minWidth="max-content" alignItems="center" gap="2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="30"
              version="1.0"
              viewBox="0 0 512 512"
            >
              <path d="M52 1.3c-4.7 1.5-10.3 7.4-11.8 12.3-1.7 5.9-1.8 478.8 0 484.6 1.5 5.2 7.4 11.1 12.4 12.6 3.2.9 42.3 1.2 171.1 1.2h166.9l5.2-2.6c3.9-1.9 5.9-3.8 8-7.2l2.7-4.7V415l-2.7-2.7c-4.1-4.1-10-3.9-13.9.5L387 416v76H130V20h257v312.2l2.9 2.9c4.7 4.6 12.1 3.6 15.4-2.1 1.5-2.5 1.7-6.7 1.7-33.8v-31.1l25.8-.3c22.3-.3 26.1-.5 28.9-2.1 4.4-2.3 7.2-5.4 9.4-10.2 1.7-3.6 1.9-6.8 1.9-31 0-15.8-.4-28.6-1.1-30.8-1.4-5.1-7.4-11.2-12.6-12.7l-4.3-1.3v-48.5l3.5-.6c4.5-.9 10.3-5.9 12.6-11.1 1.7-3.6 1.9-7.1 1.9-32 0-27.2-.1-28.2-2.2-32.5-3.1-6-8.1-9.7-14.7-11-3-.5-15.2-1-27.1-1h-21.8l-.4-14.3c-.3-13.4-.5-14.5-3-18.9-2.1-3.4-4.1-5.3-8-7.2L390.6 0 223.1.1C104.1.2 54.5.5 52 1.3zM110 256v236H59V20h51v236zM452.8 87.7l.2 24.3h-46V63l22.8.2 22.7.3.3 24.2zM435 156v24h-28v-48h28v24zm18 68v24h-46v-48h46v24z" />
              <path d="M228.1 76.5c-4.7 1.9-10.8 4.7-13.5 6.1-21.6 11.1-36 33.8-41.2 64.4-3.2 19.5-.5 49.4 6.3 69.7 13.5 40.3 39.4 73.6 70.3 90.2 13 6.9 24.7 10.3 38 10.8 13.9.6 20.6-.8 36.1-7.3 12.3-5.2 17.9-10.1 19.9-17.6 2-7.2.8-12.3-7.9-32.8-10.1-23.7-11.6-26.7-15-30.3-6.6-7.2-17.8-9.1-27.4-4.8-2.7 1.1-5.5 2.1-6.3 2.1-2.2 0-16.7-14.8-19.9-20.4-6.6-11.3-9.9-26-8.8-38.5l.6-6.3 5.3-2.4c11.1-4.9 16.8-12.7 16.8-22.9-.1-5.4-1.1-8.5-10.4-29.8-9.1-21.1-10.7-24.2-14.6-27.5-8-7.1-15.8-7.9-28.3-2.7zm24.7 38.5c6.4 14.7 9 22 8.4 22.9-.4.8-4 2.8-7.8 4.4-9.1 3.7-11.7 6.7-13.3 14.8-3 15-.8 36.6 5.2 50.1 5.9 13.2 17.3 26.9 30 35.9 9.3 6.5 10.7 6.7 20.8 2.5 5.5-2.3 8.9-3.1 9.9-2.6 2 1.1 19.4 42.4 18.7 44.3-.6 1.6-15.8 8.2-22.1 9.7-6.7 1.5-17.8 1.1-26-1-27-6.9-54.6-33.2-70.5-67.1-10.3-22.1-14.6-42.6-13.8-65.4.6-16.8 2.8-26.1 9.1-39 4.7-9.5 11.6-17.6 18.9-22.2 5.7-3.6 18.9-9.2 21.2-9 1.6.2 3.8 4.4 11.3 21.7zM178.9 356.9c-4 4-4 8.9 0 13.3l2.9 3.3h153.4l3-3.4c2.6-2.9 3-3.9 2.5-7.5-.4-2.7-1.5-4.9-3.2-6.3l-2.6-2.3H181.8l-2.9 2.9zM389.9 366.9c-4 4-4 8.9 0 13.3 2.4 2.7 3.6 3.3 6.9 3.3 5 0 8.9-3.3 9.8-8.1 1.7-9.3-9.9-15.3-16.7-8.5zM208.7 408.8c-5.9 6.2-2.2 15.4 6.6 16.7 2.3.3 23.5.5 47 .3l42.9-.3 2.9-3.3c4-4.4 4-9.3 0-13.3l-2.9-2.9h-93.8l-2.7 2.8z" />
            </svg>
            Home
          </Flex>
        </NavLink>
        {isLoggedIn && (
          <NavLink size="md" to="/contacts">
            Contacts
          </NavLink>
        )}
      </Flex>
    </div>
  );
};

export default Navigator;
