import React from "react";
import NavBar from "./shared/NavBar";
import Footer from "./shared/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
