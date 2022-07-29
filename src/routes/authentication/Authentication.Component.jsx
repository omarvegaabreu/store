import SignUpForm from "../../components/signUpForm/SignUp.Component";
import SignIn from "../../components/sign-in/Sign-In-Form";
import "./authentication.component.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
