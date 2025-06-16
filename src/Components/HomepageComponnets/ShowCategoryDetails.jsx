import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import AuthContext from "../../FirebaseAuthentication/AuthContext";

const ShowCategoryDetails = () => {
  
  const { id } = useParams();
  console.log(id);

  const [categoryDetails, setCategoryDetails] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3000/articles/${id}`)
      .then((res) => {
        setCategoryDetails(res?.data[0]);
      })
      .catch((error) => {
        Swal.fire(error.message);
      });
  }, [id]);
  console.log(categoryDetails);

  return (
    <div className="mx-4">
      <div>
        <img
          src={categoryDetails?.author_photo}
          alt=""
          className="w-full lg:h-150 rounded-xl"
        />
      </div>
      <div className="lg:mt-10 space-y-3">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
          {categoryDetails?.title}
        </h1>
        <h2 className="font-bold">
          By {categoryDetails.author_name} | {categoryDetails?.category} |{" "}
          {categoryDetails.date_posted}
        </h2>
        <p>{categoryDetails?.content}</p>
        {categoryDetails?.tags?.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 mr-4 bg-gray-200 text-gray-700 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex  gap-3">
        <div className="text-lg font-bold text-pink-600">❤️ {categoryDetails?.likes || 0}</div>
       
      </div>
    </div>
  );
};

export default ShowCategoryDetails;
