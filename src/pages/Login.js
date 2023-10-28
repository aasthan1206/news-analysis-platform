import newsV6 from "../assets/images/newsV6.jpg";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [viewPassword, setViewPassword] = useState(false);
  // const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { formData };
      const response = await fetch("http://localhost:5002/auth/login ", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await response.json();
      if (response.status === 401) {
        return alert("Invalid Credentials");
      } else {
        const accessToken = data.accessToken;
        const refreshToken = data.refreshToken;
        const userId = data.userId;
        navigate("/");
        login(accessToken);
        console.log(data);
        // Store the tokens in local storage
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("userId", userId);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="flex justify-between items-center bg-primary px-16 py-16">
      <div className="w-2/3 shadow-lg shadow-grey-medium">
        <img src={newsV6} alt="login" />
      </div>
      <form action="" onSubmit={onFormSubmit} className="mr-12">
        <div className="text-grey-dark text-3xl font-bold pb-6">
          Sign <span className="text-red-dark">In</span>
        </div>
        <div>
          <label htmlFor="" className="text-grey-dark font-bold">
            Email<span className="text-red-500">*</span>
          </label>
          <br />
          <input
            type="email"
            name="email"
            placeholder=""
            value={formData.email}
            onChange={handleChange}
            className="border-2 rounded-sm my-2 px-2 py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="" className="text-grey-dark font-bold">
            Password<span className="text-red-500">*</span>
          </label>
          <br />
          <input
            type={viewPassword ? "text" : "password"}
            name="password"
            placeholder=""
            value={formData.password}
            onChange={handleChange}
            className="border-2 rounded-sm my-2 px-2 py-1 w-full"
          />
          <div
            className="text-sm text-grey-medium font-semibold cursor-pointer"
            onClick={() => {
              setViewPassword(!viewPassword);
            }}
          >
            View Password
          </div>
        </div>
        <div>
          <button className="bg-grey-dark font-bold text-white px-4 py-2 rounded-sm hover:bg-red-dark mx-auto flex my-2">
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
