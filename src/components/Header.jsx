import React from "react";
import CenterMenu from "./CenterMenu";
import Navbar from "./Navbar";
import TopMenu from "./TopMenu";

const Header = () => {
  return (
    <div className="header">
      <TopMenu />
      <CenterMenu />
      <Navbar />
    </div>
  );
};
export default Header;
