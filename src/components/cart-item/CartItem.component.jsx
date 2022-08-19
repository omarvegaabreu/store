import "./cartItem.Component.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="class-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-detail">
        <span className="name">{name} </span>
        <span className="price">
          Qty: {quantity} x ${quantity * price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
