import React, { use } from 'react';
import AuthContext from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const AuthPrivate = ({children}) => {
   const { loading, user } = use(AuthContext)
  const location = useLocation()

  if (loading) {
    return ; 
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login" replace />;
  }

  return children;
};

export default AuthPrivate;