import React, { useContext, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CustomerNavbarTop from 'components/navbar/top/CustomerNavbarTop';
import NavbarVertical from 'components/navbar/vertical/NavbarVertical';
import CustomerNavbarVertical from 'components/navbar/vertical/CustomerNavbarVertical' ;
import AppContext from 'context/Context';
import Footer from 'components/footer/Footer';
import ProductProvider from 'components/app/e-commerce/ProductProvider';
import classNames from 'classnames';

const CustomerMainLayout = () => {
  const { hash, pathname } = useLocation();
  const isKanban = pathname.includes('kanban');
  // const isChat = pathname.includes('chat');

  const {
    config: { isFluid, navbarPosition }
  } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }
    }, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={isFluid ? 'container-fluid' : 'container'} >
      {(navbarPosition === 'vertical' || navbarPosition === 'combo') && (
        <CustomerNavbarVertical />
      )}
      <ProductProvider>
        <div className={classNames('content', { 'pb-0': isKanban })} style={{ marginLeft: 300 }} >
          <CustomerNavbarTop />
          {/*------ Main Routes ------*/}
          <Outlet />
          {!isKanban && <Footer />}
        </div>
      </ProductProvider>
    </div>
  );
};

export default CustomerMainLayout;
