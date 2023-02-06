import React, { useState, useEffect } from "react";
import loginStyle from "./login.module.css";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
// import { addUser, fetchUsers, selectAllUsers } from "../../redux/userSlice/userSlice";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.png";

const ForgotPassword = () => {
  // const allUsers = useSelector(selectAllUsers);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // if (email === "" && password === "") {
    //   alert("Please enter email and password");
    // } else if (allUsers.find((user) => user.email === email)) {
    //   alert("User already exists");
    // } else {
    //   dispatch(addUser({ email, password }));
    //   alert("User created");
    //   navigate("/");
    // }
    e.preventDefault();
  };

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

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
                  <h3>Forgot Password?</h3>
                  <p>Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
                </FormGroup>

                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="annie@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormGroup>
                <Button type="submit" className={loginStyle.createAccount}>
                  Send Reset Instruction
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
