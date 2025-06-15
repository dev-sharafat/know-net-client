import React, { use } from "react";
import FeatureArticale from "./FeatureArticale";

const FeatureArticales = ({knewNetdataPromise}) => {
    const knewNetData = use(knewNetdataPromise)
  return (
    <div className="mt-10 mx-4 lg:mx-0 md:mx-4">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Knowledge Shared</h1>
        <p>
          From innovative thoughts to personal experiences and helpful how-tos,
          these articles reflect the voice of students eager to share what they
          know. Discover what your peers are thinking, writing, and learning—one
          article at a time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            knewNetData.map(knewNet=><FeatureArticale key={knewNet._id} knewNet={knewNet}></FeatureArticale>)
        }
      </div>
    </div>
  );
};

export default FeatureArticales;
