import React, { Suspense } from "react";
import Slider from "../../Components/HomepageComponnets/Slider";
import FeatureArticales from "../../Components/HomepageComponnets/FeatureArticales";
import Loading from "../../ShearComponents/Loading"
import Category from "../../Components/HomepageComponnets/Category";

const knewNetdataPromise = fetch('http://localhost:3000/knownetdata').then(res=>res.json())
const Home = () => {
  return (
    <div>
      <div className="text-center my-10 mx-4 lg:mx-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Ideas Meet Curiosity at KnowNet </h1>
        <p className="mt-2 ">
          A student-powered platform where ideas, knowledge, and curiosity come
          together. Share your experiences, read insightful articles, and grow
          with a learning community.
        </p>
        <div>
            <Slider/>
        </div>
      </div>
      <Suspense fallback={<Loading></Loading>}>
        <FeatureArticales knewNetdataPromise = {knewNetdataPromise}></FeatureArticales>
      </Suspense>
      <Category></Category>
    </div>
  );
};

export default Home;
