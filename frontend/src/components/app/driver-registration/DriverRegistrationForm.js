import React, { useState, useRef, useEffect } from 'react';
import { Card, Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faCloudUploadAlt
} from '@fortawesome/free-solid-svg-icons';
import Greetings from 'components/dashboards/crm/greetings/Greetings';
import api from 'api';
 
const initialFormState = {
  signIn: '',
  firstName: '',
  lastName: '',
  phone: '',
  carrier: 'INKLINE INC',
  trailerNum: '',
  equipment: 'TRAILER',
  customer: '',
  delivery: false,
  normal: false,
  pickup: false,
  express: false,
  transload: false,
  drop: false,
  pcs: '',
  uom: 'BAGS',
  dock: 'WHSE 4 DOCK 11*',
  loadingNum: '',
  notes: '',
  driverStatus: 'DOCS RECEIVED',
  driver2FirstName: '',
  driver2LastName: '',
  carrier2: 'INKLINE INC',
  dock2: '',
  waitingDoorTime: '',
  printTaskRequest: false,
  selectPrinter: 'PDF',
  identificacionValidada: false
};
 
const DriverRegistrationForm = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
 
  const [formData, setFormData] = useState(initialFormState);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [now, setNow] = useState(new Date());

  const [dsiTypes, setDsiTypes] = useState([]);
  // Load DSI types (VwDSI_types) from the Django API on mount
  useEffect(() => {
    api
      .get('/api/dsi-types/')
      .then(res => setDsiTypes
        (res.data))
      .catch(err => console.error(err));
  }, []);

  const [dsiCarrier, setDsiCarrier] = useState([]);
  // Load DSI Carriers (tblCarriers) from Django API 
  useEffect(() => {
    api
      .get('/api/dsi-carrier/')
      .then(res => setDsiCarrier(res.data))
      .catch(err => console.error(err));
  }, []);
 
  // Live clock, mirrors the time badge in the bottom-left of the reference form
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
 
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
 
  const handleCheck = e => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
 
  const handlePhotoClick = () => fileInputRef.current?.click();
 
  const handlePhotoChange = e => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  };
 
  const handleSignIn = () => {
    // TODO: wire up to your API / submit handler
    console.log('Driver Registration submit:', formData, photoPreview);
  };
 
  const handleBack = () => navigate(-1);
 
  return (
    <>
      <Greetings />
      <Card className="mb-3">
        <Card.Body>
        <Row className="g-4">
          {/* -------- Left column: main form -------- */}
          <Col lg={8}>
            <h5 className="text-primary fst-italic fw-bold mb-3">
              Driver Registration Form
            </h5>
 
            <Form>
              <Form.Group as={Row} className="mb-2 align-items-center">
                <Form.Label column sm={2} className="fw-bold text-primary">
                  SIGN IN
                </Form.Label>
                <Col sm={10}>
                  <Form.Select
                    name="signIn"
                    value={formData.signIn}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    {dsiTypes.map(item => (
                      <option key={item.dsi_id_type} value={item.dsi_id_type}>
                        {item.dsi_type}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
              </Form.Group>
 
              <Form.Group as={Row} className="mb-2 align-items-center">
                <Form.Label column sm={2} className="fw-bold text-primary">
                  DRIVER <FontAwesomeIcon icon={faSearch} className="ms-1" />
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Col>
                <Col sm={4}>
                  <Form.Control
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Col>
                <Col sm={2}>
                  <Form.Control
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
 
              <Form.Group as={Row} className="mb-2 align-items-center">
                <Form.Label column sm={2} className="fw-bold text-primary">
                  CARRIER
                </Form.Label>
                <Col sm={10}>
                  <Form.Select
                    name="carrier"
                    value={formData.carrier}
                    onChange={handleChange}
                  >
                    {dsiCarrier.map(item => (
                      <option key={item.dsi_carrierid} value={item.dsi_companyname}>
                        {item.dsi_companyname}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
              </Form.Group>
 
              <Form.Group as={Row} className="mb-2 align-items-center">
                <Form.Label column sm={2} className="fw-bold text-primary">
                  Trailer Num
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    name="trailerNum"
                    value={formData.trailerNum}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
 
              <Form.Group as={Row} className="mb-2 align-items-center">
                <Form.Label column sm={2} className="fw-bold bg-light px-2 py-1 rounded">
                  Equipment
                </Form.Label>
                <Col sm={10}>
                  <Form.Select
                    name="equipment"
                    value={formData.equipment}
                    onChange={handleChange}
                  >
                    <option>TRAILER</option>
                    <option>VAN</option>
                    <option>BOBTAIL</option>
                    <option>FLAT-BET</option>
                    <option>CONTAINER</option>
                  </Form.Select>
                </Col>
              </Form.Group>
 
              <Form.Group as={Row} className="mb-3 align-items-center">
                <Form.Label column sm={2} className="fw-bold text-primary">
                  CUSTOMER
                </Form.Label>
                <Col sm={10}>
                  <Form.Select
                    name="customer"
                    value={formData.customer}
                    onChange={handleChange}
                  >
                    <option value="">Select customer</option>
                  </Form.Select>
                </Col>
              </Form.Group>
 
              {/* Checkbox grid: 3 rows x 2 columns */}
              <Row className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Row>
                    <Col xs={6}>
                      <Form.Check
                        type="checkbox"
                        label="DELIVERY"
                        name="delivery"
                        checked={formData.delivery}
                        onChange={handleCheck}
                      />
                      <Form.Check
                        type="checkbox"
                        label="PICKUP"
                        name="pickup"
                        checked={formData.pickup}
                        onChange={handleCheck}
                      />
                      <Form.Check
                        type="checkbox"
                        label="TRANSLOAD"
                        name="transload"
                        checked={formData.transload}
                        onChange={handleCheck}
                      />
                    </Col>
                    <Col xs={6}>
                      <Form.Check
                        type="checkbox"
                        label="NORMAL"
                        name="normal"
                        checked={formData.normal}
                        onChange={handleCheck}
                      />
                      <Form.Check
                        type="checkbox"
                        label="EXPRESS"
                        name="express"
                        checked={formData.express}
                        onChange={handleCheck}
                      />
                      <Form.Check
                        type="checkbox"
                        label="DROP"
                        name="drop"
                        checked={formData.drop}
                        onChange={handleCheck}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
 
              <Row className="mb-2">
                <Col sm={2} className="fw-bold text-primary d-flex align-items-center">
                  PCS
                </Col>
                <Col sm={3}>
                  <Form.Control
                    name="pcs"
                    value={formData.pcs}
                    onChange={handleChange}
                  />
                </Col>
                <Col sm={1} className="fw-bold text-primary d-flex align-items-center">
                  UOM
                </Col>
                <Col sm={3}>
                  <Form.Select
                    name="uom"
                    value={formData.uom}
                    onChange={handleChange}
                  >
                    <option>BAGS</option>
                    <option>PALLETS</option>
                    <option>BOXES</option>
                  </Form.Select>
                </Col>
              </Row>
 
              <Row className="mb-3">
                <Col sm={2} className="fw-bold text-primary d-flex align-items-center">
                  DOCK #
                </Col>
                <Col sm={4}>
                  <Form.Select
                    name="dock"
                    value={formData.dock}
                    onChange={handleChange}
                  >
                    <option>WHSE 4 DOCK 11*</option>
                    <option>WHSE 4 DOCK 12</option>
                    <option>WHSE 4 DOCK 13</option>
                  </Form.Select>
                </Col>
                <Col sm={2} className="fw-bold text-primary d-flex align-items-center">
                  LOADING #
                </Col>
                <Col sm={4}>
                  <Form.Control
                    name="loadingNum"
                    value={formData.loadingNum}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
 
              <Row className="mb-3">
                <Col sm={6}>
                  <Form.Label className="fw-bold text-primary">
                    NOTES
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                  />
                </Col>
                <Col sm={6}>
                  <Form.Label className="fw-bold text-primary">
                    DRIVER STATUS
                  </Form.Label>
                  <Form.Select
                    name="driverStatus"
                    value={formData.driverStatus}
                    onChange={handleChange}
                  >
                    <option>DOCS RECEIVED</option>
                    <option>CHECKED IN</option>
                    <option>AT DOCK</option>
                    <option>COMPLETED</option>
                  </Form.Select>
                </Col>
              </Row>
 
              {/* Driver 2 / secondary section */}
              <div className="p-3 mb-3 rounded" style={{ backgroundColor: '#fdf6d8' }}>
                <Row className="mb-2 align-items-center">
                  <Col sm={2} className="fw-bold" style={{ color: '#b08d00' }}>
                    DRIVER 2
                  </Col>
                  <Col sm={5}>
                    <Form.Label className="mb-1 small text-muted">
                      First Name
                    </Form.Label>
                    <Form.Control
                      name="driver2FirstName"
                      value={formData.driver2FirstName}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm={5}>
                    <Form.Label className="mb-1 small text-muted">
                      Last Name
                    </Form.Label>
                    <Form.Control
                      name="driver2LastName"
                      value={formData.driver2LastName}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row className="mb-2 align-items-center">
                  <Col sm={2} className="fw-bold" style={{ color: '#b08d00' }}>
                    CARRIER 2
                  </Col>
                  <Col sm={10}>
                    <Form.Select
                      name="carrier2"
                      value={formData.carrier2}
                      onChange={handleChange}
                    >
                      <option>INKLINE INC</option>
                      <option>OTHER CARRIER 1</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Col sm={2} className="fw-bold" style={{ color: '#b08d00' }}>
                    DOCK 2
                  </Col>
                  <Col sm={5}>
                    <Form.Select
                      name="dock2"
                      value={formData.dock2}
                      onChange={handleChange}
                    >
                      <option value="">Select dock</option>
                      <option>WHSE 4 DOCK 11</option>
                      <option>WHSE 4 DOCK 12</option>
                    </Form.Select>
                  </Col>
                  <Col sm={5}>
                    <InputGroup>
                      <InputGroup.Text className="small text-muted">
                        Waiting Door Time
                      </InputGroup.Text>
                      <Form.Control
                        name="waitingDoorTime"
                        value={formData.waitingDoorTime}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </div>
 
              {/* Bottom action bar */}
              <Row className="align-items-center gx-3">
                <Col xs="auto">
                  <div
                    className="px-3 py-2 rounded fw-bold text-white"
                    style={{ backgroundColor: '#0a1f4d', minWidth: 110, textAlign: 'center' }}
                  >
                    {now.toLocaleTimeString()}
                  </div>
                </Col>
                <Col xs="auto">
                  <Form.Check
                    type="checkbox"
                    label="Print Task Request"
                    name="printTaskRequest"
                    checked={formData.printTaskRequest}
                    onChange={handleCheck}
                  />
                </Col>
                <Col />
                <Col xs="auto">
                  <Button variant="outline-secondary" onClick={handleBack}>
                    Back
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button variant="primary" onClick={handleSignIn}>
                    Sign In.
                  </Button>
                </Col>
              </Row>
 
              <Row className="mt-3 align-items-center">
                <Col sm={2} className="fw-bold text-primary">
                  SELECT PRINTER
                </Col>
                <Col sm={4}>
                  <Form.Select
                    name="selectPrinter"
                    value={formData.selectPrinter}
                    onChange={handleChange}
                  >
                    <option>PDF</option>
                    <option>Zebra ZT410</option>
                    <option>Default Printer</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form>
          </Col>
 
          {/* -------- Right column: photo -------- */}
          <Col lg={4}>
            <Form.Label className="fst-italic fw-bold text-primary">
              Foto
            </Form.Label>
            <div
              className="position-relative rounded d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: '#6c757d',
                minHeight: 300,
                backgroundImage: photoPreview ? `url(${photoPreview})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="d-none"
                onChange={handlePhotoChange}
              />
              <Button
                variant="light"
                className="position-absolute rounded-circle shadow"
                style={{ bottom: 10, right: 10, width: 44, height: 44 }}
                onClick={handlePhotoClick}
              >
                <FontAwesomeIcon icon={faCloudUploadAlt} className="text-primary" />
              </Button>
            </div>
 
            <Form.Check
              className="mt-3"
              type="checkbox"
              label="Identificacion Validada"
              name="identificacionValidada"
              checked={formData.identificacionValidada}
              onChange={handleCheck}
            />
          </Col>
        </Row>
        </Card.Body>
      </Card>
    </>
  );
};
 
export default DriverRegistrationForm;