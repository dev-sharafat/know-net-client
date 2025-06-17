import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import AuthContext from "../../FirebaseAuthentication/AuthContext";
import ShowComment from "../Comments/ShowComment";

const ShowCategoryDetails = () => {
  const {user}= use(AuthContext)
  const { id } = useParams();
  console.log(id);

  const [categoryDetails, setCategoryDetails] = useState({});
  const [reload,setReload]=useState(false)
  const [commentvalue,setCommetnValue] = useState(" ")
  useEffect(() => {
    axios
      .get(`http://localhost:3000/articles/${id}`)
      .then((res) => {
        setCategoryDetails(res?.data[0]);
      })
      .catch((error) => {
          Swal.fire(error.message);
        });
        
        setReload(false)
  }, [id,reload]);
  console.log(categoryDetails);

  const handleLike =()=>{
    axios.post(`http://localhost:3000/article/countlikes?articleId=${categoryDetails._id}&email=${user.email}`)
    setReload(true)
  }
  const handleComment =()=>{
 axios
    .post(
      `http://localhost:3000/article/comment?articleId=${categoryDetails._id}&email=${user.email}`,
      {
        comment: commentvalue,
        photo: user.photoURL,
        name:user.displayName
      }
    )
    .then(res => {
      console.log(res.data);
      // Optional: clear the comment box
      setCommetnValue(" ");
      setReload(true)
    })
    .catch(err => {
      console.error("Failed to post comment:", err);
    });  }
  console.log(categoryDetails.comments);
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
        <div className="text-lg font-bold text-pink-600"> {categoryDetails?.likes?.length || 0} 
            <button onClick={handleLike}>❤️</button>
        </div>
       
      </div>
      <div>
         <fieldset className="fieldset">
            <legend className="fieldset-legend">Comments</legend>
            <textarea
            onChange={(e)=>setCommetnValue(e.target.value)}
              name="content"
              placeholder="Write your comment..."
              className="textarea w-full textarea-primary"
            ></textarea>
          </fieldset>
          <button onClick={handleComment} className="btn btn-outline btn-primary">Submit</button>
      </div>
      <div>
        {
          categoryDetails?.comments?.map((comment,index)=><ShowComment key={index} comment={comment}></ShowComment>)
        }
      </div>
    </div>
  );
};

export default ShowCategoryDetails;
