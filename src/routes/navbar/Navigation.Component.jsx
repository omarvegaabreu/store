import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { useContext } from "react";
import { UserContext } from "../../context/User.context";
import { CartContext } from "../../context/Cart.context";

import { userSignOut } from "../../utils/firebase";

import CartIcon from "../../components/cart-icon/CartIcon.Component";
import CartDropdown from "../../components/cart-drop-down/CartDropDown.component";

import "./navigation.styles.scss";

const NavBarComponent = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <CrownLogo />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={userSignOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>

      <Outlet />
    </Fragment>
  );
};

export default NavBarComponent;
