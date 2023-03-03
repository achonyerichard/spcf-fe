import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const verifyNumber = () => {
    setStep(step + 1);
  };
  const otpChange = () => {
    setStep(step + 1);
  };
  const confirmPassword=()=>{
    setStep(step + 1);
  }
  return (
    <>
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

            {step === 1 && (
              <form
                action=""
                className="flex flex-col gap-4"
                onSubmit={verifyNumber}
              >
                <div className="mt-8">
                  <label
                    className="block  tracking-wide text-gray-700 text-lg font-medium mb-2"
                    htmlFor="grid-first-name"
                  >
                    Phone Number
                  </label>
                  <input
                    className="p-4   border w-full"
                    type="email"
                    name="email"
                    placeholder="+1  (000) 000-0000"
                  />
                </div>

                <button className="bg-[#FF8B1F] rounded-3xl text-white py-3 hover:scale-105 duration-300 my-10">
                  Submit
                </button>
              </form>
            )}

            {step === 2 && (
              <>
                <h1 className="text-[#828282] text-lg mt-10 text-center">
                  Please kindly insert the 4 digit code sent to 080******32
                </h1>
                <form
                  action=""
                  className="flex flex-col gap-4 pt-3"
                  onSubmit={otpChange}
                >
                  <div className="flex flex-row flex-wrap justify-center space-x-4">
                    <input
                      className="w-12 mb-4 rounded border border-gray-200 p-3 text-center appearance-none bg-[#EEEEEE]"
                      type="text"
                      maxlength="1"
                    />
                    <input
                      className="w-12 mb-4 rounded border border-gray-200 p-3 text-center appearance-none bg-[#EEEEEE]"
                      type="text"
                      maxlength="1"
                    />
                    <input
                      className="w-12 mb-4 rounded border border-gray-200 p-3 text-center appearance-none bg-[#EEEEEE]"
                      type="text"
                      maxlength="1"
                    />
                    <input
                      className="w-12 mb-4 rounded border border-gray-200 p-3 text-center appearance-none bg-[#EEEEEE]"
                      type="text"
                      maxlength="1"
                    />
                  </div>
                  <button className="bg-[#FF8B1F] rounded-3xl text-white py-3 hover:scale-105 duration-300">
                    Continue
                  </button>
                </form>
              </>
            )}

            {step === 3 && (
              <form
                action=""
                className="flex flex-col gap-4"
                onSubmit={confirmPassword}
              >
                <div className=" mt-8">
                  <label
                    className="block  tracking-wide text-gray-700 text-lg font-medium mb-2"
                    htmlFor="grid-first-name"
                  >
                    Confirm Password
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
                <div className=" mt-3">
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

                <button className="bg-[#FF8B1F] rounded-3xl text-white py-3 hover:scale-105 duration-300 my-10">
                  Submit
                </button>
              </form>
            )}
          
          </div>
         
        </div>
        {step === 4 && (
              <div className="bg-[#F7F7F7]   shadow-xl w-[424px] p-5 items-center">
                <div className="md:w-full px-5">
                  <div className="flex justify-center ">
                    <img
                      // src={logo}
                      src={"/img/success.png"}
                      alt=" Logo"
                    />
                  </div>
                  <h1 className="text-black text-xl pt-5 text-center leading-6">
                  You Have Successfully 
                    <br /> Changed Password
                  </h1>
                  <p className="text-[#828282] text-lg pt-5 text-center">
                  Password have been changed to your desired password. Kindly keep it private.
                   
                  </p>
                  <button className="bg-[#FF8B1F] rounded-3xl text-white py-3 hover:scale-105 duration-300 w-full mt-10">
                    Go to Login
                  </button>
                </div>
              </div>
            )}
        {step > 1 && step < 4 && (
          <div className="bg-[#F7F7F7] mt-10  shadow-xl w-[424px] p-5 items-center">
            <div className=" text-md flex justify-center items-center text-black">
              <p
                className="font-medium text-[#FF8B1F] text-center cursor-pointer"
                onClick={prevStep}
              >
                Back
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ForgotPassword;
