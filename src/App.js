import HomeRoute from "./routes/home/Home.Route.Component";
import NavBarComponent from "./routes/navbar/Navigation.Component";
import { Routes, Route } from "react-router-dom";
import SingIn from "./routes/login/SingIn.Component";
import SignUp from "./routes/signUp/signUp.Route";

// import { Home } from "@mui/icons-material";
const App = () => {
  return (
    <Routes>
      {/* parent component */}
      <Route path="/" element={<NavBarComponent />}>
        <Route index element={<HomeRoute />} />
        <Route path="/shop" element={<h1>shop</h1>} />
        <Route path="/sign-in" element={<SingIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* parent component end */}
      </Route>
    </Routes>
  );
};

export default App;
