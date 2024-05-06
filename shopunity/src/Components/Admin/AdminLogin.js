import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./Admin.css";
import { Link } from "react-router-dom";

function AdminLogin() {
  return (
    <div className="Admin_login text-center">
      <h5 className=" mt-5"> Admin Login</h5>
      <Container>
        <Row className="Admin_login_main">
          <Col></Col>

          <Col className=" Admin_login_form">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>

            <Link to="/customerhomepage" className="btn btn-dark mt-2">
              {" "}
              Login
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminLogin;
