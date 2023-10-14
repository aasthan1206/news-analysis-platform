import React from "react";
import { Link } from "react-router-dom";

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
  ];

  return (
  <div className="bg-grey-dark text-primary flex justify-between p-10 h-20 items-center">
    <div className="p-10">LOGO</div>
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

      
    </div><div
        className="flex
    "
      >
        <button className="bg-grey-dark text-lg  text-primary px-4 py-2 rounded-sm hover:bg-grey-medium  mx-auto  my-2">
          Login
        </button>
        <button className="bg-grey-dark text-lg	 text-primary px-4 py-2 rounded-sm hover:bg-grey-medium   mx-auto my-2">
          SignUp
        </button>
      </div>
    </div>
  );
};

export default NavBar;
