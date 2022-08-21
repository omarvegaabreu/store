import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import Button from "../button/Button.Component";
import "./productCard.component.scss";

const ProductCard = ({ products }) => {
  const { id, name, imageUrl, price } = products;

  const { addItemsToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemsToCart(products);
  };

  return (
    <div key={id} className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
