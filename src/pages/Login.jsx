import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const { login } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.toLowerCase() === "admin@aa.com" && pass === "admin") {
      // console.log({ email, pass })
      login({ email, pass })
    } else {
      alert("User information is incorrect")
    }

  }
  return (
    <div className="loginDiv">

      <div className="h-[500px] w-11/12 sm:w-[475] bg-white rounded-[20px] p-5 flex flex-col justify-center text-center">

        <div className="flex justify-center items-center mt-2 gap-2">
          <span className="w-[6px] h-[39px] bg-red-800"></span>
          <h1 className="text-[22px] sm:text-[32px] font-montserrat font-[700] uppercase">Kovach Store</h1>
        </div>

        <div className="my-2">
          <h3 className="fint-montserrat font-[600] text-[22px]">SIGN IN</h3>
          <p className="font-montserrat text-labelColor text-label mt-1">Enter your credentials to access to your account.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-left p-3 gap-5">

          <div className="flex flex-col gap-2">

            <label
              className="font-montserrat text-label text-labelColor
              hover:after:content-['admin@aa.com']
              hover:after:text-black 
              hover:after:pl-3 
              hover:after:underline
              hover:cursor-pointer"
              htmlFor="email">
              Email
            </label>
            <input
              className="login-input"
              type="email"
              id="email"
              placeholder="Enter your E-mail"
              required
              onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="flex flex-col gap-2">

            <label
              className="font-montserrat text-label text-labelColor
              hover:after:content-['admin']
              hover:after:text-black
              hover:after:pl-3
              hover:after:underline
              hover:cursor-pointer"
              htmlFor="password">
              Password
            </label>

            <input
              className="login-input"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              onChange={(e) => setPass(e.target.value)} />
          </div>

          <button className="bg-main h-[44px] font-montserrat text-label text-white upercase hover:opacity-90 rounded-[4px]">
            Sign in
          </button>

          <div className="flex justify-center items-center flex-wrap">
            <span className="text-label font-montserrat font-[400] text-labelColor">
              Forgot your password?
            </span>

            <span className="text-main text-[14px] font-montsrrat font-[500] underline ml-1 cursor-pointer">
              Reset your password here
            </span>
          </div>
        </form>


      </div>
    </div>
  );
};

export default Login;
