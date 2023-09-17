import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsights from "../EditorsInsights/EditorsInsights";

const News = () => {
  const news = useLoaderData();
  const { title, image_url, details, category_id } = news;
  return (
    <div>
      <div className="px-16 my-5">
        <h2 className="text-xl font-bold">Dragon News</h2>
        <div className="w-full p-5 mt-5 bg-white border border-gray-200 rounded-lg shadow ">
          <img className="" src={image_url} alt="" />
          <h4 className="my-5 text-2xl font-medium">{title}</h4>
          <p className="mb-5 text-lg text-zinc-600">{details}</p>
          <Link to={`/category/${category_id}`}>
            <button
              type="button"
              className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 focus:outline-none mr-5"
            >
              <FaArrowLeft className="inline-block align-middle mr-2"></FaArrowLeft>
              All news in this category
            </button>
          </Link>
        </div>
      </div>
      <div className="px-16 my-5">
        <EditorsInsights></EditorsInsights>
      </div>
    </div>
  );
};

export default News;
