import React from 'react';
import './resgister.css'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import {
  InputGroup,
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
} from "react-bootstrap";
import { Link } from 'react-router-dom';

function Register() {
  return (
    <Container>
    <Row className="vh-100 d-flex justify-content-center align-items-center">
      <Col md={10} lg={8} xs={12}>
        <Card>
          <Card.Body>
            <div className="mb-3 mt-4">
              <h2 className="fw-bold mb-2">Signup</h2>
              <p className=" mb-5">Please enter your details to join us!</p>
              <Form>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formFullName"
                  >
                    <Form.Label className="text-center">
                      Your full name
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formPhoneNumber"
                  >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter phone number"
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formUsername"
                  >
                    <Form.Label className="text-center">
                      Email address
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="email"
                        placeholder="Enter username"
                      />
                      
                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Row>
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Sign Up
                  </Button>
                </div>
              </Form>
              <div className="mt-3">
                <p className="mb-0  text-center">
                  Already have an account?{" "}
                 <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>

  );
}

export default Register;