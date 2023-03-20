import React, { useContext, useState } from "react";
import useLogin from "../../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, loading } = useLogin();

  async function handleSubmit(e) {
    e.preventDefault();
    await login(email, password)
  }
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

            <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="mt-8">
                <label
                  className="block  tracking-wide text-gray-700 text-lg font-medium mb-2"
                  htmlFor="grid-first-name"
                >
                  Username
                </label>
                <input
                  value={email}
                  className="p-4   border w-full"
                  type="email"
                  name="email"
                  placeholder="Username, Email,"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </div>

              <div className="relative mt-8">
                <label
                  className="block  tracking-wide text-gray-700 text-lg font-medium mb-2"
                  htmlFor="grid-first-name"
                >
                  Password
                </label>
                <input
                value={password}
                  className="p-4  border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
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

                <div className=" text-md  pt-2 text-[#908D7E] flex justify-end">
                  <Link to="/forgot-password">Forgot your password?</Link>
                </div>
              </div>
              <button disabled={loading} type="submit" className="bg-[#FF8B1F] rounded-3xl text-white py-3 hover:scale-105 duration-300">
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="bg-[#F7F7F7] mt-10  shadow-xl w-[424px] p-5 items-center">
          <div className=" text-md flex justify-center items-center text-black">
            <p className="font-medium">
              You don't have an account?
              <Link to="/register">
                <span className="text-[#FF8B1F]"> Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
