import React from "react";
import img1 from "../../../assets/editorsInsight1.png";
import img2 from "../../../assets/editorsInsight2.png";
import img3 from "../../../assets/editorsInsight3.png";
import moment from "moment";
import { FaCalendar } from "react-icons/fa6";

const EditorsInsights = () => {
  return (
    <div>
      <h2 className="w-full mb-5 text-xl font-bold">Editors Insight</h2>
      <div className="flex">
        <div className="bg-white border border-gray-200 rounded-lg shadow">
          <img className="rounded-t-md" src={img1} alt="" />
          <div className="p-3">
            <p className="font-medium">
              21 The Most Stylish Wedding Guest Dresses For Spring
            </p>
            <div className="text-zinc-500 mt-4">
              <FaCalendar className="mr-2 inline-block align-middle"></FaCalendar>
              <span className="inline-block align-middle">
                {moment().format("MMM D, YYYY")}
              </span>
            </div>
          </div>
        </div>
        <div className="mx-6 bg-white border border-gray-200 rounded-lg shadow">
          <img className="rounded-t-md" src={img1} alt="" />
          <div className="p-3">
            <p className="font-medium">
              21 The Most Stylish Wedding Guest Dresses For Spring
            </p>
            <div className="text-zinc-500 mt-4">
              <FaCalendar className="mr-2 inline-block align-middle"></FaCalendar>
              <span className="inline-block align-middle">
                {moment().format("MMM D, YYYY")}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow">
          <img className="rounded-t-md" src={img1} alt="" />
          <div className="p-3">
            <p className="font-medium">
              21 The Most Stylish Wedding Guest Dresses For Spring
            </p>
            <div className="text-zinc-500 mt-4">
              <FaCalendar className="mr-2 inline-block align-middle"></FaCalendar>
              <span className="inline-block align-middle">
                {moment().format("MMM D, YYYY")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsInsights;
