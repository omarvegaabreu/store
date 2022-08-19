import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button.Component";
import CartItem from "../cart-item/CartItem.component";
import "./cart-dropDown.component.scss";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const onCheckoutClick = () => {
    const path = `checkout`;
    navigate(path);
    setIsCartOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={onCheckoutClick}>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
