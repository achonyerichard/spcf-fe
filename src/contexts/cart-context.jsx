import axios from "axios";
import { createContext, useState,useEffect } from "react";


const addCartItem = (cartItem, productToAdd) => {

  const existingCartItem = cartItem.find(
    (cartItem) => cartItem._id === productToAdd._id
  );

  if (existingCartItem) {
    return cartItem.map((cartItem) =>
      cartItem._id === productToAdd._id
        ? ({ ...cartItem, quantity: cartItem.quantity + 1 })
        : cartItem
    );
  }

  return [...cartItem, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItem, cartItemToRemove) => {
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem._id === cartItemToRemove._id
  );

  if (existingCartItem.quantity === 1) {
    return cartItem.filter((cartItem) => cartItem._id !== cartItemToRemove._id);
  }

  return cartItem.map((cartItem) =>
      cartItem._id === cartItemToRemove._id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
  )
}
const clearCartItem =(cartItem,cartItemToClear) =>{
  return cartItem.filter((cartItem) => cartItem._id !== cartItemToClear._id);
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
    console.log("ct",cartItem);
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