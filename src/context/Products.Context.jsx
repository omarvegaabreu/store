import { createContext, useState, useEffect } from "react";

import SHOP_DATA from "../shop-data/shopData.json";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  console.log(products);

  const value = { products, setProducts };

  useEffect(() => {
    if (products) {
      console.log(products);
      setProducts(products);
    }
  }, [products, setProducts]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};