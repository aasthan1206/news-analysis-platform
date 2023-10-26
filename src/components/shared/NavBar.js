import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { FaUserAlt } from "react-icons/fa";

const NavBar = () => {
  const NavBarData = [
    {
      id: 1,
      title: `Home`,
      to: "/",
    },
    {
      id: 2,
      title: `Resources`,
      to: "/Resources",
    },
    {
      id: 3,
      title: `About Us`,
      to: "/About",
    },
    {
      id: 4,
      title: `Contact Us`,
      to: "/Contact",
    },
    {
      id: 5,
      title: `FAQs`,
      to: "/FAQs",
    },
    {
      id: 6,
      title: `Fetch News`,
      to: "/NewsFetch",
    },
  ];

  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);

  const onLogout = async (e) => {
    try {
      const response = await fetch("http://localhost:5002/auth/refresh_token", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: null,
      });
      // localStorage.setItem("authenticated", false);
      logout();
      localStorage.removeItem("accessToken"); // Remove the access token
      localStorage.removeItem("refreshToken"); // Remove the refresh token
      localStorage.removeItem("userId");
      navigate("/Landing");
      console.log("successful logout");
    } catch (err) {
      console.err(err.message);
    }
  };

  return (
    <div className="bg-grey-dark text-primary flex justify-between p-10 h-20 items-center">
      <div className="p-10">
        {" "}
        <Link to={"/Landing"} className="hover:underline cursor-pointer">
          LOGO
        </Link>
      </div>
      <div className="bg-grey-dark text-lg		 text-primary gap-12 flex  items-center">
        {NavBarData?.map((item) => (
          <Link
            to={item.to}
            key={item.id}
            className="hover:underline cursor-pointer"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex">
        {isAuthenticated ? (
          <div className="flex gap-8">
            <Link
              onClick={onLogout}
              className="bg-primary text-lg font-semibold text-grey-dark px-4 py-2 rounded-sm hover:bg-grey-dark hover:text-primary  mx-auto"
            >
              Logout
            </Link>
            <Link to={"/Profile"} className="cursor-pointer self-center">
              <FaUserAlt className="h-6 w-6" />
            </Link>
          </div>
        ) : (
          <div>
            <Link
              to={"/Login"}
              className="bg-primary text-lg font-semibold text-grey-dark px-4 py-2 rounded-l-md hover:bg-grey-dark hover:text-primary  mx-auto"
            >
              Login
            </Link>
            <Link
              to={"/SignUp"}
              className="bg-grey-medium text-lg	font-semibold text-primary px-4 py-2 rounded-r-md mx-auto my-2 hover:bg-grey-dark"
            >
              SignUp
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
