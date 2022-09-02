import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import HomeRoute from "./routes/home/Home.Route.Component";
import NavBarComponent from "./routes/navbar/Navigation.Component";
import Shop from "./routes/shop/Shop.component";
import Authentication from "./routes/authentication/Authentication.Component";
import CheckoutRouteComponent from "./routes/checkout/Checkout.route.Component";
import {
  onAuthStateChangeListener,
  createUserFromGoogleAuth,
} from "./utils/firebase";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unSubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserFromGoogleAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unSubscribe;
  }, [dispatch]);
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
