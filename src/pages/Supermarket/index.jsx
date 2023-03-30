import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/navigation/Navigation";
import Footer from "../../components/footer";
import { BsCart3, BsSearch } from "react-icons/bs";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import getProducts from "../../data/productsData";
import { CartContext } from "../../contexts/cart-context";
import { ProductsContext } from "../../contexts/products-context";

const SuperMarket = () => {
  const { cartItem, cartCount, addItemToCart, cartTotal } =
    useContext(CartContext);
  const [cartClicked, setCartClicked] = useState("");
  const cartAdd = (product) => {
    addItemToCart(product);
    setCartClicked(product.id);
  };
  const { productData } = useContext(ProductsContext);
  const { categoryData } = useContext(ProductsContext);

  console.log("holla", categoryData);

  return (
    <>
      <Nav />
      <main>
        <section className="relative h-[489px] w-full flex items-center  text-left bg-cover bg-center bg-[url('../public/img/market-bg.png')] bg-blend-multiply bg-[#7D4007] bg-opacity-80 mb-20">
          <div className="px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-left">
              <h2 className="text-4xl tracking-tight leading-loose  sm:text-5xl text-white sm:leading-none md:text-7xl font-bold">
                SUPERMART <br />
                STORE
              </h2>

              {/* <div className="mt-5 sm:mt-8 sm:flex justify-center">
          <div className="rounded-md shadow">
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10">
              Get started
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:px-10">
              Live demo
            </a>
          </div>
        </div> */}
            </div>
          </div>
        </section>
        <section className="mb-20">
          <div className="md:px-20 px-4">
            <div className="md:flex items-center gap-y-3 ">
              <div className="md:w-1/3 md:block hidden">
                <h1 className="text-2xl text-black font-bold">Categories</h1>
              </div>
              <div className="md:w-2/3 justify-end flex">
                <div className=" flex  justify-center items-center gap-4 ">
                  <div className="relative flex items-center">
                    <input
                      id="twitter"
                      type="text"
                      className="appearance-none  px-3 py-6 block w-[291px]  text-base text-appBlack bg-[#F5F5F5]  focus:bg-white peer relative h-10 leading-tight focus:outline-none   pl-8 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out  focus:drop-shadow-lg"
                    />
                    <span className="flex items-center material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                      {" "}
                      <BsSearch className={`text-2xl text-[#908D7E] mr-2`} />
                    </span>
                  </div>
                  <div>
                    <AiOutlineHeart className="text-3xl" />
                  </div>
                  <Link to="/checkout">
                    <div className="relative cursor-pointer">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.62981C16.09 8.62981 15.75 8.28981 15.75 7.87981V6.49981C15.75 5.44981 15.3 4.42981 14.52 3.71981C13.73 2.99981 12.71 2.66981 11.63 2.76981C9.83 2.93981 8.25 4.77981 8.25 6.69981V7.66981C8.25 8.07981 7.91 8.41981 7.5 8.41981C7.09 8.41981 6.75 8.07981 6.75 7.66981V6.68981C6.75 3.99981 8.92 1.51981 11.49 1.26981C12.99 1.12981 14.43 1.59981 15.53 2.60981C16.62 3.59981 17.25 5.01981 17.25 6.49981V7.87981C17.25 8.28981 16.91 8.62981 16.5 8.62981Z"
                          fill="#FF8B1F"
                        />
                        <path
                          d="M15 22.75H9C4.38 22.75 3.52 20.6 3.3 18.51L2.55 12.52C2.44 11.44 2.4 9.89 3.45 8.73C4.35 7.73 5.84 7.25 8 7.25H16C18.17 7.25 19.66 7.74 20.55 8.73C21.59 9.89 21.56 11.44 21.45 12.5L20.7 18.51C20.48 20.6 19.62 22.75 15 22.75ZM8 8.75C6.31 8.75 5.15 9.08 4.56 9.74C4.07 10.28 3.91 11.11 4.04 12.35L4.79 18.34C4.96 19.94 5.4 21.26 9 21.26H15C18.6 21.26 19.04 19.95 19.21 18.36L19.96 12.35C20.09 11.13 19.93 10.3 19.44 9.75C18.85 9.08 17.69 8.75 16 8.75H8Z"
                          fill="#FF8B1F"
                        />
                        <path
                          d="M15.42 13.1499C14.86 13.1499 14.41 12.6999 14.41 12.1499C14.41 11.5999 14.86 11.1499 15.41 11.1499C15.96 11.1499 16.41 11.5999 16.41 12.1499C16.41 12.6999 15.97 13.1499 15.42 13.1499Z"
                          fill="#FF8B1F"
                        />
                        <path
                          d="M8.41997 13.1499C7.85997 13.1499 7.40997 12.6999 7.40997 12.1499C7.40997 11.5999 7.85997 11.1499 8.40997 11.1499C8.95997 11.1499 9.40997 11.5999 9.40997 12.1499C9.40997 12.6999 8.96997 13.1499 8.41997 13.1499Z"
                          fill="#FF8B1F"
                        />
                      </svg>
                      <div className="absolute -top-3 right-0">
                        <span className="text-red-900 font-bold text-xs rounded-full ">
                          {cartCount}
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* <input
                  className="appearance-none block w-[291px] border border-gray-400  bg-[#F5F5F5] text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Search..."
                /> */}
                </div>
              </div>
              <div className="md:w-1/3 lg:hidden block">
                <h1 className="text-2xl text-black font-bold">Categories</h1>
              </div>
            </div>
            <div className="w-full max-w-[1920px]  mx-auto ">
              <div className="text-appBlack lg:flex justify-center  lg:gap-4 lg:pt-10 pt-5">
                <div className=" block  md:w-1/5">
                  <div className=" lg:border-gray-200 border lg:h-auto  ">
                    <div className="flex justify-center">
                      <ul className="w-full divide-y divide-gray-200 ">
                        {categoryData?.map((category) => (
                          <li key={category?._id} className="py-5  px-5">
                            <div className="flex items-center space-x-4">
                              <div className="flex-1 min-w-0">
                                <p className="text-xl text-gray-600 truncate  capitalize">
                                  {category?.name}
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                <svg
                                  className="fill-current h-4 w-4 -rotate-90"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                                </svg>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-5">
                    <h1 className="text-xl text-black">Filter</h1>
                    <p className="text-md text-[#908D7E] pt-3">Price</p>
                    <div className=" grid grid-cols-3   lg:grid-cols-3 gap-2   items-center pt-3">
                      <div className="flex items-center mb-4">
                        <input
                          id="radio1"
                          type="radio"
                          name="radio"
                          className="hidden"
                        />
                        <label
                          htmlFor="radio1"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 bg-[#D9D9D9] inline-block mr-1 border border-grey text-[#908D7E]"></span>
                          $2.00
                        </label>
                      </div>

                      <div className="flex items-center mb-4">
                        <input
                          id="radio2"
                          type="radio"
                          name="radio"
                          className="hidden"
                        />
                        <label
                          htmlFor="radio2"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4  bg-[#D9D9D9] inline-block mr-1 border border-grey text-[#908D7E]"></span>
                          $5.00
                        </label>
                      </div>

                      <div className="flex items-center mb-4">
                        <input
                          id="radio3"
                          type="radio"
                          name="radio"
                          className="hidden"
                        />
                        <label
                          htmlFor="radio3"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 bg-[#D9D9D9] inline-block mr-1 border border-grey text-[#908D7E]"></span>
                          $7.00
                        </label>
                      </div>

                      <div className="flex items-center mb-4">
                        <input
                          id="radio4"
                          type="radio"
                          name="radio"
                          className="hidden"
                        />
                        <label
                          htmlFor="radio4"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 bg-[#D9D9D9] inline-block mr-1 border border-grey text-[#908D7E]"></span>
                          $8.00
                        </label>
                      </div>

                      <div className="flex items-center mb-4">
                        <input
                          id="radio5"
                          type="radio"
                          name="radio"
                          className="hidden"
                        />
                        <label
                          htmlFor="radio5"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 bg-[#D9D9D9] inline-block mr-1 border border-grey text-[#908D7E]"></span>
                          $9.99
                        </label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          id="radio5"
                          type="radio"
                          name="radio"
                          className="hidden"
                        />
                        <label
                          htmlFor="radio5"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 bg-[#D9D9D9] inline-block mr-1 border border-grey text-[#908D7E]"></span>
                          $10.00
                        </label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          id="radio5"
                          type="radio"
                          name="radio"
                          className="hidden"
                        />
                        <label
                          htmlFor="radio5"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 bg-[#D9D9D9] inline-block mr-1 border border-grey text-[#908D7E]"></span>
                          $11.00
                        </label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          id="radio5"
                          type="radio"
                          name="radio"
                          className="hidden"
                        />
                        <label
                          htmlFor="radio5"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 bg-[#D9D9D9] inline-block mr-1 border border-grey text-[#908D7E]"></span>
                          $12.00
                        </label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          id="radio5"
                          type="radio"
                          name="radio"
                          className="hidden"
                        />
                        <label
                          htmlFor="radio5"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 bg-[#D9D9D9] inline-block mr-1 border border-grey text-[#908D7E]"></span>
                          $15.00
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 pt-10  lg:grid-cols-5 gap-2  md:gap-8 md:w-4/5">
                  {productData.map((product) => (
                    <div
                      className="flex-shrink-0  relative overflow-hidden bg-white shadow-lg rounded-lg border border-gray-200"
                      key={product?._id}
                    >
                      <div className="relative pt-5 px-10 flex items-center justify-center">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                        <img
                          className="relative w-40 object-fit"
                          src={product?.image}
                          alt="Product Image"
                        />
                      </div>
                      <div className="relative text-white px-6  mt-6">
                        <div className="flex justify-center">
                          <span className="px-3 text-lg opacity-75 -mb-1 text-center text-[#FF8B1F] rounded-xl bg-[#FFF3E9] ">
                            {product?.category}
                          </span>
                        </div>
                        <div className="flex justify-center pt-5">
                          <span className=" text-lg  text-center text-black capitalize ">
                            {product?.name}
                          </span>
                        </div>
                        <div className="flex justify-between gap-2  items-center pt-3">
                          <span className="  text-sm text-black flex font-medium">
                            <span>&#8358;</span> <span>{product?.price}</span>
                          </span>
                          <span>
                            {" "}
                            <AiOutlineHeart className="text-2xl text-black" />
                          </span>
                          <span
                            className={`${
                              cartClicked === product.id && "bg-orange-200/50 "
                            } bg-white  rounded-full  text-xs font-bold  leading-none flex items-center`}
                          >
                            <BsCart3
                              className="text-2xl text-[#FF8B1F] cursor-pointer"
                              onClick={() => cartAdd(product)}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SuperMarket;
