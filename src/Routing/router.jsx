import { createBrowserRouter } from "react-router";
import HomePageLayOut from "../LayOuts/HomepageLayout/HomePageLayOut";
import Home from "../Pages/HomePage/Home";
import Login from "../Pages/LoginPages/Login";

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
                path:'/login',
                Component:Login
            }
        ] 
    }
])

export default router;