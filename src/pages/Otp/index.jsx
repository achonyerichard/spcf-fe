import React, { useState } from "react";

const Otp = () => {
  const [success, setSuccess] = useState(false);
  return (
    <div>
      <section className=" min-h-screen flex flex-col items-center justify-center">
        {!success ? (
          <div className="bg-[#F7F7F7]   shadow-xl w-[424px] p-5 items-center">
            <div className="md:w-full px-5">
              <div className="flex justify-center ">
                <img
                  // src={logo}
                  src={"/img/logo.png"}
                  alt=" Logo"
                />
              </div>
              <h1 className="text-[#828282] text-lg mt-10 text-center">
                Please kindly insert the 4 digit code sent to 080******32
              </h1>
              <form action="" className="flex flex-col gap-4 pt-3">
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
                  Submit
                </button>
              </form>
            </div>
          </div>
        ) : (
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
                <br /> Created an Account
              </h1>
              <p className="text-[#828282] text-lg pt-5 text-center">
                Hurray you have now become a beneficiary of the{" "}
                <span className="text-[#FBCF09]">SPCF feeding</span> scheme. You
                will be notified on your next process.
              </p>
              <button className="bg-[#FF8B1F] rounded-3xl text-white py-3 hover:scale-105 duration-300 w-full mt-10">
              Proceed to Dashboard
            </button>
            </div>
           
          </div>
        )}
      </section>
    </div>
  );
};

export default Otp;
