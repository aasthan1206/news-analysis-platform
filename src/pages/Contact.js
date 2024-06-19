import React from "react";
import contactUs1 from "../assets/images/contactUs1.png";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";

const Contact = () => {
    const ContactData = [
        {
          id: 1,
          icon: <AiOutlineMail className="h-12 w-12 text-grey-dark" />,
          title: "Email Address",
          desc: "newsplatform@mail.com",
        },
        {
          id: 2,
          icon: <FiPhoneCall className="h-12 w-12 text-grey-dark" />,
          title: "Phone Number",
          desc: "+91 1234567890",
        },
        {
          id: 3,
          icon: <MdOutlineLocationOn className="h-12 w-12 text-grey-dark" />,
          title: "Our Headquarter",
          desc: "123, MY Street, Near White Church, Indore (M.P.)",
        },
      ];
  return (
    <div>
      <div className="bg-grey-dark flex justify-between items-center">
        <div className="text-grey-light font-bold text-8xl px-16"> Contact Us</div>
        <div className="w-1/2">
          <img src={contactUs1} alt="contact us" className="" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/3 mx-8 my-8">
            <div className="font-bold text-grey-medium text-lg pl-0.5">We are here to help you</div>
            <div className="font-semibold text-grey-dark text-3xl">Here's how you can reach us</div>
            <div className="text-gray-500 py-2">Don't hesitate! We are here to address your queries. We will be obliged to answer your questions. Our team is always there you assist you.</div>
            <div>
                {ContactData?.map((item) => (
                    <div key={item.id}>
                        <div className="flex gap-8 py-4">
                    <div className="">{item.icon}</div>
                    <div className="self-center">
                      <div className="text-xl font-semibold text-grey-dark">
                        {item.title}
                      </div>
                      <div className="text-lg font-medium text-gray-500">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                    </div>
                    
                ))}
            </div>

        </div>
        <div className="bg-grey-light w-1/2 py-8 px-8 mx-8 my-8">
          <div className="font-bold text-gray-500 text-lg">Are you curious?</div>
          <div className="font-semibold text-grey-dark text-3xl py-2">Feel free to write us message!</div>
          <form
            action=""
          >
            <div>
              <input
                type="text"
                name="first_name"
                placeholder="Your Name"
                // value={formData.first_name}
                // onChange={handleChange}
                className="focus:border-2 focus:border-grey-dark outline-none rounded-sm my-2 px-2 py-1 w-full"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                // value={formData.email}
                // onChange={handleChange}
                className="focus:border-2 focus:border-grey-dark outline-none rounded-sm my-2 px-2 py-1 w-full"
              />
            </div>
            <div>
              <input
                type="phone"
                name="contact_no"
                placeholder="Contact Number"
                // value={formData.contact_no}
                // onChange={handleChange}
                className="focus:border-2 focus:border-grey-dark outline-none rounded-sm my-2 px-2 py-1 w-full "
              />
            </div>
            <div>
              <textarea
                type="text"
                name="text"
                placeholder="Message"
                // value={formData.password}
                // onChange={handleChange}
                className="focus:border-2 focus:border-grey-dark outline-none rounded-sm my-2 px-2 py-1 w-full"
              />
            </div>
            <div className="">
              <button className="hover:bg-red-dark font-bold text-white px-4 py-2 rounded-sm bg-grey-dark my-2 w-full text-center">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
