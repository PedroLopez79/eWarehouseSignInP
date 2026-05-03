import React, { useContext } from 'react';
import CustomerNavbarDropdown from './CustomerNavbarDropdown';
import {
  customerRoutes,
  appRoutes,
} from 'routes/customerroutes';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { flatRoutes } from 'helpers/utils';
import CustomerNavbarDropdownApp from './CustomerNavbarDropdownApp';
//import NavbarDropdownPages from './NavbarDropdownPages';
//import NavbarDropdownModules from './NavbarDropdownModules';
import AppContext from 'context/Context';

const CustomerNavbarTopDropDownMenus = () => {
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
      <CustomerNavbarDropdown title="Customer Modules">
        {customerRoutes.children[0].children.map(route => (
          <Dropdown.Item
            key={route.name}
            as={Link}
            className={route.active ? 'link-600' : 'text-500'}
            to={route.to}
            onClick={handleDropdownItemClick}
          >
            {route.name}
          </Dropdown.Item>
        ))}
      </CustomerNavbarDropdown>

      <CustomerNavbarDropdown title="app">
        <CustomerNavbarDropdownApp items={appRoutes.children} />
      </CustomerNavbarDropdown>
    </>
  );
};

export default CustomerNavbarTopDropDownMenus;
