import { useState, useEffect } from "react";
import { createContext } from "react";
import getProducts from "../data/productsData";

export const ProductsContext = createContext({
  productData: {},
});

export const ProductsProvider = ({ children }) => {
    const [productData, setProductData] = useState([]);

  
    useEffect(() => {
      const copyData = getProducts();
      console.log(copyData);
      setProductData(copyData);
    }, []);
    console.log("ffgfgf", productData);
  const value = { productData };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};