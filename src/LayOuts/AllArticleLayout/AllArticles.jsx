import React from 'react';
import NavBar from '../../ShearComponents/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../ShearComponents/Footer';

const AllArticles = () => {
    return (
        <div>
            <NavBar/>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
};

export default AllArticles;