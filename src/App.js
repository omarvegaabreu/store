import HomeRoute from "./routes/home/Home.Route.Component";
import NavBarComponent from "./routes/navbar/Navigation.Component";
import Shop from "./routes/shop/Shop.component";
import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/Authentication.Component";
import CheckoutRouteComponent from "./routes/checkout/Checkout.route.Component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBarComponent />}>
        <Route index element={<HomeRoute />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckoutRouteComponent />} />
      </Route>
    </Routes>
  );
};

export default App;
