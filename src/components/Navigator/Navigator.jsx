import React from 'react';
import { NavLink } from 'react-router-dom';
// import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

const Navigator = () => {
  return (
    <div>
      {/* <SkipNavLink>Skip to content</SkipNavLink> */}
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {/* Umova */}
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigator;
