import React from 'react';
import NavBar from '../../ShearComponents/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../ShearComponents/Footer';

const HomePageLayOut = () => {
    return (
        <div >
            <NavBar/>
            <div className='min-h-screen container mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer/>
            
        </div>
    );
};

export default HomePageLayOut;