import HomeRoute from "./routes/home/Home.Route.Component";
import NavBarComponent from "./routes/navbar/Navigation.Component";
import Shop from "./components/shop/Shop.Component";
import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/Authentication.Component";
import CheckoutRouteComponent from "./routes/checkout/Checkout.route.Component";

// import { Home } from "@mui/icons-material";
const App = () => {
  return (
    <Routes>
      {/* parent component */}
      <Route path="/" element={<NavBarComponent />}>
        <Route index element={<HomeRoute />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckoutRouteComponent />} />
      </Route>
    </Routes>
  );
};

export default App;
