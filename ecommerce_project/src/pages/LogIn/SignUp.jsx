import React, { useState, useEffect } from "react";
import loginStyle from "./login.module.css";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers, selectAllUsers } from "../../redux/userSlice/userSlice";
import { Link, useNavigate } from "react-router-dom";
import regexObject from "./../../regex";
import logo from "../../assets/image/logo.png";
import { unwrapResult } from "@reduxjs/toolkit";

const SignUp = () => {
  const allUsers = useSelector(selectAllUsers);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { emailDataTester, passwordDataTester } = regexObject;
  // emailDataTester(email) && passwordDataTester(password)
  const isDisabled = [userName, email, password].every(Boolean);

  const handleSubmit = (e) => {
    if (isDisabled && email && password) {
       dispatch(addUser({ userName, email, password, card: [], wishlist: [] }));
      // unwrapResult(result);
      navigate("/signIn");
    } else {
      alert("Please fill all the fields");
    }

    e.preventDefault();
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <div className={loginStyle.container}>
        <div className={loginStyle.navbar}>
          <div>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={loginStyle.navRightSide}>
            <p>Already a member?</p>
            <Link to="/signIn">Sign In</Link>
          </div>
        </div>
        <div className={loginStyle.main}>
          <div className={loginStyle.main_leftSide}>
            <div>
              <h3>We Offer the Best Products</h3>
            </div>
          </div>
          <div className={loginStyle.main_rightSide}>
            <div className={loginStyle.main_rightSide_form}>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <h3>I'm New Here</h3>
                  <p>Enter your detail below</p>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleUserName">User Name</Label>
                  <Input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="anniemario"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="annie@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <Button type="submit" disabled={!isDisabled} className={loginStyle.createAccount}>
                  Create Account
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
