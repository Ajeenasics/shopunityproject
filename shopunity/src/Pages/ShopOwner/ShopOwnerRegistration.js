import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./shopowner.css";
import { useNavigate } from "react-router-dom";
function ShopOwnerRegistration() {
  const navigate = useNavigate();
  const registerHandled = () => {
    navigate("/shopownerlogin");
  };
  return (
    <div className="shop_register">
      <h5 className="text-center mt-5"> Shop Owner Register</h5>
      <Container>
        <Row className="shop_register_main">
          

          <Col className="shop_register_form">
            <FloatingLabel
              controlId="floatingInput"
              label="Shop Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com"  />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Shop owner name " className="mb-3" >
              <Form.Control type="text" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Contact"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email Address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Conform Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Shop Address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <button onClick={registerHandled} className="btn btn-dark mt-5">
              {" "}
              Register
            </button>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShopOwnerRegistration;
