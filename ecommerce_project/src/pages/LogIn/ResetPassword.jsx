import React, { useState, useEffect } from "react";
import loginStyle from "./login.module.css";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers, selectAllUsers } from "../../redux/userSlice/userSlice";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.png";

const ResetPassword = () => {
  const allUsers = useSelector(selectAllUsers);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (newPassword === "" && confirmPassword === "") {
      alert("Please enter password");
    } else if (newPassword !== confirmPassword) {
      alert("Please enter the password correctly");
    } else if (newPassword === confirmPassword) {
      // allUsers.find((user) => user.email === email)
      // dispatch(addUser({ password }));
      navigate("/");
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
                  <h3>Reset Password</h3>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">New Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Confirm Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </FormGroup>
                <Button type="submit" className={loginStyle.createAccount}>
                  Reset Password
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
