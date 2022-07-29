import Button from "../button/Button.Component";
import FormInput from "../form-input/Form.Input.Component";

import {
  auth,
  createUserFromGoogleAuth,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase";

import { useState } from "react";

import "./Sign-In-Form.Styles.scss";
import { fetchSignInMethodsForEmail } from "firebase/auth";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formFields;

    try {
      const response = await signInUserWithEmailAndPassword(email, password);
      console.log(response);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("Invalid email");
      } else if (error.code === "auth/wrong-password") {
        alert("Invalid password");
      } else {
        console.log(error.code);
      }
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserFromGoogleAuth(user);
  };

  return (
    <div className="sign-up-container">
      <h2>Do you have an account?</h2>
      <span>Sign In</span>
      <form onSubmit={handleFormSubmit}>
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

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
