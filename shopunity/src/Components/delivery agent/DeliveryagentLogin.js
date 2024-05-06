import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';                       

function DeliveryagentLogin() {
  return (
    <div className='delivery_login'>
    <h5 className='text-center mt-5'>Delivery Agent Login</h5>
    <Container>
    <Row className="delivery_login_main">
      <Col>
       
      </Col>

      <Col className=" delivery_login_form">
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
        <Link to="#" className="forgotpassword" style={{float:"right"}} >forgot password</Link>

        <Link to="/deliveryagenthome" className="btn btn-dark mt-5"> Login</Link>

      </Col>
      <label className='text-center'>not a member? <Link to={'/deliveryagentregistration'}>Sign up now</Link></label>

    </Row>
  </Container>
    </div>
  )
}

export default DeliveryagentLogin
