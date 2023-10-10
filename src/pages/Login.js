import React from "react";
import newsV6 from "../assets/images/newsV6.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-between items-center bg-primary px-16 py-16">
      <div className="w-2/3 shadow-lg shadow-grey-medium">
        <img src={newsV6} alt="login" />
      </div>
      <form className="mr-12">
      <div className="text-grey-light text-3xl font-bold pb-6">Sign <span className="text-grey-dark">In</span></div>
        <div>
          <label htmlFor="" className="text-grey-dark font-bold">
            Email<span className="text-red-500">*</span>
          </label>
          <br />
          <input
            type="email"
            name="email"
            placeholder=""
            // value={formData.email}
            // onChange={handleChange}
            className="border-2 rounded-sm my-2 px-2 py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="" className="text-grey-dark font-bold">
            Password<span className="text-red-500">*</span>
          </label>
          <br />
          <input
            type="password"
            name="password"
            placeholder=""
            // value={formData.password}
            // onChange={handleChange}
            className="border-2 rounded-sm my-2 px-2 py-1 w-full"
          />
        </div>
        <div>
          <button className="bg-grey-dark font-bold text-primary px-4 py-2 rounded-sm hover:bg-grey-medium  mx-auto flex my-2">
            Login
          </button>
        </div>
        <div className="py-1 text-grey-dark">
            Not a member?
            <Link to={"/SignUp"} className="font-semibold  hover:underline">
              {" "}
              Sign Up
            </Link>
          </div>
      </form>
    </div>
  );
};

export default Login;
