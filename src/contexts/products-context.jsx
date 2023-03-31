import axios from "axios";
import { useState, useEffect } from "react";
import { createContext } from "react";
import getProducts from "../data/productsData";
import { useAuthContext } from "../hooks/useAuthContext";



export const ProductsContext = createContext({
  productData: {},
  categoryData: {},
  filterProducts: () => {},
filteredData:[],
setFilteredData: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const { user } = useAuthContext();

  const id = user?._id;

  const filterProducts = (categories) => {

    const newProduct = productData.filter((product) => categories?.name.toLowerCase() === product?.category.toLowerCase());
    
    setFilteredData(newProduct);
   

  };

  useEffect(() => {
    axios
      .get(`https://spcf-api.onrender.com/supermarket/:${id}`)
      .then((response) => {
        setProductData(response?.data?.products);
        setCategoryData(response?.data?.categories);
      })
      .catch((error) => {});
  }, [user]);
 
  
  const value = { productData, categoryData, filterProducts,filteredData,setFilteredData };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
