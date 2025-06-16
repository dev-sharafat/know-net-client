import React from 'react';
import NavBar from '../../ShearComponents/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../ShearComponents/Footer';

const MyArticleLayOut = () => {
    return (
        <div>
            <NavBar/>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
};

export default MyArticleLayOut;