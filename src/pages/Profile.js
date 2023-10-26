import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const sideBarData = [
  {
    id: 1,
    title: "Account Settings",
    desc: "View and update details about your account",
  },
  {
    id: 2,
    title: "Saved Articles",
    desc: "View your saved articles",
  },
  {
    id: 3,
    title: "Privacy & Security",
    desc: "Learn about our privacy policies",
  },
];
const Profile = () => {
  const user_id = localStorage.getItem("userId");
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({
    first_name: " ",
    last_name: " ",
    email: " ",
    contact_no: " ",
    password: " ",
  });

  const fetchUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:5002/user-profile/${user_id}`,
        {
          method: "GET",
        }
      );
      const user = await response.json();
      setUserData(user);
      setFormData({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        contact_no: user.contact_no,
        password: "",
      });
      console.log(user);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleChange = (e) => {
    console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { formData };
      const response = await fetch(
        `http://localhost:5002/user-profile/${user_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            contact_no: formData.contact_no,
            password: formData.password,
          }),
        }
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteUser = async () => {
    try {
      const response = await fetch(`http://localhost:5002/user-profile/${user_id}`, {
        method: "DELETE"
      });
      localStorage.removeItem("accessToken"); // Remove the access token
      localStorage.removeItem("refreshToken"); // Remove the refresh token
      localStorage.removeItem("userId");
      logout();
      navigate("/Landing");
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="bg-profile bg-cover p-16">
      <div className="bg-gradient-to-r from-white via-grey-light to-white rounded-xl py-8 px-16">
        <div className="text-3xl font-merri font-bold text-center">
          Welcome, {userData.first_name}
        </div>
        <div className="flex justify-around">
          <div className="mt-16">
            {sideBarData?.map((item) => (
              <div className="border-grey-dark border-2 rounded-md hover:shadow-md hover:shadow-grey-medium px-6 text-center py-3 cursor-pointer w-full my-4">
                <div
                  key={item.id}
                  className="text-grey-dark font-crimson font-semibold text-xl"
                >
                  {item.title}
                </div>
                <div className="font-crimson text-grey-dark">{item.desc}</div>
              </div>
            ))}
            <div onClick={() => deleteUser()} className="text-red-500 font-semibold font-crimson border-red-500 border-2 rounded-md hover:shadow-md hover:shadow-red-400 px-6 text-center py-3 cursor-pointer w-full my-4 bg-white text-xl">
              Delete Account
            </div>
          </div>
          <form onSubmit={onFormSubmit} className="w-1/2">
            <div className="text-xl font-merri font-semibold py-8 text-grey-medium">
              Update your profile information here
            </div>
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
                type="text"
                name="password"
                placeholder=""
                value={formData.password}
                onChange={handleChange}
                className="border-2 rounded-sm my-2 px-2 py-1 w-full"
              />
            </div>
            <div>
              <button className="bg-grey-medium font-bold text-primary px-4 py-2 rounded-sm hover:bg-grey-dark mx-auto flex my-2">
                Update Information
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
