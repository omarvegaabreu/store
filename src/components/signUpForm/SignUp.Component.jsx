import { useState } from "react";

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

  return (
    <div>
      <h1>Sign Up</h1>
      <form>
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
