import HomeRoute from "./routes/home/Home.Route.Component";
import NavBarComponent from "./routes/navbar/Navigation.Component";
import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/Authentication.Component";

// import { Home } from "@mui/icons-material";
const App = () => {
  return (
    <Routes>
      {/* parent component */}
      <Route path="/" element={<NavBarComponent />}>
        <Route index element={<HomeRoute />} />
        <Route path="shop" element={<h1>I am the shop</h1>} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
