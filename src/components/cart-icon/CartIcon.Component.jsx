import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.component.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const onCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={onCartToggle} />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
