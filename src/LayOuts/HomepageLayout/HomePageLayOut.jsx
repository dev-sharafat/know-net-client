import React from 'react';
import NavBar from '../../ShearComponents/NavBar';
import { Outlet } from 'react-router';

const HomePageLayOut = () => {
    return (
        <div>
            <NavBar/>
            <div>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default HomePageLayOut;