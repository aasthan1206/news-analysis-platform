import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const SocialIcons = [
    {
      id: 1,
      icon: <FaFacebookF className="h-6 w-6" />,
    },
    {
      id: 2,
      icon: <FaInstagram className="h-6 w-6" />,
    },
    {
      id: 3,
      icon: <FaTwitter className="h-6 w-6" />,
    },
    {
      id: 4,
      icon: <FaYoutube className="h-6 w-6" />,
    },
  ];
  const PagesLinks = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Resources",
      link: "/Resources",
    },
    {
      id: 3,
      title: "FAQs",
      link: "/FAQs",
    },
    {
      id: 4,
      title: "About Us",
      link: "/About",
    },
    {
      id: 5,
      title: "Contact Us",
      link: "/Contact",
    },
    // {
    //     id: 6,
    //     title: "Sign In",
    //     link: "/Login",
    //   },
    //   {
    //     id: 7,
    //     title: "Sign Up",
    //     link: "/SignUp",
    //   },
  ];
  return (
    <div className="bg-grey-dark text-grey-light pt-8 pb-4 px-16">
    <div className=" flex justify-between">
        <div>
            <div>LOGO</div>
            <div className="flex">
                {SocialIcons?.map((item) => (
                    <div key = {item.id} className="p-3 rounded-full bg-grey-dark hover:bg-red-dark text-grey-light cursor-pointer">{item.icon}</div>
                ))}
            </div>
        </div>
        <div>
            <div className="font-bold text-lg pb-2">QUICK LINKS</div>
            <div className="flex-col">
                {
                    PagesLinks?.map((item) => (
                        <Link key={item.id} to={item.link}><div className="pb-1 hover:text-red-dark">{item.title}</div></Link>
                    ))
                }
            </div>
        </div>
        <div>
          <div className="text-lg font-semibold pb-3 text-primary flex gap-4">
            <MdOutlineLocationOn className="h-8 w-8 text-primary" />
            <span className="select-none">Indore </span>
          </div>
          <div className="text-lg font-semibold pb-3 text-primary flex gap-4">
            <AiOutlineMail className="h-8 w-8 text-primary" />{" "}
            <span className="select-none">newsplatform@mail.com</span>{" "}
          </div>
          <div className="text-lg font-semibold pb-3 text-primary flex gap-4">
            <FiPhoneCall className="h-8 w-8 text-primary" />{" "}
            <span className="select-none">+91 1234567890</span>{" "}
          </div>
        </div>
        
    </div>
    <div className="border-t-[1px] border-grey-light mt-4 text-xs text-center pt-4">
    © 2023 News Platform | All Rights Reserved
    </div>
    </div>
  )
};

export default Footer;
