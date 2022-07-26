import { async } from "@firebase/util";
import { useState, useEffect } from "react";
import {
  createUserAuthWithEmailAndPassword,
  createUserFromGoogleAuth,
  auth,
  db,
} from "../../utils/firebase";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  deleteField,
} from "firebase/firestore";
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

      // console.log(response);
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
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="displayName"
          value={displayName}
          required
          onChange={handleFormChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          required
          onChange={handleFormChange}
        />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          autoComplete="on"
          required
          onChange={handleFormChange}
        />
        <label>Confirm Password: </label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          autoComplete="on"
          required
          onChange={handleFormChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
