import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserFromGoogleAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase";

const LogIn = () => {
  useEffect(() => {
    async function getResponse() {
      const response = await getRedirectResult(auth);
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
      <button onClick={onButtonClick}>this submit</button>,
      <button onClick={signInWithGoogleRedirect}>google redirect</button>
    </div>
  );
};

export default LogIn;
