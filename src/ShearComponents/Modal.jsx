import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import Swal from "sweetalert2";

const Modal = ({ closeModal }) => {
  const { state } = useLocation();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: state?.title,
      content: state?.content,
      description: state?.description,
      tag: state?.tag,
      author_photo: state?.author_photo,
      category: state?.category,
    },
  });

  const handleUpdate = (data) => {
    axios
      .patch(`https://know-net-server.vercel.app/articles/${state?._id}`, data)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your update is successful",
            showConfirmButton: false,
            timer: 1500,
          });
          closeModal();
        }
      })
      .catch((error) => Swal.fire(error.message));
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 mx-10 bg-opacity-50 flex items-center justify-center z-50"
        onClick={closeModal}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div
          className="bg-white dark:bg-gray-800 lg:w-full max-w-2xl p-8 rounded-lg shadow-lg relative pointer-events-auto"
          onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold ">Update Your Post</h2>
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-error"
              title="Close"
              type="button"
            >
              ✕
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">
            <fieldset className="space-y-1">
              <label className="font-medium">Title</label>
              <br />
              <input
                type="text"
                {...register("title")}
                className="input lg:w-full input-bordered"
                placeholder="Type your post title"
              />
            </fieldset>

            <fieldset className="space-y-1">
              <label className="font-medium">Content</label>
              <textarea
                {...register("content")}
                placeholder="Write your content..."
                className="textarea lg:w-full textarea-bordered"
              ></textarea>
            </fieldset>

            <fieldset className="space-y-1">
              <label className="font-medium">Category</label>
              <br />
              <select
                {...register("category")}
                className="select lg:w-full select-bordered"
              >
                <option disabled>Pick a category</option>
                <option value="Environment">Environment</option>
                <option value="Health">Health</option>
                <option value="Technology">Technology</option>
                <option value="Science">Science</option>
                <option value="Education">Education</option>
                <option value="Culture">Culture</option>
              </select>
            </fieldset>

            <fieldset className="space-y-1">
              <label className="font-medium">Tags</label>
              <br />
              <input
                {...register("tag")}
                type="text"
                className="input lg:w-full input-bordered"
                placeholder="Comma separated tags"
              />
            </fieldset>

            <fieldset className="space-y-1">
              <label className="font-medium">Author Photo URL</label>
              <input
                {...register("author_photo")}
                type="text"
                className="input lg:w-full input-bordered"
                placeholder="Photo URL"
              />
            </fieldset>

            <div className="flex justify-between gap-4 pt-4">
              <button
                type="button"
                onClick={closeModal}
                className="btn btn-outline w-1/2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary w-1/2"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
