import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import CartItem from "../cart-item/CartItem.component";
import Button from "../button/Button.Component";
import "./checkout.component.styles.scss";
const Checkout = () => {
  const {
    cartItems,
    removeItemFromCart,
    deleteItemFromCart,
    cartTotal,
    addItemsToCart,
  } = useContext(CartContext);

  const subtractItemHandler = (cartItem) => {
    if (cartItem.quantity === 0) {
      deleteItemFromCart(cartItem);
    }
    removeItemFromCart(cartItem);
  };
  const addItemHandler = (cartItems) => {
    addItemsToCart(cartItems);
  };
  const onDeleteHandler = (cartItem) => {
    deleteItemFromCart(cartItem);
  };

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
      {cartItems.map((cartItem) => {
        const { quantity } = cartItem;
        return (
          <div className="" key={cartItem.id}>
            <CartItem cartItem={cartItem} />
            <span
              onClick={() => subtractItemHandler(cartItem)}
              className="minus"
            >
              -
            </span>
            {quantity}
            <span onClick={() => addItemHandler(cartItem)} className="plus">
              +
            </span>

            <div onClick={() => onDeleteHandler(cartItem)}>&#10005;</div>
          </div>
        );
      })}
      <div className="total">
        {cartTotal > 0 ? `Total amount pay  $ ${cartTotal}` : null}
      </div>
    </div>
  );
};

export default Checkout;
