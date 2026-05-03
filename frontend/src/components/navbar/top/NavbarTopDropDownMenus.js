import React, { useContext } from 'react';
import NavbarDropdown from './NavbarDropdown';
import {
  appRoutes
} from 'routes/routes';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { flatRoutes } from 'helpers/utils';
import NavbarDropdownApp from './NavbarDropdownApp';
import AppContext from 'context/Context';

const NavbarTopDropDownMenus = () => {
  const {
    config: { navbarCollapsed, showBurgerMenu },
    setConfig
  } = useContext(AppContext);

  const handleDropdownItemClick = () => {
    if (navbarCollapsed) {
      setConfig('navbarCollapsed', !navbarCollapsed);
    }
    if (showBurgerMenu) {
      setConfig('showBurgerMenu', !showBurgerMenu);
    }
  };
  return (
    <>
      <NavbarDropdown title="app">
        <NavbarDropdownApp items={appRoutes.children} />
      </NavbarDropdown>
    </>
  );
};

export default NavbarTopDropDownMenus;
