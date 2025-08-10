import React, { use, useEffect, useState } from "react";
import AuthContext from "../../FirebaseAuthentication/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { DateTime } from "luxon";

const PostArticleFrom = () => {
  const { user } = use(AuthContext);
  const [datePosted, setDatePosted] = useState("");
  // const [token,setToken] =useState(null)
  // useEffect(()=>{
  //   setToken(localStorage.getItem("accessToken"))
  // },[])
  useEffect(() => {
    const currentDate = DateTime.now().toFormat("ccc, LLL d, yyyy");
    setDatePosted(currentDate);
  }, []);
  const handlePostArticle = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const datas = Object.fromEntries(formData.entries());
    datas.tag = datas.tag.split(",").map((tag) => tag.trim());

    datas.date_posted = datePosted;

    axios
      .post("https://know-net-server.vercel.app/articles", datas)
      .then((res) => {
        console.log(res);
        if (res?.data?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            window.location.replace("/allarticles");
          }, 700);
        }
      })
      .catch((error) => {
        Swal.fire(error.message);
      });
  };
  return (
    <div className=" mx-4 md:mx-4 lg:mx-0">
      <div className="text-center space-y-3 my-10">
        <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold">
          Post Your Article
        </h1>
        <p>You can shear your own experience by completing the from </p>
      </div>
      <div className="    rounded-xl mx-auto mb-10 ">
        <form
          onSubmit={handlePostArticle}
          className="bg-base-200  p-4 py-10 container mx-auto rounded-lg shadow-lg"
        >
          {/* Flex container */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Column */}
            <div className="flex-1 space-y-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Title</legend>
                <input
                  type="text"
                  name="title"
                  className="input w-full input-primary"
                  placeholder="Type your post title"
                  required
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Content</legend>
                <textarea
                required
                  name="content"
                  placeholder="Write your content..."
                  className="textarea w-full textarea-primary"
                ></textarea>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Category</legend>
                <select
                required
                  name="category"
                  defaultValue="Pick a category"
                  className="select select-primary w-full"
                >
                  <option disabled={true}>Pick a category</option>
                  <option value="Environment">Environment</option>
                  <option value="Health">Health</option>
                  <option value="Technology">Technology</option>
                  <option value="Science">Science</option>
                  <option value="Education">Education</option>
                  <option value="Culture">Culture</option>
                </select>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Tag</legend>
                <input
                  name="tag"
                  required
                  type="text"
                  className="input w-full input-primary"
                  placeholder="Write tag with comma separator..."
                />
              </fieldset>
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Photo URL</legend>
                <input
                  name="author_photo"
                  type="text"
                  className="input w-full input-primary"
                  placeholder="Write your photo URL..."
                  required
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Author Name</legend>
                <input
                  name="author_name"
                  type="text"
                  readOnly
                  defaultValue={user?.displayName}
                  className="input w-full input-primary"
                  placeholder="Write your name..."
                  required
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Email</legend>
                <input
                  name="email"
                  type="email"
                  readOnly
                  defaultValue={user?.email}
                  className="input w-full input-primary"
                  placeholder="Write your email..."
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Publisher Time</legend>
                <input
                  type="text"
                  name="date_posted"
                  readOnly
                  defaultValue={datePosted}
                  className="input w-full input-primary"
                  placeholder="Publishing time"
                />
              </fieldset>
            </div>
          </div>

          {/* Submit button */}
          <input
            type="submit"
            className="btn btn-block btn-outline btn-primary mt-6"
            value="Post Your Article"
          />
        </form>
      </div>
    </div>
  );
};

export default PostArticleFrom;
