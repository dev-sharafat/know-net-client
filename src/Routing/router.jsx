import { createBrowserRouter } from "react-router";
import HomePageLayOut from "../LayOuts/HomepageLayout/HomePageLayOut";
import Home from "../Pages/HomePage/Home";
import Login from "../Pages/LoginPages/Login";
import SignIn from "../Pages/LoginPages/SignIn";
import ShowCategoryCard from "../Components/HomepageComponnets/ShowCategoryCard";

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

    }
])

export default router;