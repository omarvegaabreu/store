import { useState, useContext } from "react";

import Button from "../button/Button.Component";
import FormInput from "../form-input/Form.Input.Component";
import {
  createUserFromGoogleAuth,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase";
import { UserContext } from "../../context/User.context";
import "./Sign-In-Form.Styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formFields;

    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);

      setCurrentUser(user);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Invalid email");
          break;
        case "auth/wrong-password":
          alert("Invalid password");
          break;

        default:
          break;
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
