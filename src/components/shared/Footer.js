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
    {
        id: 6,
        title: "Sign In",
        link: "/Login",
      },
      {
        id: 7,
        title: "Sign Up",
        link: "/SignUp",
      },
  ];
  return (
    <div className="bg-grey-dark text-primary flex justify-evenly py-8">
        <div>
            <div>LOGO</div>
            <div className="flex">
                {SocialIcons?.map((item) => (
                    <div key = {item.id} className="p-3 rounded-full bg-grey-dark hover:bg-grey-light text-primary cursor-pointer">{item.icon}</div>
                ))}
            </div>
        </div>
        <div>
            <div className="font-bold text-lg pb-2">QUICK LINKS</div>
            <div className="flex-col">
                {
                    PagesLinks?.map((item) => (
                        <Link key={item.id} to={item.link}><div className="pb-1 hover:underline">{item.title}</div></Link>
                    ))
                }
            </div>
        </div>
        <div>
          <div className="text-lg font-semibold pb-3 text-primary flex gap-4">
            <MdOutlineLocationOn className="h-8 w-8 text-primary" />
            <span className="text-primary">Indore </span>
          </div>
          <div className="text-lg font-semibold pb-3 text-primary flex gap-4">
            <AiOutlineMail className="h-8 w-8 text-primary" />{" "}
            <span className="text-primary">donatehelp@mail.com</span>{" "}
          </div>
          <div className="text-lg font-semibold pb-3 text-primary flex gap-4">
            <FiPhoneCall className="h-8 w-8 text-primary" />{" "}
            <span className="text-primary">+91 1234567890</span>{" "}
          </div>
        </div>

    </div>
  )
};

export default Footer;
