import React from 'react';
import NavBar from '../../ShearComponents/NavBar'
import Footer from '../../ShearComponents/Footer'
import { Outlet } from 'react-router';
const PostArticleLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PostArticleLayout;