import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Loading from "../../ShearComponents/Loading";
import NavBar from "../../ShearComponents/NavBar";
import Footer from "../../ShearComponents/Footer";

const AboutusLayout = () => {
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
     
    </div>
    )
};

export default AboutusLayout;