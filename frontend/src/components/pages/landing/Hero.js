import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bg1 from 'assets/img/generic/bg-1.jpg';
import dashboardDark from 'assets/img/generic/dashboard-alt-dark.png';
import dashboard from 'assets/img/generic/dashboard-alt.png';
import Section from 'components/common/Section';
import AppContext from 'context/Context';
import React, { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const {
    config: { isDark, isRTL }
  } = useContext(AppContext);

  return (
    <Section
      className="py-0 overflow-hidden light"
      image={bg1}
      position="center bottom"
      overlay
    >
      <Row className="justify-content-center align-items-center pt-8 pt-lg-10 pb-lg-9 pb-xl-0">
        <Col
          md={11}
          lg={8}
          xl={4}
          className="pb-7 pb-xl-9 text-center text-xl-start"
        >
          <h1 style={{ fontSize: "18px" }} className="text-white fw-light">
            Enables{' '}
            <span className="fw-bold">
              <Typewriter
                words={['Customer Orders Continuity', 'Fluit WorkFlow', 'User Friendly', 'Reports']}
                loop={false}
                cursor={!isRTL ? true : false}
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1000}
              />
            </span>
            <br />
            to your Warehouse
          </h1>
          <p style={{ fontSize: "18px" }} className="lead text-white opacity-75">
            eWarehouse will make administration fluid, keeps track of your
            Inventory, it also makes posbible custom conectivitie.
          </p>
          
        </Col>
        <Col
          xl={{ span: 7, offset: 1 }}
          className="align-self-start mt-5 mt-xl-0"
        >
          <Link to="/" className="img-landing-banner">
            <img
              className="img-fluid"
              src={isDark ? dashboardDark : dashboard}
              alt=""
            />
          </Link>
        </Col>
      </Row>
    </Section>
  );
};

export default Hero;
