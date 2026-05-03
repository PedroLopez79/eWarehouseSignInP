import React from 'react';
import { Card } from 'react-bootstrap';
import Background from 'components/common/Background';
import corner1 from 'assets/img/illustrations/corner-1.png';
import { Row, Col, Button } from 'react-bootstrap';
import bg2 from 'assets/img/generic/location.png';
import Section from 'components/common/Section';

const Cta = () => (
  <Section overlay image={bg2} position="left top" className="light bg-dark">
    <Row className="justify-content-left text-left">
      <Col lg={2}>
        <p className="fs-2 fs-sm-2 text-white">
          Locations.
        </p>

        <br></br>

        <Card style={{height:'3rem'}} className="p-0 shadow-none">
        <Background image={corner1} className="p-card bg-card" />
        <Card.Body className="position-relative">
          <h5 style={{ fontSize: "15px" }} className="text-warning">Tecate, CA</h5>
        </Card.Body>
        </Card>

        <br></br>
        <Card style={{height:'3rem'}} className="p-0 shadow-none">
        <Background image={corner1} className="p-card bg-card" />
        <Card.Body className="position-relative">
          <h5 style={{ fontSize: "15px" }} className="text-warning">San Luis, AZ</h5>
        </Card.Body>
        </Card>

        <br></br>
        <Card style={{height:'3rem'}} className="p-0 shadow-none">
        <Background image={corner1} className="p-card bg-card" />
        <Card.Body className="position-relative">
          <h5 style={{ fontSize: "15px" }} className="text-warning">Santa Teresa, NM</h5>
        </Card.Body>
        </Card>
      </Col>

      <Col lg={2}>
        <br></br>
        <br></br>
        <br></br>
        <Card style={{height:'3rem'}} className="p-0 shadow-none">
        <Background image={corner1} className="p-card bg-card" />
        <Card.Body className="position-relative">
          <h5 style={{ fontSize: "15px" }} className="text-warning">El Paso, TX</h5>
        </Card.Body>
        </Card>

        <br></br>
        <Card style={{height:'4rem'}} className="p-0 shadow-none">
        <Background image={corner1} className="p-card bg-card" />
        <Card.Body className="position-relative">
          <h5 style={{ fontSize: "15px" }} className="text-warning">San Diego/Otay Mesa, CA</h5>
        </Card.Body>
        </Card>
      </Col>

      <Col lg={2}>
      <br></br><br></br><br></br>
        <Card style={{height:'3rem'}} className="p-0 shadow-none">
        <Background image={corner1} className="p-card bg-card" />
        <Card.Body className="position-relative">
          <h5 style={{ fontSize: "15px" }} className="text-warning">Calexico, CA</h5>
        </Card.Body>
        </Card>

        <br></br>
        <Card style={{height:'3rem'}} className="p-0 shadow-none">
        <Background image={corner1} className="p-card bg-card" />
        <Card.Body className="position-relative">
          <h5 style={{ fontSize: "15px" }} className="text-warning">Nogalez, AZ</h5>
        </Card.Body>
        </Card>

        <br></br>
        <Button
          variant="outline-light"
          size="lg"
          className="border-2 rounded-pill mt-4 fs-0 py-2"
        >
          interactive map
        </Button>
      </Col>

    </Row>
  </Section>
);

export default Cta;
