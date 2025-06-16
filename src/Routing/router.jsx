import { createBrowserRouter } from "react-router";
import HomePageLayOut from "../LayOuts/HomepageLayout/HomePageLayOut";
import Home from "../Pages/HomePage/Home";
import Login from "../Pages/LoginPages/Login";
import SignIn from "../Pages/LoginPages/SignIn";
import ShowCategoryCard from "../Components/HomepageComponnets/ShowCategoryCard";
import AllArticles from "../LayOuts/AllArticleLayout/AllArticles";
import AllArticlesData from "../Pages/AllArticlePage/AllArticlesData";
import PostArticleLayout from "../LayOuts/PostArticles/PostArticleLayout";
import PostArticleFrom from "../Components/PostArticleComponent/PostArticleFrom";

const router = createBrowserRouter([
    {
        path:'/',
        Component:HomePageLayOut,
        children:[
            {
                index:true,
                path:'/',
                Component:Home
            },
            {
                path:"/category/:categry",
                loader:()=>fetch('http://localhost:3000/category/'),
                Component:ShowCategoryCard
            },
            {
                path:'login',
                Component:Login
            },
            {
                path:'/signup',
                Component:SignIn
            }
        ] 
    },
    {
        path:'/allarticles',
        Component:AllArticles,
        children:[
            {
                index:true,
                Component:AllArticlesData

            }
        ]
    },
    {
        path:"/postarticle",
        Component:PostArticleLayout,
        children:[
            {
                index:true,
                Component:PostArticleFrom
            }
        ]
    }
])

export default router;