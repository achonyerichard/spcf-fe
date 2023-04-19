import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import axios from "axios";

const Otp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [formValues, setFormValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
  });
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);
  const input6Ref = useRef(null);

  const { user } = useAuthContext();

  const start = user?.phone.toString().slice(0, 6);
  const end = user?.phone.toString().slice(-3);
  const middle = "*****";
  const newPhone = start + middle + end;

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });

    if (e.target.value.length === e.target.maxLength) {
      switch (e.target) {
        case input1Ref.current:
          input2Ref.current.focus();
          break;
        case input2Ref.current:
          input3Ref.current.focus();
          break;
        case input3Ref.current:
          input4Ref.current.focus();
          break;
        case input4Ref.current:
          input5Ref.current.focus();
          break;
          case input5Ref.current:
            input6Ref.current.focus();
            break;
        default:
          break;
      }
    }
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const code = parseInt(
      `${formValues.input1}${formValues.input2}${formValues.input3}${formValues.input4}${formValues.input5}${formValues.input6}`
    );
    const response = await axios.post(
      `http://spcf-api.onrender.com/confirm-account`,
      code
    );

    console.log("res",response);
    const json = await response.data;
    console.log("res",json);
    if (json.err) {
      setIsLoading(false);
      setError(json.err);
      console.log("welcome");
    }
    if (!json.err) {
      console.log("welcome");
      setIsLoading(false);
      setSuccess(true);
    }
  };
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
                {` Please kindly insert the 4 digit code sent to  ${
                  newPhone ? newPhone : "080******32"
                }`}
              </h1>
              <form
                action=""
                className="flex flex-col gap-4 pt-3"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-row flex-wrap justify-center space-x-4">
                  <input
                    className=" w-12 mb-4 rounded border border-gray-200 p-3 text-center appearance-none bg-[#EEEEEE]"
                    type="number"
                    maxLength="1"
                    name="input1"
                    ref={input1Ref}
                    value={formValues.input1}
                    onChange={handleInputChange}
                  />
                  <input
                    className="w-12 mb-4 rounded border border-gray-200 p-3 text-center appearance-none bg-[#EEEEEE]"
                    type="number"
                    maxLength="1"
                    name="input2"
                    ref={input2Ref}
                    value={formValues.input2}
                    onChange={handleInputChange}
                  />
                  <input
                    className="w-12 mb-4 rounded border border-gray-200 p-3 text-center appearance-none bg-[#EEEEEE]"
                    type="number"
                    maxLength="1"
                    name="input3"
                    ref={input3Ref}
                    value={formValues.input3}
                    onChange={handleInputChange}
                  />
                  <input
                    className="w-12 mb-4 rounded border border-gray-200 p-3 text-center appearance-none bg-[#EEEEEE]"
                    type="number"
                    maxLength="1"
                    name="input4"
                    ref={input4Ref}
                    value={formValues.input4}
                    onChange={handleInputChange}
                  />
                  <input
                    className="w-12 mb-4 rounded border border-gray-200 p-3 text-center appearance-none bg-[#EEEEEE]"
                    type="number"
                    maxLength="1"
                    name="input5"
                    ref={input5Ref}
                    value={formValues.input5}
                    onChange={handleInputChange}
                  />
                  <input
                    className="w-12 mb-4 rounded border border-gray-200 p-3 text-center appearance-none bg-[#EEEEEE]"
                    type="number"
                    maxLength="1"
                    name="input6"
                    ref={input6Ref}
                    value={formValues.input6}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                 
                  className="bg-[#FF8B1F] rounded-3xl text-white py-3 hover:scale-105 duration-300"
                >
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
              <Link to="/onboarding">
                <button className="bg-[#FF8B1F] rounded-3xl text-white py-3 hover:scale-105 duration-300 w-full mt-10">
                  Proceed to Dashboard
                </button>
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Otp;
