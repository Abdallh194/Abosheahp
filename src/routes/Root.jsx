import React from "react";
import { Outlet } from "react-router-dom";
import CopyRight from "../components/CopyRight";
import Header from "../components/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <CopyRight />
    </div>
  );
};

export default Root;
