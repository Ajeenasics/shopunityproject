import React, { useState } from "react";
import "./wholesale.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import validator from "validator";

function WholesaleDealerRegistration() {
  const [wholesaleDealerRegister, setWholeSaleDealerRegister] = useState({
    companyname: "",
    lisenceno: "",
    email: "",
    password: "",
    conformpassword: "",
    address: "",
  });
  const WholeSaledealerChange = (e) => {
    console.log(e.target.value);
    setWholeSaleDealerRegister({
      ...wholesaleDealerRegister,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const registerHandled = (e) => {
    e.preventDefault();
    //  if (!validator.isByteLength(wholesaleDealerRegister.lisenceno, {
    //       min: 6,
    //       max: 6
    //     })) {
    //       alert("invalid Lisence number");
    //     } else if (!validator.isStrongPassword(wholesaleDealerRegister.password)) {
    //       alert("password should have mininum 8 charecters including  1 Uppercase letter,1 lowercase letter, a number and special charecter ");
    //     } else {
    navigate("/wholesaledealerlogin");
    // };
  };
  console.log(wholesaleDealerRegister);

  return (
    <div className="Wholesale_dealer_register p-5">
      <h5 className="text-center mt-5">Wholesale dealer register</h5>
      <Container>
        <Row className="wholesale_dealer_register_main">
          <Col className=" wholesale_dealer_register_form">
            <FloatingLabel
              controlId="floatingInput"
              label="Company Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="mm"
                required
                onChange={WholeSaledealerChange}
                name="companyname"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="whole sale lisense number"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="cs"
                required
                onChange={WholeSaledealerChange}
                name="lisenceno"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="sdc"
                required
                onChange={WholeSaledealerChange}
                name="email"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={WholeSaledealerChange}
                name="password"
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Conform Password"
              className="mb-3"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={WholeSaledealerChange}
                required
                name="conformpassword"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={WholeSaledealerChange}
                name="address"
                required
              />
            </FloatingLabel>
            <button onClick={registerHandled} className="btn btn-dark mt-2">
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

export default WholesaleDealerRegistration;
