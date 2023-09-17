import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import LeftNav from "../pages/Shared/LeftNav.jsx/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";

const NewsLayOut = () => {
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto">
        <div className="flex justify-between w-full">
          <div className="w-9/12">
            <Outlet></Outlet>
          </div>
          <div className="w-3/12">
            <RightNav></RightNav>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NewsLayOut;
