import moment from "moment";
import React from "react";
import { FaCalendar } from "react-icons/fa6";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";

const Sports = () => {
  return (
    <div>
      <div className="bg-white border border-gray-200 rounded-lg shadow">
        <img className="w-full rounded-t-md" src={img1} alt="" />
        <div className="p-3">
          <p className="font-medium">
            21 The Most Stylish Wedding Guest Dresses For Spring
          </p>
          <div className="text-zinc-500 mt-4">
            <span className="font-medium text-black mr-2">Sports</span>
            <FaCalendar className="mr-2 inline-block align-middle"></FaCalendar>
            <span className="inline-block align-middle">
              {moment().format("MMM D, YYYY")}
            </span>
          </div>
        </div>
      </div>
      <div className="my-5 bg-white border border-gray-200 rounded-lg shadow">
        <img className="w-full rounded-t-lg" src={img2} alt="" />
        <div className="p-3">
          <p className="font-medium">
            21 The Most Stylish Wedding Guest Dresses For Spring
          </p>
          <div className="text-zinc-500 mt-4">
            <span className="font-medium text-black mr-2">Sports</span>
            <FaCalendar className="mr-2 inline-block align-middle"></FaCalendar>
            <span className="inline-block align-middle">
              {moment().format("MMM D, YYYY")}
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg shadow">
        <img className="w-full rounded-t-lg" src={img3} alt="" />
        <div className="p-3">
          <p className="font-medium">
            21 The Most Stylish Wedding Guest Dresses For Spring
          </p>
          <div className="text-zinc-500 mt-4">
            <span className="font-medium text-black mr-2">Sports</span>
            <FaCalendar className="mr-2 inline-block align-middle"></FaCalendar>
            <span className="inline-block align-middle">
              {moment().format("MMM D, YYYY")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
