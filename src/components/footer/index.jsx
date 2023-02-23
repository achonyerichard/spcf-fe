import React from 'react'
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'


const Footer = () => {
    const d = new Date();
let year = d.getFullYear();
  return (
    <>
      <footer
        className={`footer-1  py-8 sm:py-12 bg-[#2C2917] bg-[url('../public/img/footer-bg.png')] bg-blend-multiply bg-right-top bg-no-repeat bg-contain`}
      >
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4 lg:mb-40 mb-10">
            <div className="px-4 w-1/2 md:w-1/4 xl:w-1/6">
              <img
                // src={logo}
                src={"/img/footer-logo.png"}
                alt="We The Youths Logo"
              />
            </div>
            <div className="px-4 w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <ul className="list-none footer-links space-y-6">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-[#898989]"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-[#898989]"
                  >
                    What we do
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-[#898989]"
                  >
                    Testimonials
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-[#898989]"
                  >
                    Schemes
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-[#898989]"
                  >
                    FAQS
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <ul className="list-none footer-links space-y-6">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-[#898989]"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-[#898989]"
                  >
                    Supports
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-[#898989]"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-[#898989]"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="px-4 mt-4 sm:w-1/3 xl:w-1/3 sm:mx-auto xl:mt-0 xl:ml-auto">
              <div className="text-white text-2xl lg:text-[2.188rem] lg:pb-5">
                Subscribe to Our Newsletter
              </div>
              {/* <p className="text-appWhite text-lg  lg:text-xl lg:font-medium ">
              Subscribe to our mailing list and get information for upcoming
              events and other opportunities. Get the Newsletter .
            </p> */}

              <div className="mt-4 flex items-center gap-2">
                <div className='w-2/3 lg:w-full'>
                  <input
                    className="border-[1px] border-appGreen p-2 text-appWhite bg-appBlack w-full lg:w-[346px] lg:h-[50px] lg:rounded-l-[5px] lg:rounded-l-b-[5px]  placeholder:text-appWhite"
                    placeholder="Email Address"
                  />
                </div>

                <div className="flex justify-center py-2 w-1/3 lg:w-full">
                  <button className="text-appWhite bg-[#FF8B1F]  lg:w-[146px] lg:h-[50px] h-[40px] rounded-r-[5px] rounded-r-b-[5px] px-2 py-1">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="text-white text-4xl flex justify-center lg:justify-start pt-2">
                <div className="mr-4">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="mr-4">
                  <FaFacebookSquare className="text-2xl" />
                </div>

                <div className="mr-4">
                  <FaTwitter className="text-2xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 lg:pt-20 sm:mt-12 sm:pt-12 border-t justify-center">
            <h1 className="text-white text-center">
              {" "}
              © {year} All rights reserved .{" "}
            </h1>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer