import axios from "axios";
import { createContext, useState,useEffect } from "react";


const addCartItem = (cartItem, productToAdd) => {

  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItem.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? ({ ...cartItem, quantity: cartItem.quantity + 1 })
        : cartItem
    );
  }

  return [...cartItem, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItem, cartItemToRemove) => {
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItem.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItem.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
  )
}
const clearCartItem =(cartItem,cartItemToClear) =>{
  return cartItem.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}


export const CartContext = createContext({

  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
  cartCount:0,
  removeItemToCart:() =>{},
  clearItemFromCart:()=>{},
  cartTotal:0,
});



export const CartProvider = ({ children }) => {


  const [cartItem, setCartItem] = useState(() => {
    const storedState = localStorage.getItem('cartItems');
    return storedState ? JSON.parse(storedState) :  [] ;
  });
  const [cartCount,setCartCount] = useState(0);
  const [cartTotal,setCartTotal] = useState(0)
const [category, setCategory]=useState([])
useEffect(() => {
 
  axios.get("https://spcf-api.onrender.com/categories")
    .then(response => {
      setCategory(response.data);
     
    })
    .catch(error => {
     
      
    });
}, []);
console.log("hyyhy",category);

  useEffect(() => {
   const newCartCount = cartItem.reduce((total,cartItem)=> total + cartItem.quantity,0)
   setCartCount((newCartCount));
   
  }  
  , [cartItem])

  const addItemToCart = (productToAdd) => {
   
    setCartItem(addCartItem(cartItem, productToAdd));
   
  };
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItem));
  }, [cartItem]);

  
   useEffect(() => {
     const newCartTotal = cartItem.reduce(
       (total, cartItem) => total + cartItem.quantity * cartItem.price,
       0
     );
     setCartTotal(newCartTotal.toFixed(2));
    
   }, [cartItem]);


    const removeItemToCart = (cartItemToRemove) => {
      setCartItem(removeCartItem(cartItem, cartItemToRemove));
    };
     const clearItemFromCart = (cartItemToRemove) => {
       setCartItem(clearCartItem(cartItem, cartItemToRemove));
     };

  const value = {
 
    addItemToCart,
    cartItem,
    cartCount,
    removeItemToCart,
    clearItemFromCart,
    cartTotal
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};