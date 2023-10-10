import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NewsFeed from "./pages/NewsFeed";
import SignUp from "./pages/SignUp";
import Layout from "./components/Layout";
import FAQs from "./pages/FAQs";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Layout>
          <Routes>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/FAQs" element={<FAQs />}></Route>
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
