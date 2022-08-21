import { createContext, useState, useEffect } from "react";

import SHOP_DATA from "../shop-data/shopData.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const value = { products, setProducts };

  useEffect(() => {
    if (products) {
      setProducts(products);
    }
  }, [products, setProducts]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
