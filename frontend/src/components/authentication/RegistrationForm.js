import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import api from 'api';
import Divider from 'components/common/Divider';
import SocialAuthButtons from './SocialAuthButtons';

const RegistrationForm = ({ hasLabel, route, method }) => {
  // State
  const [formData, setFormData] = useState({
    userid: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAccepted: false
  });

    const navigate = useNavigate()

  // Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      var userid = formData.userid
      var password = formData.password
      var email = formData.email

        const res = await api.post(route, {userid, password, email})
        
        if (method === "login") {
            localStorage.setItem(ACCES_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate("/")
        } else {
          toast.success(`Successfully registered as ${formData.userid}`, {
                theme: 'colored'
              });

            navigate("/")
            }
          }
    catch(error){
        alert(error)
    }
    finally {
        //setLoading(false)
    }
  };

  const handleFieldChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Name</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'UserID' : ''}
          value={formData.userid}
          name="userid"
          onChange={handleFieldChange}
          type="text"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Email address</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Email address' : ''}
          value={formData.email}
          name="email"
          onChange={handleFieldChange}
          type="text"
        />
      </Form.Group>

      <Row className="g-2 mb-3">
        <Form.Group as={Col} sm={6}>
          {hasLabel && <Form.Label>Password</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? 'Password' : ''}
            value={formData.password}
            name="password"
            onChange={handleFieldChange}
            type="password"
          />
        </Form.Group>
        <Form.Group as={Col} sm={6}>
          {hasLabel && <Form.Label>Confirm Password</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? 'Confirm Password' : ''}
            value={formData.confirmPassword}
            name="confirmPassword"
            onChange={handleFieldChange}
            type="password"
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Check type="checkbox" id="acceptCheckbox" className="form-check">
          <Form.Check.Input
            type="checkbox"
            name="isAccepted"
            checked={formData.isAccepted}
            onChange={e =>
              setFormData({
                ...formData,
                isAccepted: e.target.checked
              })
            }
          />
          <Form.Check.Label className="form-label">
            I accept the <Link to="#!">terms</Link> and{' '}
            <Link to="#!">privacy policy</Link>
          </Form.Check.Label>
        </Form.Check>
      </Form.Group>

      <Form.Group className="mb-4">
        <Button
          className="w-100"
          type="submit"
          disabled={
            !formData.userid ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword ||
            !formData.isAccepted
          }
        >
          Register
        </Button>
      </Form.Group>
    </Form>
  );
};

RegistrationForm.propTypes = {
  hasLabel: PropTypes.bool
};

export default RegistrationForm;
