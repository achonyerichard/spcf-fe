import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BsFillQuestionCircleFill, BsPlusLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useAuthContext } from "../../hooks/useAuthContext";


const Navigation = () => {
  const { user } = useAuthContext();

  const [isActive, setIsActive] = useState(false);
  const [nav, setNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [about, setAbout] = useState(false);
  const [services, setServices] = useState(false);
  const [profile,setProfile] =useState(false)

  // hamburger toggle
  const handleHamburger = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  if (typeof window !== "undefined") {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNav(true);
      } else {
        setNav(false);
      }
    };

    window.addEventListener("scroll", changeBackground);
  }

  return (
    <nav
      className={
        nav
          ? `top-0 bg-[#FCD733] z-10 nav fixedTop active shadow-lg`
          : `nav fixedTop top-0 bg-[#FCD733] z-10 shadow-lg`
      }
    >
      <div className="md:max-w-[1920px] w-full px-4 mx-auto lg:px-20">
        <div className="flex lg:justify-between">
          <div className="flex lg:justify-between lg:items-center w-full">
            <div className="">
              <Link to={"/"}>
                {nav ? (
                  <div
                    className={`flex flex-col items-center justify-center ${
                      nav && "transition-all ease-in-out duration-300"
                    } `}
                  >
                    <img
                      // src={logo}`
                      className="w-10 h-12"
                      src={"/img/logo2.png"}
                      alt=" Logo"
                    />
                    <h1 className="text-black font-semibold text-xl">SPCF</h1>
                  </div>
                ) : (
                  <img
                    // src={logo}

                    src={"/img/logo.png"}
                    alt=" Logo"
                  />
                )}
              </Link>
            </div>

            <div className="hidden lg:flex lg:w-full lg:px-14  justify-end items-center ">
              {" "}
              {/* lg:px-48 */}
              <ul className="text-[#3F3A21] font-medium lg:flex items-center justify-center  space-x-6">
                <li className={"lg:text-lg cursor-pointer"}>
                  <p
                    className="flex dropdown-toggle items-center whitespace-nowrap peer text-lg"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => {
                      setServices(false);
                      setAbout(!about);
                    }}
                  >
                    About Us{" "}
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </p>
                  <ul
                    className={
                      about
                        ? `peer-focus-visible:block dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none`
                        : `hidden`
                    }
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <Link
                        to="/about"
                        className=" dropdown-item text-lg py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100
            "
                        href="#"
                      >
                        What we do
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/gallery"
                        className=" dropdown-item text-lg py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100
            "
                        href="#"
                      >
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={"text-lg "}>
                  <Link to={"/news"}>News</Link>
                </li>

                <li className={"lg:text-xl cursor-pointer"}>
                  <p
                    className="flex dropdown-toggle items-center whitespace-nowrap peer text-lg"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => {
                      setAbout(false);
                      setServices(!services);
                    }}
                  >
                    Services{" "}
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </p>
                  <ul
                    className={
                      services
                        ? `peer-focus-visible:block dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none`
                        : `hidden`
                    }
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <Link
                        to="/career"
                        className=" dropdown-item text-lg py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100
            "
                        href="#"
                      >
                        Job Vacancies
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/centers"
                        className=" dropdown-item text-lg py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100
            "
                        href="#"
                      >
                        SPCF Centers
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className={"lg:text-lg "}>
                  <Link to={"/supermarket"}>Supermarket</Link>
                </li>
                <li className={"lg:text-lg "}>
                  <Link to={"/contact"}>Contact Us</Link>
                </li>
                <li className={"lg:text-lg "}>
                  <Link to={"/donation"}>Donate</Link>
                </li>

                <li className={"lg:text-lg "}>
                  {user ? (
                    <>
                    <img
                     onClick={() => {
                      setAbout(false);
                      setServices(false);
                      setProfile(!profile)
                    }}
                    className="object-cover rounded-full h-12 w-12 mx-auto cursor-pointer "
                    src={
                      user?.profile
                        ? user?.profile
                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    }
                    alt="Human Picture by Ike louie Natividad"
                  />
                  <ul
                  className={
                    profile
                      ? `peer-focus-visible:block dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none`
                      : `hidden`
                  }
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <p
                    
                      className=" dropdown-item text-lg py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100
          "
                      href="#"
                    >
                      Logout
                    </p>
                  </li>
                 
                </ul>
                </>
                  ) : (
                    <button className="text-white lg:p-2 bg-[#FF8B1F] lg:rounded-[5px]   lg:text-lg">
                    <Link to={"/login"}>Soup Kitchen</Link>
                  </button>
                  )}
                </li>
              </ul>
            </div>
          </div>

          {/* mobile */}
          <div className="flex items-center  lg:hidden ">
            <Link href="/" className="outline-none mobile-menu-button">
              <span onClick={handleHamburger}>
                {isActive ? (
                  <AiOutlineClose className="text-[#3F3A21] text-lg" />
                ) : (
                  <svg
                    className={` w-6 h-6 text-[#2C2917] hover:text-blue-900 `}
                    x-show="!showMenu"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                )}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* <!-- mobile menu --> */}
      {isActive && (
        <aside
          id="sidebar"
          className={`bg-white text-gray-100 md:w-64 w-3/4 space-y-6 h-screen pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition shadow-md  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation z-40  ease-in-out duration-300 lg:hidden ${
            isActive ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <div
            className="flex flex-col space-y-6"
            data-dev-hint="optional div for having an extra footer navigation"
          >
            <div className=""></div>

            <nav className="space-y-6">
              <p
                onClick={() => setIsActive(false)}
                className="flex items-center space-x-2 py-2 px-4 transition duration-200  text-[#2C2917]"
              >
                <Link
                  to="/"
                  className="block text-2xl px-2 py-4   text-[#2C2917] "
                >
                  <p className="text-2xl font-medium">Home</p>
                </Link>
              </p>
              <span
                onClick={() => setAbout(!about)}
                className="flex items-center space-x-2 py-2 px-6 transition duration-200  text-[#2C2917] group"
              >
                <p className="text-2xl font-medium transition text-[#2C2917] duration-300">
                  About
                </p>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </span>
              <div
                className={
                  about
                    ? `pl-5 block transition-opacity ease-in duration-300`
                    : `hidden ease-out `
                }
              >
                <p
                  onClick={() => setIsActive(false)}
                  className="flex items-center space-x-2 py-2 px-4 transition duration-200  text-[#2C2917] group"
                >
                  <Link
                    to="/about"
                    className="flex items-center gap-2 text-sm px-2 py-4  transition text-[#2C2917] duration-300"
                  >
                    <BsPlusLg className="text-lg rotate-45" />
                    <p className="text-2xl font-medium">What we do</p>
                  </Link>
                </p>
                <p
                  onClick={() => setIsActive(false)}
                  className="flex items-center space-x-2 py-2 px-4 transition duration-200  text-[#2C2917] group"
                >
                  <Link
                    to="/gallery"
                    className="flex items-center gap-2 text-sm px-2 py-4  transition text-[#2C2917] duration-300"
                  >
                    <BsPlusLg className="text-lg rotate-45" />
                    <p className="text-2xl font-medium">Gallery</p>
                  </Link>
                </p>
              </div>

              <p
                onClick={() => setIsActive(false)}
                className="flex items-center space-x-2 py-2 px-4 transition duration-200  text-[#2C2917]"
              >
                <Link
                  to="/news"
                  className="block text-2xl px-2 py-4  text-[#2C2917] transition duration-300"
                >
                  <p className="text-2xl font-medium">News</p>
                </Link>
              </p>
              <span
                onClick={() => setServices(!services)}
                className="flex items-center space-x-2 py-2 px-6 transition duration-200  text-[#2C2917] group"
              >
                <p className="text-2xl font-medium transition text-[#2C2917] duration-300">
                  Services
                </p>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </span>
              <div
                className={
                  services
                    ? `pl-5 block transition-opacity ease-in duration-300`
                    : `hidden ease-out `
                }
              >
                <p
                  onClick={() => setIsActive(false)}
                  className="flex items-center space-x-2 py-2 px-4 transition duration-200  text-[#2C2917] group"
                >
                  <Link
                    to="/career"
                    className="flex items-center gap-2 text-sm px-2 py-4  transition text-[#2C2917] duration-300"
                  >
                    <BsPlusLg className="text-lg rotate-45" />
                    <p className="text-2xl font-medium">Job Vacancies</p>
                  </Link>
                </p>
                <p
                  onClick={() => setIsActive(false)}
                  className="flex items-center space-x-2 py-2 px-4 transition duration-200  text-[#2C2917] group"
                >
                  <Link
                    to="/centers"
                    className="flex items-center gap-2 text-sm px-2 py-4  transition text-[#2C2917] duration-300"
                  >
                    <BsPlusLg className="text-lg rotate-45" />
                    <p className="text-2xl font-medium">SPCF Centers</p>
                  </Link>
                </p>
              </div>
              <p
                onClick={() => setIsActive(false)}
                className="flex items-center space-x-2 py-2 px-4 transition duration-200  text-[#2C2917] group"
              >
                <Link
                  to="/supermarket"
                  className="block text-sm px-2 py-4  transition text-[#2C2917] duration-300"
                >
                  <p className="text-2xl font-medium">SuperMarket</p>
                </Link>
              </p>
              <p
                onClick={() => setIsActive(false)}
                className="flex items-center space-x-2 py-2 px-4 transition duration-200  text-[#2C2917] group"
              >
                <Link
                  to="/contact"
                  className="flex items-center text-sm px-2 py-4  transition text-[#2C2917] duration-300"
                >
                  <p className="text-2xl font-medium">Contact</p>
                </Link>
              </p>
              <p
                onClick={() => setIsActive(false)}
                className="flex items-center space-x-2 py-2 px-4 transition duration-200  text-[#2C2917] group"
              >
                <Link
                  to="/donation"
                  className="block text-sm px-2 py-4  transition text-[#2C2917] duration-300"
                >
                  <p className="text-2xl font-medium">Donate</p>
                </Link>
              </p>
              <div  onClick={() => setIsActive(false)}   className="flex items-center space-x-2 py-2 px-4 transition duration-200  text-[#2C2917] group">
              <button className="text-white p-2 bg-[#FF8B1F] rounded-[5px]   text-lg">
                    <Link to={"/login"}>Soup Kitchen</Link>
                  </button>
              </div>

             
            </nav>
          </div>

        
        </aside>
      )}
    </nav>
  );
};

export default Navigation;
