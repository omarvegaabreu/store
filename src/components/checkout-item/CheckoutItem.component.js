import { useContext } from "react";

import { CartContext } from "../../context/Cart.context.jsx";

import "./checkout-item-component-styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { removeItemFromCart, deleteItemFromCart, addItemsToCart } =
    useContext(CartContext);

  const subtractItemHandler = () => {
    if (cartItem.quantity === 0) {
      deleteItemFromCart(cartItem);
    }
    removeItemFromCart(cartItem);
  };
  const addItemHandler = () => {
    addItemsToCart(cartItem);
  };
  const onDeleteHandler = () => {
    deleteItemFromCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={subtractItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price * quantity}</span>
      <div className="remove-button" onClick={onDeleteHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
