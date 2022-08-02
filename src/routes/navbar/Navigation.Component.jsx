import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { useContext } from "react";
import { UserContext } from "../../context/User.context";
import { CartDropdownContext } from "../../context/CartDropdown.context";

import { userSignOut } from "../../utils/firebase";

import CartIcon from "../../components/cart-icon/CartIcon.Component";
import CartDropdown from "../../components/cart-drop-down/CartDropDown.component";

import "./navigation.styles.scss";

const NavBarComponent = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartDropdownContext);

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
