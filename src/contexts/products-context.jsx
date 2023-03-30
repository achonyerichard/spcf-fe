import axios from "axios";
import { useState, useEffect } from "react";
import { createContext } from "react";
import getProducts from "../data/productsData";
import { useAuthContext } from "../hooks/useAuthContext";

export const ProductsContext = createContext({
  productData: {},
  categoryData:{}
});

export const ProductsProvider = ({ children }) => {
    const [productData, setProductData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const {user}= useAuthContext()
   
const id =user?._id

console.log("jojer",id);
    useEffect(() => {
      axios.get(`https://spcf-api.onrender.com/supermarket/:${id}`)
        .then(response => {
          setProductData(response?.data?.products); 
          setCategoryData(response?.data?.categories); 
        })
        .catch(error => {
         
        });
    }, [user]);
    console.log("supermarket", productData);
    console.log("supermarket", categoryData);
  const value = { productData,categoryData };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};