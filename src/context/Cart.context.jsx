import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains product to add
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //if found increment quantity of cart item
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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const [cartCount, setCartCount] = useState(0);

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.map((items) => {
      return items.quantity * items.price;
    });
    const cartTotalSum = total.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);

    setCartTotal(cartTotalSum);
  }, [cartItems]);

  const addItemsToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToAdd) => {
    const { quantity } = productToAdd;
    if (quantity <= 0) {
      return;
    }
    setCartItems(removeCartItem(cartItems, productToAdd));
  };

  const deleteItemFromCart = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
  };

  const value = {
    isCartOpen,
    cartItems,
    cartCount,
    cartTotal,
    addItemsToCart,
    setIsCartOpen,
    setCartCount,
    removeItemFromCart,
    deleteItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
