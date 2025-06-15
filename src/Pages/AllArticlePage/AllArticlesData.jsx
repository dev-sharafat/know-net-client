import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ShowArticles from "../../Components/AllArticleComponents/ShowArticles";

const AllArticlesData = () => {
  const [allDatas, setAllDatas] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categry, setCategry] = useState("All");
  useEffect(() => {
    axios
      .get("http://localhost:3000/articles")
      .then((res) => {
        setAllDatas(res.data) 
        setFilteredData(res.data)
      })
      .catch((error) => {
        Swal.fire(error.message);
      });
  }, []);
  console.log(allDatas);
  const handleFilterChange = (e) => {
    const selected = e.target.value;
    setCategry(selected);

    if (selected === "All") {
      setFilteredData(allDatas);
    } else {
      const filtered = allDatas.filter((article) => article.category === selected);
      setFilteredData(filtered);
    }
  };
  return (
    <div className="mx-4 md:mx-4 lg:mx-0">
      <div className="text-center my-10">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl ">
          All Article IS Here
        </h1>
      </div>
      <div>
        <div className="mb-4 overflow-auto mx-3 lg:mx-0">
          <label className="mr-2 font-semibold">Filter by Category:</label>
          <select
            className="select select-bordered"
            value={categry}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Environment">Environment</option>
            <option value="Health">Health</option>
            <option value="Technology">Technology</option>
            <option value="Science">Science</option>
            <option value="Education">Education</option>
            <option value="Culture">Culture</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredData.map((data, index) => (
          <ShowArticles key={index} data={data}></ShowArticles>
        ))}
      </div>
    </div>
  );
};

export default AllArticlesData;
