import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "../cart/cart.types";

export const setIsCartOpen = (boolean) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, [
    ...cartItems,
    { ...productToAdd, quantity: 1 },
  ]);
};

export const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS);
  return [...cartItems, { ...productToRemove, quantity: 1 }];
};

const deleteCartItem = (cartItems, productToDelete) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToDelete.id
  );

  if (existingCartItem) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
  }
  return [...cartItems, { ...cartItems, quantity: 1 }];
};
