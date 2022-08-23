import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-previews/Categories.preview";
import Category from "../category/Category.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
