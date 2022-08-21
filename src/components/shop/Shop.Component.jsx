import { useContext, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { CategoriesContext } from "../../context/Categories.Context";
import ProductCard from "../product-card/ProductCard.components";
import "./shop-component.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const navigate = useNavigate();
  const onNavigateHandler = (navigateRoute) => {
    navigate(navigateRoute);
  };
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <Fragment key={title}>
            <h1 onClick={() => onNavigateHandler(title)}>{title}</h1>
            <div className="products-container">
              {categoriesMap[title].map((products) => {
                return <ProductCard key={products.id} products={products} />;
              })}
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Shop;
