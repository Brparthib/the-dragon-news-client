import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sports from "../../Home/Sports/Sports";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="px-5">
      <div className="mb-5">
        <h5 className="font-bold text-xl mb-5">All Category</h5>
        {
            categories.map(category => <p className="pr-8" key={category.id}>
                <Link to={`/category/${category.id}`} className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-slate-100 hover:text-blue-500 focus:bg-neutral-100 focus:text-blue-500 focus:ring-0">{category.name}</Link>
            </p>)
        }
      </div>
      <div className="mb-5">
        <Sports></Sports>
      </div>
    </div>
  );
};

export default LeftNav;
