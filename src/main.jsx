import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CartProvider } from "./contexts/cart-context";
import { ProductsProvider } from "./contexts/products-context";
import { AuthContextProvider } from "./contexts/AuthContext";
import { NewsProvider } from "./contexts/news-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <ProductsProvider>
        <CartProvider>
          <NewsProvider>
          <App />
          </NewsProvider>
        </CartProvider>
      </ProductsProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
