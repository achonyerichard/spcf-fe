import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { dispatch } = useAuthContext();

  const signup = async (data) => {
    setIsLoading(true);
    setError(null);
    console.log("hi", data);
    const response = await axios.post(
      `https://spcf-api.onrender.com/beneficiary/`,
      data
    );
    const json = await response.data;
    console.log(json);
    if (json.err) {
      setIsLoading(false);
      setError(json.err);
    }
    if (!json.err) {
      console.log("welcome");

      localStorage.setItem("user", JSON.stringify(json.beneficiary));

      dispatch({ type: "LOGIN", payload: json.beneficiary });
      setIsLoading(false);
      navigate("/otp");
    }
  };
  return { signup, isLoading, error };
};

export default useSignUp;
