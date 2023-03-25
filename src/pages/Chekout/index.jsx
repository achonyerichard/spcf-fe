import { useContext, useState } from "react";

import { Link } from "react-router-dom";
// Import Swiper styles

import Nav from "../../components/navigation/Navigation";
import Footer from "../../components/footer";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CartContext } from "../../contexts/cart-context";
import { ProductsContext } from "../../contexts/products-context";

function Checkout() {
  const {
    cartItem,
    cartTotal,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
  } = useContext(CartContext);
  const { productData } = useContext(ProductsContext);

  const addItem = (item) => addItemToCart(item);
  const removeItem = (item) => removeItemToCart(item);
  const clearItem = (item) => clearItemFromCart(item);
  return (
    <>
      <Nav />
      <main className="mb-20">
        <section className="bg-white p-8 lg:px-40 w-full lg:mt-28">
          <div className="container mx-auto mt-10">
            <div className="md:flex  my-10">
              <div className="md:w-2/3 bg-white md:px-10 md:py-10 py-14">
                <div className="md:flex justify-between border-b pb-8">
                  <h1 className="font-medium  text-2xl text-[#3F3A21]">Your Cart</h1>
                  <h2 className="font-semibold text-sm text-[#908D7E] ">You have <span className="text-[#FF8B1F]">{cartItem.length}</span> items in your cart</h2>
                </div>
                <div className="flex items-center bg-[#F7F7F7] md:mt-10 mb-5 p-3">
                  <h3 className="font-semibold text-gray-600 text-sm capitalize w-2/5">
                    Product 
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-sm capitalize w-1/5 text-center">
                    Quantity
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-sm capitalize w-1/5 text-center">
                    Action
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-sm capitalize w-1/5 text-center">
                    Price
                  </h3>
                </div>
                {cartItem.map((item) => (
                  <div
                    className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                    key={item.id}
                  >
                    <div className="flex w-2/5">
                      <div className="w-20">
                        <img className="md:h-24 object-cover" src={item.image} alt="" />
                      </div>
                      <div className="flex flex-col  ml-4 md:flex-grow ">
                        <span className="font-bold text-sm w-1/2">{item.name}</span>
                        <span className="text-red-500 text-xs ">
                          {item.category}
                        </span>
                       
                      </div>
                    </div>
                    <div className="flex justify-center w-1/5">
                      <span
                        className="bg-[#FF9F45] flex items-center p-1 md:p-2 rounded-sm cursor-pointer "
                        onClick={() => addItem(item)}
                      >
                        <svg
                          className="fill-current text-white md:w-3 w-2"
                          viewBox="0 0 448 512"
                        >
                          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                      </span>

                      <input
                        className="mx-2 border text-center md:w-8 w-4"
                        type="text"
                        value={item.quantity}
                        disabled
                      />
                      <span
                        className="bg-[#ECEBE9] flex items-center p-2 rounded-sm cursor-pointer"
                        onClick={() => removeItem(item)}
                      >
                        <svg
                          className="fill-current text-black  md:w-3 w-2"
                          viewBox="0 0 448 512"
                        >
                          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                      </span>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm flex justify-center">
                      <MdOutlineDeleteOutline
                        className="text-lg md:text-2xl fill-[#FF9F45] cursor-pointer"
                        onClick={() => clearItem(item)}
                      />
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      {item.price}
                    </span>
                  </div>
                ))}

                <Link
                  to="/supermarket"
                  className="flex font-semibold text-[#FF8B1F] font-semibold hover:text-[#FCD733]   text-sm mt-10"
                >
                  <svg
                    className="fill-current mr-2 text-black w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>

              <div id="summary" className="md:w-1/3 ">
                <div className="px-8 py-10 bg-[#F2F2F2]">
                <div className="flex justify-between  mb-5">
                  <span className="font-medium text-2xl capitalize">
                    Cart Total
                  </span>
                </div>
                <div className="flex justify-between  mb-5">
                  <span className="font-semibold text-sm uppercase">
                    Sub Total
                  </span>
                  <span className="font-semibold text-sm">{cartTotal}</span>
                </div>
                <div className="flex justify-between  mb-5">
                  <span className="font-semibold text-sm uppercase">Tax</span>
                  <span className="font-semibold text-sm">0</span>
                </div>
                <div className="flex justify-between  mb-5">
                  <span className="font-semibold text-sm uppercase">
                    Shipping
                  </span>
                  <span className="font-semibold text-sm">0</span>
                </div>
                <div className="flex justify-between  mb-5">
                  <span className="font-semibold text-sm uppercase">Total</span>
                  <span className="font-semibold text-sm">0</span>
                </div>
                <div className="border-t mt-8">
                  
                  <button className="bg-[#FF8B1F] font-semibold hover:bg-[#FCD733] py-3 text-sm text-white uppercase w-full">
                   Proceed to Checkout
                  </button>
                </div>
              


                </div>
                <div className=" flex items-center mt-8 w-full">
                 
                    <div className="w-2/3">
                    <input
                      type="text"
                      id="promo"
                      placeholder="Please Enter Your Promo Code"
                      className="p-3 text-sm w-[242px] bg-[#EEEEEE]"
                    />
                    </div>
                   
               <div className="w-1/3">
               <button className="bg-[#FF8B1F] hover:bg-[#FCD733] md:px-2 px-2 py-3 text-sm text-white capitalize">
                    Apply Coupon
                  </button>
               </div>
                 
                </div>
               
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Checkout;
