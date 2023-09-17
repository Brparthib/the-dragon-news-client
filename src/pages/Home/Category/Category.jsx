import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import News from "../News/News";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      {categoryNews.map((category) => (
        <News key={category._id} news={category}></News>
      ))}
    </div>
  );
};

export default Category;
