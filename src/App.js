import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home1 from "./pages/Home1";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Layout from "./components/Layout";
import FAQs from "./pages/FAQs";
import NewsFetch from "./pages/NewsFetch";
import { AuthContext } from "./context/authContext.js";
import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Feedback from "./pages/Feedback";

function App() {
  const { login, logout, isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    // Check if a token exists in local storage or cookies
    const storedToken = localStorage.getItem("accessToken"); // Change this to your token name
    console.log(isAuthenticated);
    if (storedToken) {
      // Validate the token (e.g., verify its signature on the server)
      // If the token is valid, log the user in with the token
      login(storedToken);
    } else {
      // No token found; the user is not authenticated
      logout();
    }
  }, [isAuthenticated]);
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Layout>
          <Routes>
            <Route path="/" element={isAuthenticated ? <Home /> : <Landing />}></Route>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route path="/Landing" element={isAuthenticated ? <Home /> : <Landing />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route
              path="/Login"
              element={!isAuthenticated ? <Login /> : <Navigate replace to = "/" />}
            ></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/FAQs" element={<FAQs />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/Feedback" element={isAuthenticated ? <Feedback /> : <Login />}></Route>
            {/* <Route path="/NewsFetch" element={<NewsFetch />}></Route> */}
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
