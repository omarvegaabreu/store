import { Fragment } from "react";
import { useSelector } from "react-redux";

// import { CategoriesContext } from "../../context/Categories.Context";
import CategoryPreview from "../../components/category-preview/Category.preview.component";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector((state) => state.categoriesMap.categories);
  // console.log(categoriesMap.categories);
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
