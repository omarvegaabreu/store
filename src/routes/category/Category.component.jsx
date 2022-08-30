import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/ProductCard.components";

import { CategoriesContext } from "../../context/Categories.Context";

import "./category-component-styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <div className="category-title">{category.toUpperCase()}</div>
      <div className="category-container">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} products={product} />;
          })}
      </div>
    </Fragment>
  );
};

export default Category;
