import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input";
import CustomButton from "../custom-button";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import "./sign-in.styles.scss";

const SingIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          id="email"
          type="email"
          name="email"
          label="Email"
          value={email}
          handleChange={handleInputChange}
          required
        />
        <FormInput
          id="password"
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={handleInputChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SingIn);
