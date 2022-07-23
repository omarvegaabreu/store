import HomeRoute from "./routes/home/Home.Route.Component";
import NavBarComponent from "./routes/navbar/Navigation.Component";
import { Routes, Route } from "react-router-dom";

// import { Home } from "@mui/icons-material";
const App = () => {
  return (
    <Routes>
      {/* parent component */}
      <Route path="/" element={<NavBarComponent />}>
        <Route index element={<HomeRoute />} />
        <Route path="/shop" element={<h1>shop</h1>} />
        {/* parent component end */}
      </Route>
    </Routes>
  );
};

export default App;
