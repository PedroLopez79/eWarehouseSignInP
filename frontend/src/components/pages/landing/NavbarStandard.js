import classNames from 'classnames';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import handleNavbarTransparency from 'helpers/handleNavbarTransparency';
import NavbarTopDropDownMenus from 'components/navbar/top/NavbarTopDropDownMenus';
import LandingRightSideNavItem from './LandingRightSideNavItem';
import { topNavbarBreakpoint } from 'config';
import AppContext from 'context/Context';
import RlonesLogo from 'assets/img/logos/rljoneslogo.png'

const NavbarStandard = () => {
  const {
    config: { isDark }
  } = useContext(AppContext);
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleNavbarTransparency);
    return () => window.removeEventListener('scroll', handleNavbarTransparency);
  }, []);

  return (
    <Navbar
      variant={isDark ? 'light' : 'dark'}
      fixed="top"
      expand={topNavbarBreakpoint}
      className={classNames('navbar-standard navbar-theme', {
        'bg-100': !navbarCollapsed && isDark,
        'bg-dark': !navbarCollapsed && !isDark
      })}
    >
      <Container>
        <Navbar.Brand className="text-white dark__text-white" as={Link} to="/">
          <img src={RlonesLogo} />
        </Navbar.Brand>

        <Navbar.Toggle onClick={() => setNavbarCollapsed(!navbarCollapsed)} />
        <Navbar.Collapse className="scrollbar">
          <LandingRightSideNavItem />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarStandard;
