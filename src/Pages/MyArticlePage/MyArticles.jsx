import React, { use, useEffect, useState } from "react";
import AuthContext from "../../FirebaseAuthentication/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import ShowMyArticles from "../../Components/MyArticleComponent/ShowMyArticles";

const MyArticles = () => {
  const { user } = use(AuthContext);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/articles")
      .then((res) => {
        setArticles(res.data);
      })
      .catch((error) => {
        Swal.fire(error.message);
      });
  }, []);
  const myArticles = articles.filter((article) => article.email === user.email);
  console.log(myArticles);
  return (
    <div>
      <div>
        <h1>My Posted Articles</h1>
      </div>
      {myArticles.map((article,index) => (
        <ShowMyArticles article={article} key={index} />
      ))}
    </div>
  );
};

export default MyArticles;
