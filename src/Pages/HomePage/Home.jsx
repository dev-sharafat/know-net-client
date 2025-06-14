import React from "react";
import Slider from "../../Components/HomepageComponnets/Slider";

const Home = () => {
  return (
    <div>
      <div className="text-center my-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">Ideas Meet Curiosity at KnowNet </h1>
        <p className="mt-2 ">
          A student-powered platform where ideas, knowledge, and curiosity come
          together. Share your experiences, read insightful articles, and grow
          with a learning community.
        </p>
        <div>
            <Slider/>
        </div>
      </div>
    </div>
  );
};

export default Home;
