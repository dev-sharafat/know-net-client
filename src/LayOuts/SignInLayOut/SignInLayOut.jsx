import React from 'react';
import NavBar from '../../ShearComponents/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../ShearComponents/Footer';

const SignInLayOut = () => {
    return (
        <div>
            <NavBar/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default SignInLayOut;