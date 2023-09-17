import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";

const Header = () => {

  return (
    <div className="container mx-auto">
      <div className="top-header text-center my-10">
        <img className="mx-auto" src={logo} alt="" />
        <p className="text-gray-400 text-xl my-2">
          Journalism Without Fear or Favour
        </p>
        <p className="text-gray-500 text-xl">
          <span className="font-bold text-gray-600">
            {moment().format("dddd, ")}
          </span>
          {moment().format("MMMM D, YYYY")}
        </p>
      </div>
      <div className="flex w-full p-4 mx-auto bg-gray-100 border border-gray-200 shadow">
        <button
          type="button"
          className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 focus:outline-none mr-5"
        >
          Latest
        </button>
        <Marquee className="text-xl" speed={75}>
          I can be a React component, multiple React components, or just some
          text.... And I can be a React component, multiple React components, or
          just some text.
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
