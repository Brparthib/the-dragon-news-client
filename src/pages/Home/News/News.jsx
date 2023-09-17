import React from "react";
import { FaBookmark, FaEye, FaRegStar, FaShareNodes, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const News = ({ news }) => {
  const { _id, title, rating, total_view, author, image_url, details } = news;
  return (
    <div>
      <div className="w-11/12 mx-auto bg-white border border-gray-200 rounded-lg shadow mb-10">
        <div className="bg-slate-100 rounded-t-lg">
          <div className="flex justify-between px-5 py-3">
            <div className="">
              <div className="flex">
                <img className="w-12 rounded-full" src={author?.img} alt="" />
                <div className="ms-3">
                  <h5>{author?.name}</h5>
                  <p>{author?.published_date}</p>
                </div>
              </div>
            </div>
            <div className="flex pt-3">
              <FaBookmark className="text-xl mr-2"></FaBookmark>
              <FaShareNodes className="text-xl"></FaShareNodes>
            </div>
          </div>
        </div>
        <div className="p-5">
          <h4 className="text-xl font-medium mt-3">{title}</h4>
          <img className="my-3" src={image_url} alt="" />
          <p className="text-lg text-zinc-500">
            {details.length < 150 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 150)}...{" "}
                <Link
                  className="font-medium text-amber-500"
                  to={`/news/${_id}`}
                >
                  Read More
                </Link>
              </>
            )}
          </p>
        </div>
        <hr className="h-px mt-8 mx-5 bg-gray-200 border-0" />
        <div className="flex my-5 px-5 text-zinc-500 justify-between rounded-b-lg">
          <div className="flex">
            <Rating
              placeholderRating={rating.number}
              emptySymbol={
                <FaRegStar></FaRegStar>
              }
              placeholderSymbol={
                <FaStar className="text-amber-500"></FaStar>
              }
              fullSymbol={
                <FaStar></FaStar>
              }
              readonly
              className="text-lg"
            />
            <span className="ms-2 text-lg">{rating?.number}</span>
          </div>
          <div className="flex ">
            <FaEye className="me-2 mt-1"></FaEye>
            <span className="">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
