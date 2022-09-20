import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCategory } from "../../store/categories/categories.selector.js";

import CategoryPreview from "../../components/category-preview/Category.preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategory);
  console.log(categoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
