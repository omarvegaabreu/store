import "./cart-dropDown.component.scss";
import Button from "../button/Button.Component";
import { CartDropdownContext } from "../../context/CartDropdown.context";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button buttonType="inverted">Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
