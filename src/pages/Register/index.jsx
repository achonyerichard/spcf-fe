import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import flags from 'country-flag-icons/react/3x2'
import { Link } from "react-router-dom";

const Register = () => {
    const [phonevalue, setPhoneValue] = useState("");
  return (
    <div>
      <section className=" min-h-screen flex flex-col items-center justify-center">
        <div className="bg-[#F7F7F7]   shadow-xl w-[424px] p-5 items-center">
          <div className="md:w-full px-5">
            <div className="flex justify-center ">
              <img
                // src={logo}
                src={"/img/logo.png"}
                alt=" Logo"
              />
            </div>

            <form action="" className="flex flex-col gap-4">
              <div className="mt-8">
                <label
                  className="block  tracking-wide text-gray-700 text-lg  mb-2"
                  htmlFor="grid-first-name"
                >
                  Full Name
                </label>
                <input
                  className="p-4   border w-full"
                  type="email"
                  name="email"
                  placeholder="Username, Email, Name"
                />
              </div>
              <div className={`phone-container flex flex-col `}>
                <label htmlFor="phone" className="text-black">
                  Phone number
               
                </label>

                <PhoneInput
                  international
                  defaultCountry="US"
                  countryCallingCodeEditable={false}
                  inputprops={{
                    name: "phone",
                    country: "us",
                    required: true,
                    autoFocus: true,
                  }}
                  value={phonevalue}
                  onChange={(phone)=>{ setPhoneValue(phone)
                  console.log("hey",phone);
                  
                  }}
                 
                  className="appearance-none flex placeholder:py-4 w-full bg-white
                   text-appBlack  rounded py-3 px-4  leading-tight focus:outline-none  "
                  style={{ backgroundColor: "white" }}
                  containerclassName=""
                />
              </div>
              <div className=" ">
                <label
                  className="block  tracking-wide text-gray-700 text-lg font-medium mb-2"
                  htmlFor="grid-first-name"
                >
                  Password
                </label>
                <div className="relative">
                <input
                  className="p-4  border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>

                </div>
               
                
              </div>
              <div className=" ">
                <label
                  className="block  tracking-wide text-gray-700 text-lg font-medium mb-2"
                  htmlFor="grid-first-name"
                >
                 Confirm Password
                </label>
                <div className="relative">
                <input
                  className="p-4  border w-full "
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 "
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
                </div>
                
              </div>

              <div className="mt-5">
            <label className="inline-flex items-center">
              <input type="checkbox" className="rounded border-gray-300 bg-[#ECEBE9] text-[#FF8B1F] "  />
              <p className="ml-2 text-lg text-[#908D7E]">By clicking you have agreed to the <span  className="font-semibold text-[#605B47] hover:underline pr-1">Terms</span>and <span  className="font-semibold text-[#605B47] hover:underline">Conditions.</span> </p>
            </label>
          </div>
              <button className="bg-[#FF8B1F] rounded-3xl text-white py-3 hover:scale-105 duration-300">
                Create Account
              </button>
            </form>
          </div>
        </div>
        <div className="bg-[#F7F7F7] mt-10  shadow-xl w-[424px] p-5 items-center">
          <div className=" text-md flex justify-center items-center text-black">
            <p className="font-medium">
              You  have an account?
            <Link to="/login"> <span className="text-[#FF8B1F]"> Sign In</span></Link> 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
