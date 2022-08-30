import { createContext, useReducer } from "react";

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
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
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

export const CartContext = createContext({
  isCartOpen: false,
  cartCount: 0,
  cartItems: [],
  cartTotal: 0,
  setIsCartOpen: () => {},
  addItemsToCart: () => {},
  removeCartItem: () => {},
  deleteCartItem: () => {},
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartCount: 0,
  cartItems: [],
  cartTotal: 0,
};

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error(`Unhandled type of ${type} cart reducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartCount, cartItems, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);
  // console.log("is cart open " + isCartOpen);
  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      },
    });
  };

  const addItemsToCart = (productToAdd) => {
    const addNewCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(addNewCartItems);
  };

  const removeItemFromCart = (productToAdd) => {
    const { quantity } = productToAdd;
    if (quantity <= 0) {
      return;
    }
    const removeNewCartItems = removeCartItem(cartItems, productToAdd);
    updateCartItemsReducer(removeNewCartItems);
  };

  const deleteItemFromCart = (productToDelete) => {
    const deleteFromCartItems = deleteCartItem(cartItems, productToDelete);
    updateCartItemsReducer(deleteFromCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
      payload: bool,
    });
  };

  const value = {
    isCartOpen,
    cartItems,
    cartCount,
    cartTotal,
    setIsCartOpen,
    // setCartCount,
    addItemsToCart,
    removeItemFromCart,
    deleteItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
