import React, { useEffect, useState } from "react";
import NavBar from "../../ShearComponents/NavBar";
import { Outlet, useLocation } from "react-router";
import Footer from "../../ShearComponents/Footer";
import Loading from "../../ShearComponents/Loading";

const MyArticleLayOut = () => {
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
      <NavBar />
      <div className="min-h-screen container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default MyArticleLayOut;
