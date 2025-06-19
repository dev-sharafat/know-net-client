import React, { Suspense } from "react";
import Slider from "../../Components/HomepageComponnets/Slider";
import FeatureArticales from "../../Components/HomepageComponnets/FeatureArticales";
import Loading from "../../ShearComponents/Loading"
import Category from "../../Components/HomepageComponnets/Category";
import TopContributer from "../../Components/HomepageComponnets/TopContribuiter";
import TestimonialSection from "../../Components/HomepageComponnets/TestimonialSection";

const knewNetdataPromise = fetch('https://know-net-server.vercel.app/knownetdata').then(res=>res.json())
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
      <TopContributer></TopContributer>
      <TestimonialSection></TestimonialSection>
    </div>
  );
};

export default Home;
