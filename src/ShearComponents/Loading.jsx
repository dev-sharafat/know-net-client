import React from 'react';
import { HashLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='text-center flex justify-center items-center min-h-screen'>
            <HashLoader/>
        </div>
    );
};

export default Loading;