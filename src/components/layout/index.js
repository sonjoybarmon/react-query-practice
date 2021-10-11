import React from "react";
import Footer from "./Footer/Footer";
import NavMenu from "./Menu/NavMenu";

const Layout = ({ children }) => {
  return (
    <div>
      <NavMenu />
      <div style={{ padding: "40px 0" }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
