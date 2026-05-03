import Divider from 'components/common/Divider';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { ACCES_TOKEN, REFRESH_TOKEN } from "../../constants"
import SocialAuthButtons from './SocialAuthButtons';
import api from 'api';

const LoginForm = ({ hasLabel, layout, route, method }) => {
  //login 

  const [formData, setFormData] = useState({
    userid: '',
    password: '',
    remember: false
  });
  
  const[loading, setLoading] = useState(false)
  const[usertype, setusertype] = useState(false);
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate()
  const name = method === "login" ? "Login" : "Register"

  const getUserType = () => {
    var userid = formData.userid
    api
        .get(`/api/Controls/${userid}/`)
        .then((res) => res.data)
        .then((data) => { setusertype(data); console.log(data) })
        .catch((err) => alert(err))
};

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
        var userid = formData.userid
        var password = formData.password
        const res = await api.post(route, {userid, password})
        
        if (method === "login") 
        {
            localStorage.setItem(ACCES_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

            /*CONSULTAR QUE TIPO DE CLIENTE ES*/
            getUserType()

            const data = await api.get(`/api/Controls/${userid}/`)

            if (data.data[0].groupname === "Customer") {
              navigate("/_Customer")
            }
            else
            {
              navigate("/_Manager")
            }
            /**********************************/
        } else {
            navigate("/login")
        }
    }
    catch(error){
        alert(error)
    }
    finally {
        setLoading(false)
    }
  }
  
  // State

  // Handler
  /*const handleSubmit = e => {
    e.preventDefault();
    toast.success(`Logged in as ${formData.email}`, {
      theme: 'colored'
    });
  };*/

  const handleFieldChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Email address</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'User ID' : ''}
          value={formData.userid}
          name="userid"
          onChange={handleFieldChange}
          type="text"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Password</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Password' : ''}
          value={formData.password}
          name="password"
          onChange={handleFieldChange}
          type="password"
        />
      </Form.Group>

      <Row className="justify-content-between align-items-center">
        <Col xs="auto">
          <Form.Check type="checkbox" id="rememberMe" className="mb-0">
            <Form.Check.Input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={e =>
                setFormData({
                  ...formData,
                  remember: e.target.checked
                })
              }
            />
            <Form.Check.Label className="mb-0 text-700">
              Remember me
            </Form.Check.Label>
          </Form.Check>
        </Col>

        <Col xs="auto">
          <Link
            className="fs--1 mb-0"
            to={`/authentication/${layout}/forgot-password`}
          >
            Forgot Password?
          </Link>
        </Col>
      </Row>

      <Form.Group>
        <Button
          type="submit"
          color="primary"
          className="mt-3 w-100"
          disabled={!formData.userid || !formData.password}
        >
          Log in
        </Button>
      </Form.Group>
    </Form>
  );
};

LoginForm.propTypes = {
  layout: PropTypes.string,
  hasLabel: PropTypes.bool
};

LoginForm.defaultProps = {
  layout: 'simple',
  hasLabel: false
};

export default LoginForm;
