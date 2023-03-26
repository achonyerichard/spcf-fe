import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";


export const NewsContext = createContext({
  data: {},
  isLoading:{},
  error:""
});

export const NewsProvider = ({ children }) => {
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
  
    useEffect(() => {
      setIsLoading(true);
      axios.get("https://spcf-api.onrender.com/news/public")
        .then(response => {
          setData(response.data);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setIsLoading(false);
        });
    }, []);
  
    console.log("eeeeffgfgf", data);
  const value = { data, isLoading ,error };
  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  );
};