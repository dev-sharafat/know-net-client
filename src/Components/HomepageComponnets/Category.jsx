import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router"; // ✅ Fix: use 'react-router-dom'
import Swal from "sweetalert2";

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axios
      .get("https://know-net-server.vercel.app/category/")
      .then((res) => setCategoryData(res.data))
      .catch((error) => {
        Swal.fire(error.message);
      });
  }, []);

  // ✅ Remove duplicates by category name
  const uniqueCategories = [];
  const seen = new Set();

  for (const item of categoryData) {
    if (!seen.has(item.category)) {
      seen.add(item.category);
      uniqueCategories.push(item);
    }
  }

  return (
    <div className="mx-4 my-10 md:mx-4 lg:mx-0">
      <div className="text-center space-y-3">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
          Browse Articles by Category
        </h1>
        <p className="text-center">
          Easily find what interests you! Below you'll see a list of all
          available categories. When you click on a category, the section will
          instantly update to show only the articles that match your selection.
          Whether it’s Technology, Health, Education, or any other topic —
          you'll get a filtered view of content specifically related to that
          category, making it quick and simple to dive into what matters most to
          you.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-4 justify-center">
        {uniqueCategories.map((category) => (
          <Link
            to={`/category/${category?.category}`}
            key={category?._id}
            className="btn btn-outline btn-primary"
          >
            {category?.category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
