import React from "react";

const ShowComment = ({ comment }) => {
  return (
    <div className="my-10 border border-blue-500 rounded-xl p-10 lg:w-[50%]">
      <div className="flex items-center gap-3">
        <div className="avatar avatar-online avatar-placeholder">
          <div className="bg-neutral text-neutral-content w-10 rounded-full">
            <img src={comment?.photo} alt="" />
          </div>
        </div>
        <div>
            <h1>{comment?.name}</h1>
        </div>
      </div>
      <div className="pl-10 mt-3">
        <p>{comment.comment}</p>
      </div>
    </div>
  );
};

export default ShowComment;
