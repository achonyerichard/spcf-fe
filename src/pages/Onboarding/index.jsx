import React, { useState } from "react";
import { Link } from "react-router-dom";

const Onboarding = () => {
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
  const confirmPassword = () => {
    setStep(step + 1);
  };

  const uploadAvatar = () => {
    setStep(step + 1);
  };
  const uploadSignature = () => {
    setStep(step + 1);
  };
  return (
    <>
      <section className=" min-h-screen flex flex-col items-center justify-center">
        {step >= 1 && step < 6 && (
          <div className="mx-auto   flex justify-center gap-4 w-[424px]">
            <div
              className={`w-1/5 h-1 transition-all ease-in-out duration-500 ${
                step === 1 ? " bg-[#FF8B1F]" : "bg-[#ECEBE9]"
              }`}
            ></div>
            <div
              className={`w-1/5 h-1 transition-all ease-in-out duration-500 ${
                step === 2 ? " bg-[#FF8B1F]" : "bg-[#ECEBE9]"
              }`}
            ></div>
            <div
              className={`w-1/5 h-1 transition-all ease-in-out duration-500 ${
                step === 3 ? " bg-[#FF8B1F]" : "bg-[#ECEBE9]"
              }`}
            ></div>
            <div
              className={`w-1/5 h-1 transition-all ease-in-out duration-500 ${
                step === 4 ? " bg-[#FF8B1F]" : "bg-[#ECEBE9]"
              }`}
            ></div>
            <div
              className={`w-1/5 h-1 transition-all ease-in-out duration-500 ${
                step === 5 ? " bg-[#FF8B1F]" : "bg-[#ECEBE9]"
              }`}
            ></div>
          </div>
        )}
        <div className="bg-white  w-[424px] p-5 flex justify-center items-center mt-20">
          <div className="md:w-full px-5">
            {step === 1 && (
              <>
                <div className="flex justify-center flex-col items-center gap-4">
                  <img
                    // src={logo}
                    src={"/img/emoji.png"}
                    alt=" Logo"
                    className="w-7 h-7"
                  />

                  <h1 className="font-medium text-3xl text-center text-black">
                    <span className="text-[#FBCF09]">Hi!</span> Richard Achonye
                  </h1>
                  <p className="text-[#828282] text-lg text-center">
                    Lets get you started already.
                  </p>
                </div>
                <form
                  action=""
                  className="flex flex-col gap-4"
                  onSubmit={verifyNumber}
                >
                  <div className="mt-8">
                    <label
                      className="block  tracking-wide text-[#605B47] text-lg font-medium "
                      htmlFor="grid-first-name"
                    >
                      Date of Birth
                    </label>
                    <input
                      className="p-4   border w-full bg-[#EEEEEE]"
                      type="date"
                      name="email"
                      placeholder="+1  (000) 000-0000"
                    />
                  </div>

                  <div className="mt-2">
                    <label
                      className="block  tracking-wide text-[#605B47] text-lg font-medium "
                      htmlFor="grid-first-name"
                    >
                      Gender
                    </label>
                    <select
                      name=""
                      id=""
                      className="appearance-none block w-full bg-appWhite text-appBlack border bg-[#EEEEEE] rounded py-4 px-4 mb-3 leading-tight focus:outline-none "
                    >
                      <option value="">Select your Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <button className="bg-[#FF8B1F] rounded-3xl text-white py-3 hover:scale-105 duration-300 my-10">
                    Next
                  </button>
                </form>
              </>
            )}

            {step === 2 && (
              <div className="">
                <div className="flex justify-center flex-col items-center gap-4">
                  <h1 className="font-medium text-3xl text-center text-black">
                    Where Do You Reside
                  </h1>
                  <p className="text-[#828282] text-lg text-center">
                    Your country of residence, state, LGA
                  </p>
                </div>
                <form
                  action=""
                  className="flex flex-col gap-4"
                  onSubmit={verifyNumber}
                >
                  <div className="mt-8">
                    <label
                      className="block  tracking-wide text-[#605B47] text-lg font-medium "
                      htmlFor="grid-first-name"
                    >
                      Country
                    </label>
                    <select
                      name=""
                      id=""
                      className="appearance-none block w-full bg-appWhite text-appBlack border bg-[#EEEEEE] rounded py-4 px-4 mb-3 leading-tight focus:outline-none "
                    >
                      <option value="">Select your Country</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="mt-2">
                    <label
                      className="block  tracking-wide text-[#605B47] text-lg font-medium "
                      htmlFor="grid-first-name"
                    >
                      State of Residence
                    </label>
                    <select
                      name=""
                      id=""
                      className="appearance-none block w-full bg-appWhite text-appBlack border bg-[#EEEEEE] rounded py-4 px-4 mb-3 leading-tight focus:outline-none "
                    >
                      <option value="">Select your State</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div className="mt-2">
                    <label
                      className="block  tracking-wide text-[#605B47] text-lg font-medium "
                      htmlFor="grid-first-name"
                    >
                      Local Government Area
                    </label>
                    <select
                      name=""
                      id=""
                      className="appearance-none block w-full bg-appWhite text-appBlack border bg-[#EEEEEE] rounded py-4 px-4 mb-3 leading-tight focus:outline-none "
                    >
                      <option value="">Select your LGA</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <button className="bg-[#FF8B1F] rounded-3xl text-white py-3 hover:scale-105 duration-300 my-10">
                    Next
                  </button>
                </form>
              </div>
            )}

            {step === 3 && (
              <div className="">
                <div className="flex justify-center flex-col items-center gap-4">
                  <h1 className="font-medium text-3xl text-center text-black">
                    Your Photo Identity
                  </h1>
                  <p className="text-[#828282] text-lg text-center">
                    Let’s have your photo for identity recognition
                  </p>
                </div>

                <form action="" className="" onSubmit={uploadAvatar}>
                  <div className=" mt-8 flex flex-col ">
                    <div className="bg-[#F6F6F6] py-10 flex flex-col gap-5">
                      <p className="text-[#828282] text-lg text-center">
                        Drop files here to upload…
                      </p>
                      <label class=" flex flex-col w-32 mx-auto justify-center items-center px-4 py-1 bg-[#EEEEEE] text-black font-semibold rounded-full shadow-lg tracking-wide   cursor-pointer hover:bg-blue hover:text-white">
                        <span class=" leading-normal text-xs text-black">
                          Browse Files
                        </span>
                        <input type="file" class="hidden" />
                      </label>
                    </div>
                  </div>

                  <button className="bg-[#FF8B1F] w-full rounded-3xl text-white py-3 hover:scale-105 duration-300 my-10">
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
        {step === 4 && (
          <div className="">
            <div className="flex justify-center flex-col items-center gap-4">
              <h1 className="font-medium text-3xl text-center text-black">
                Upload Your Signature
              </h1>
              <p className="text-[#828282] text-lg text-center">
                We are almost there.
              </p>
            </div>

            <form action="" className="" onSubmit={uploadSignature}>
              <div className=" mt-8 flex flex-col ">
                <div className="bg-[#F6F6F6] py-5 flex flex-col gap-5">
                  <p className="text-[#828282] text-lg text-center">
                    Drop files here to upload…
                  </p>
                  <label class=" flex flex-col w-32 mx-auto justify-center items-center px-4 py-1 bg-[#EEEEEE] text-black font-semibold rounded-full shadow-lg tracking-wide   cursor-pointer hover:bg-blue hover:text-white">
                    <span class=" leading-normal text-xs text-black">
                      Browse Files
                    </span>
                    <input type="file" class="hidden" />
                  </label>
                </div>
              </div>

              <button className="bg-[#FF8B1F] w-full rounded-3xl text-white py-3 hover:scale-105 duration-300 my-10">
                Submit
              </button>
             
            </form>
          </div>
        )}
        {step === 5 && (
          <>
            <div className="flex justify-center flex-col items-center gap-4">
              <img
                // src={logo}
                src={"/img/confirm.png"}
                alt=" Logo"
                className="w-16 h-16"
              />

              <h1 className="font-medium text-xl text-center text-black">
                Confirm Your Details
              </h1>
              <p className="text-[#828282] text-lg text-center">
                Please kindly confirm your details <br /> before submitting.
              </p>

              <button
                className="bg-[#FF8B1F] rounded-3xl w-[375px] text-white py-3 hover:scale-105 duration-300 my-10"
                onClick={() => setStep(step + 1)}
              >
                Submit
              </button>
            </div>
          </>
        )}
        {step === 6 && (
          <>
            <div className="flex justify-center flex-col items-center gap-4">
              <img
                // src={logo}
                src={"/img/success.png"}
                alt=" Logo"
                className="w-16 h-16"
              />

              <h1 className="font-medium text-xl text-center text-black">
                We Are Glad To Have You Onboard.
              </h1>
              <p className="text-[#828282] text-lg text-center">
                Your Application ID is 0001899.
                <br /> Keep it safe.
              </p>

              <button className="bg-[#FF8B1F] rounded-3xl w-[375px] text-white py-3 hover:scale-105 duration-300 mt-10 mb-5">
                Print Slip
              </button>
              <Link to="/">
              <p className="text-[#828282] text-lg text-center underline" >
                    Close
                  </p>
              </Link>
              
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Onboarding;
