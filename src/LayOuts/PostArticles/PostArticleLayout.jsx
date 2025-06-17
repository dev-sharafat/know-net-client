import React, { useEffect, useState } from 'react';
import NavBar from '../../ShearComponents/NavBar'
import Footer from '../../ShearComponents/Footer'
import { Outlet, useLocation } from 'react-router';
import Loading from '../../ShearComponents/Loading';
const PostArticleLayout = () => {
    const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader on route change
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700); // Adjust time or replace with actual load logic

    return () => clearTimeout(timeout);
  }, [location]);
    return (
        <div>
            {loading && <Loading />}
            <NavBar></NavBar>
            <div className="">
                <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PostArticleLayout;