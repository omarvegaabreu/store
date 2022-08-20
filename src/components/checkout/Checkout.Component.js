import { useContext } from "react";

import { CartContext } from "../../context/Cart.context.jsx";

import CheckoutItem from "../checkout-item/CheckoutItem.component";

import "./checkout.component.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        {/* need to add smooth transition to this part */}
        {/* need to add smooth transition to this part */}
        {cartTotal === 0 ? <h5>Cart is Empty</h5> : `TOTAL: ${cartTotal}`}
      </div>
    </div>
  );
};

export default Checkout;
