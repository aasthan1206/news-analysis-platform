import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { FaUserAlt } from "react-icons/fa";
import cx from "classnames";
import logo from "../../assets/images/logo.png"

const NavBar = () => {
  const NavBarData = [
    {
      id: 1,
      title: `HOME`,
      to: "/",
    },
    // {
    //   id: 2,
    //   title: `RESOURCES`,
    //   to: "/Resources",
    // },
    {
      id: 3,
      title: `ABOUT US`,
      to: "/About",
    },
    {
      id: 4,
      title: `CONTACT US`,
      to: "/Contact",
    },
    {
      id: 5,
      title: `FAQS`,
      to: "/FAQs",
    },
    // {
    //   id: 6,
    //   title: `Fetch News`,
    //   to: "/NewsFetch",
    // },
    {
      id: 7,
      title: `FEEDBACK`,
      to: "/Feedback",
    },
  ];

  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [itemName, setItemName] = useState(-1);

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
    <div className="bg-grey-dark text-primary flex justify-between px-10 h-12 items-center">
      <div className="">
        {" "}
        <Link to={"/Landing"} className="hover:underline cursor-pointer text-grey-light">
          <img src={logo} alt="logo" className="w-1/2"/>
        </Link>
      </div>
      <div className="bg-grey-dark text-grey-light flex gap-12 items-center">
        {NavBarData?.map((item) => (
          <div onClick={()=>setItemName(item.id)} key={item.id} className={cx("hover:text-red-dark", {"bg-red-dark text-grey-light hover:!text-grey-light hover:font-normal px-2 py-2.5" : itemName === item.id})}>
            <Link to={item.to} className="">
              {item.title}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex">
        {isAuthenticated ? (
          <div className="flex gap-8">
            <Link
              onClick={()=>{onLogout()
              setItemName(-1)}}
              className="text-grey-dark text-lg font-semibold bg-grey-light px-4 py-2 rounded-sm hover:bg-grey-dark hover:text-red-dark mx-auto"
            >
              Logout
            </Link>
            <Link onClick={()=>setItemName(11)} to={"/Profile"} className="cursor-pointer self-center">
              <FaUserAlt className={cx("h-6 w-6 text-grey-light hover:text-red-dark", {"text-red-dark": itemName===11})} />
            </Link>
          </div>
        ) : (
          <div>
            <Link
              to={"/Login"}
              onClick={()=>setItemName(-1)}
              className="bg-red-dark text-lg font-semibold text-grey-light px-4 py-2 rounded-l-md hover:bg-grey-dark hover:text-red-dark mx-auto"
            >
              Login
            </Link>
            <Link
              to={"/SignUp"}
              onClick={()=>setItemName(-1)}
              className="bg-grey-light text-lg font-semibold text-grey-dark px-4 py-2 rounded-r-md mx-auto my-2 hover:text-red-dark hover:bg-grey-dark"
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
