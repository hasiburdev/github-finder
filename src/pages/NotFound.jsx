import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <div className="text-6xl font-bold mb-8">Ooop!</div>
          <div className="text-5xl text-gray-400 mb-8">
            404 - Page Not Found!
          </div>
          <Link to="/" className="btn btn-outline ">
            <FaHome className="text-xl mr-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
