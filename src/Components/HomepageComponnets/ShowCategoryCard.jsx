import axios from "axios";
// import { article } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import ShowCategory from "./ShowCategory";

const ShowCategoryCard = () => {
  const { categry } = useParams();
  const [showcategoryData, setShowCategoryData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/category/${categry}`)
      .then((res) => setShowCategoryData(res.data))
      .catch((error) => {
        Swal.fire("Error", error.message, "error");
      });
  }, [categry]);

  return (
    <div className="p-4">
      <div className="">
        <button
          onClick={() => navigate("/")}
          className="btn btn-outline btn-primary"
        >
          ← Back to Home
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-center">
        Articles in <span className="text-blue-600">{categry}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            showcategoryData.length === 0 ? (
            <p className="text-center text-gray-500">
                No articles found in this category.
            </p>
        ) : (
          showcategoryData.map((article, index) => (
            <ShowCategory key={index} article={article}></ShowCategory>
          ))
        )}
      </div>
    </div>
  );
};

export default ShowCategoryCard;
