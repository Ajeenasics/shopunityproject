import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./shopowner.css";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../APIS/axiosinstatnce";

function ShopOwnerLogin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const Navigate = useNavigate();

  const formValidating = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required`;
    }

    if (fieldName === "Email" && !value.endsWith("@gmail.com")) {
      return "Email must be a valid Gmail address";
    }

    if (fieldName === "Password") {
      const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
      if (!passwordRegex.test(value)) {
        return "Password must contain at least one number, one special character, and one capital letter";
      }
    }

    return "";
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    errors.email = formValidating("Email", data.email);
    errors.password = formValidating("Password", data.password);
    setErrors(errors);

    if (!errors.email && !errors.password) {
      axiosInstance
        .post("/shopowner_login", data)
        .then((result) => {
          alert(result.data.message);
          localStorage.setItem("shopowner",result.data.id)
          localStorage.setItem("shopownertoken",result.data.token)
          Navigate("/shopownerhome")
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  };

  return (
    <div className="shop_login">
      <h5 className="text-center mt-5 pt-5 text-light">Shop owner Login</h5>
      <Container>
        <Row className="shop_login_main">
          <div className="container">
            <div
              className=""
              style={{
                margin: "1% 30%",
                boxShadow: " rgba(0, 0, 0, 0.84) 0px 3px 8px",
                borderRadius: "16px",
              }}
            >
              <form onSubmit={handleSubmit} className="p-3" st>
                <div className="mb-3">
                  <label className="text-light" htmlFor="form-controler-email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-input"
                    id="form-controler-email"
                    placeholder=""
                    required=""
                    onChange={handleInputChange}
                    name="email"
                    value={data.email}
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}
                  <span className="glyphicon form-control-feedback" />
                </div>
                <div className="form-group has-feedback" id="form-group">
                  <label
                    className="text-light"
                    htmlFor="form-controler-password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-input"
                    id="form-controler-password m-3"
                    placeholder=""
                    required=""
                    name="password"
                    onChange={handleInputChange}
                    value={data.password}
                  />
                  {errors.password && (
                    <div className="text-danger">{errors.password}</div>
                  )}
                  <span className="glyphicon form-control-feedback" />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary m-4">
                    Login
                  </button>
                </div>
                <div className="text">
                  <h6 className="text-light">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-decoration-none">
                      Register
                    </Link>
                  </h6>
                </div>
              </form>
            </div>
          </div>
          <label className="text-center text-light">
            not a member? <Link to={"/shopownerregistration"}>Sign up now</Link>
          </label>
        </Row>
      </Container>
    </div>
  );
}

export default ShopOwnerLogin;
