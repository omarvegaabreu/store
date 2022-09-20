import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../components/product-card/ProductCard.components";
import { selectCategory } from "../../store/categories/categories.selector";

import "./category-component-styles.scss";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategory);
  const [products, setProducts] = useState(categoriesMap[category]);
  console.log(categoriesMap);

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
