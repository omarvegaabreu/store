import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../context/Categories.Context";
import ProductCard from "../product-card/ProductCard.components";
import "./shop-component.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <Fragment>
            <h1>{title}</h1>
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
