import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import CartItem from "../cart-item/CartItem.component";
import Button from "../button/Button.Component";

const Checkout = () => {
  const {
    cartItems,
    addItemsToCart,
    cartCount,
    setCartCount,
    removeItemFromCart,
    deleteItemFromCart,
    cartTotal,
  } = useContext(CartContext);

  const subtractItemHandler = (cartItem) => {
    removeItemFromCart(cartItem);
  };
  const addItemHandler = (cartItems) => {
    addItemsToCart(cartItems);
  };
  const onDeleteHandler = (cartItem) => {
    deleteItemFromCart(cartItem);
  };

  const cartItemsTotal = cartItems.map((items) => {
    const { price, quantity } = items;
    return price * quantity;
  });
  // console.log(cartItemsTotal);
  return (
    <div>
      {cartItems.map((cartItem) => {
        const { quantity } = cartItem;
        return (
          <div>
            <CartItem key={cartItem.id} cartItem={cartItem} />
            <span onClick={() => subtractItemHandler(cartItem)} class="minus">
              -
            </span>
            {quantity}
            <span onClick={() => addItemHandler(cartItem)} class="plus">
              +
            </span>
            <Button onClick={() => onDeleteHandler(cartItem)}>delete</Button>
          </div>
        );
      })}
      <div>Total:{cartTotal}</div>
    </div>
  );
};

export default Checkout;
