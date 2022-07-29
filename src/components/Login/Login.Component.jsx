import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserFromGoogleAuth,
} from "../../utils/firebase";
import SignUpForm from "../signUpForm/SignUp.Component";
import Button from "../button/Button.Component";
import SignIn from "../sign-in-component/SignIn.Component";

const LogIn = () => {
  useEffect(() => {
    async function getResponse() {
      const response = await getRedirectResult(auth);

      if (!response) return;

      const { user } = response;

      const userDocRed = await createUserFromGoogleAuth(user);
    }
    getResponse();
  }, []);

  const logInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRed = await createUserFromGoogleAuth(user);
  };

  const onButtonClick = () => {
    logInWithGoogle();
  };

  return (
    <div className="form">
      <SignIn />
      <SignUpForm />
      <Button buttonType={"google-sign-in"} onClick={onButtonClick}>
        Google Sign In
      </Button>
    </div>
  );
};

export default LogIn;
