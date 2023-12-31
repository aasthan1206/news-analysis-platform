import React from "react";
import newsV5 from "../assets/images/newsV5.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_no: "",
    password: "",
  });
  const handleChange = (e) => {
    console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { formData };
      const response = await fetch("http://localhost:5002/register ", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          contact_no: formData.contact_no,
          password: formData.password,
        }),
      });
      navigate("/Login");
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="flex justify-between bg-primary">
      <form action="" onSubmit={onFormSubmit} className="w-1/3 mx-auto my-8">
        <div className="text-grey-dark text-3xl font-bold pb-6">Sign <span className="text-red-dark">Up</span></div>
        <div>
          <label htmlFor="" className="text-grey-medium font-bold">
            First Name<span className="text-red-500">*</span>
          </label>
          <br />
          <input
            type="text"
            name="first_name"
            placeholder=""
            value={formData.first_name}
            onChange={handleChange}
            className="border-2 rounded-sm my-2 px-2 py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="" className="text-grey-medium font-bold">
            Last Name
          </label>
          <br />
          <input
            type="text"
            name="last_name"
            placeholder=""
            value={formData.last_name}
            onChange={handleChange}
            className="border-2 rounded-sm my-2 px-2 py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="" className="text-grey-medium font-bold">
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
          <label htmlFor="" className="text-grey-medium font-bold">
            Contact No.
          </label>
          <br />
          <input
            type="phone"
            name="contact_no"
            placeholder=""
            value={formData.contact_no}
            onChange={handleChange}
            className="border-2 rounded-sm my-2 px-2 py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="" className="text-grey-medium font-bold">
            Password<span className="text-red-500">*</span>
          </label>
          <br />
          <input
            type="password"
            name="password"
            placeholder=""
            value={formData.password}
            onChange={handleChange}
            className="border-2 rounded-sm my-2 px-2 py-1 w-full"
          />
        </div>
        <div>
          <button className="bg-grey-medium font-bold text-white px-4 py-2 rounded-sm hover:bg-red-dark mx-auto flex my-2">
            Create Account
          </button>
        </div>
        <div className="py-1 text-grey-dark">
          Already a member?
          <Link to={"/Login"} className="font-semibold hover:underline">
            {" "}
            Sign In
          </Link>
        </div>
      </form>
      <div className="w-1/2">
        <img src={newsV5} alt="Sign Up News" />
      </div>
    </div>
  );
};

export default SignUp;
