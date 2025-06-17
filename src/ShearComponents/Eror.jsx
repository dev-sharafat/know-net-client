import React from 'react';
import { useNavigate } from 'react-router';
import { AlertTriangle } from 'lucide-react'; // optional icon library

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <AlertTriangle size={80} className="text-red-500 mb-4" />
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={handleBackHome}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;
