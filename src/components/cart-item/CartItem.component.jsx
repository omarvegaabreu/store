import "./cartItem.Component.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;
  console.log(name, quantity);
  return (
    <div>
      <h1>{name}</h1>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
