import Button from "../button/Button.Component";
import FormInput from "../form-input/Form.Input.Component";
import SignIn from "../sign-in/Sign-In-Form";

import {
  createUserAuthWithEmailAndPassword,
  createUserFromGoogleAuth,
} from "../../utils/firebase";

import { useState } from "react";

import "./sign-up-form-styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords need to match");
      return;
    }

    try {
      const { user } = await createUserAuthWithEmailAndPassword(
        email,
        password
      );

      const userFromGoogleAuth = await createUserFromGoogleAuth(user, {
        displayName,
      });

      setFormFields(defaultFormFields);

      console.log(userFromGoogleAuth);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use. Please use another email");
      } else {
        console.log("error" + error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with Email and password</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          required
          onChange={handleFormChange}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          required
          onChange={handleFormChange}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          autoComplete="on"
          required
          onChange={handleFormChange}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          autoComplete="on"
          required
          onChange={handleFormChange}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
