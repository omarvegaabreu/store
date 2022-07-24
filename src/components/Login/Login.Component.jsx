import {
  signInWithGooglePopup,
  createUserFromGoogleAuth,
} from "../../utils/firebase";

const LogIn = () => {
  const logInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRed = await createUserFromGoogleAuth(user);
  };

  const onButtonClick = () => {
    logInWithGoogle();
  };

  return (
    <div className="form">
      <button onClick={onButtonClick}>this submit</button>
    </div>
  );
};

export default LogIn;
