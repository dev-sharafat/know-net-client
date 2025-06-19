import React, { use, useEffect, useState } from "react";
import AuthContext from "../../FirebaseAuthentication/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import ShowMyArticles from "../../Components/MyArticleComponent/ShowMyArticles";

const MyArticles = () => {
  const { user } = use(AuthContext);
  const [articles, setArticles] = useState([]);
  const [token,setToken] =useState(null)
  useEffect(()=>{
    setToken(localStorage.getItem("accessToken"))
  },[])
  useEffect(() => {
   if(token){

     axios
       .get("https://know-net-server.vercel.app/articles", {
         headers: { Authorization: token },
       })
       .then((res) => {
         setArticles(res?.data);
       })
       .catch((error) => {
         Swal.fire(error.message);
       });
   }
// console.log(token);
  }, [token]);

  const myArticles = articles?.filter(
    (article) => article?.email === user?.email
  );
  console.log(myArticles);
  return (
    <div className="mx-4 lg:mx-0">
      <div className="text-center my-10">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl">
          My Posted Articles
        </h1>
      </div>
      <ShowMyArticles myArticles={myArticles}></ShowMyArticles>
    </div>
  );
};

export default MyArticles;
