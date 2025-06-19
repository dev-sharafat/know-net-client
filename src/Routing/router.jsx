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
import MyArticleLayOut from "../LayOuts/MyArticle/MyArticleLayOut";
import MyArticles from "../Pages/MyArticlePage/MyArticles";
import ShowCategoryDetails from "../Components/HomepageComponnets/ShowCategoryDetails";
import AllArticleDetailPage from "../Pages/AllArticlePage/AllArticleDetailPage";
import AuthPrivate from "../FirebaseAuthentication/AuthPrivate";
import ErrorPage from "../ShearComponents/Eror";

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
                loader:()=>fetch('https://know-net-server.vercel.app/category/'),
                Component:ShowCategoryCard
            },
            {
                path:"/articles/:id",
                loader:()=>fetch("https://know-net-server.vercel.app/articles/"),
                element:<AuthPrivate><ShowCategoryDetails></ShowCategoryDetails></AuthPrivate>

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

            },
            // {
            //     path:'/allarticles/:id',
            //     Component:AllArticleDetailPage
            // }
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
    },
    {
        path:"/myarticles",
        Component:MyArticleLayOut,
        children:[
            {
                index:true,
                Component:MyArticles
            }
        ]
    },
    {
        path:'/*',
        Component:ErrorPage
    }
])

export default router;