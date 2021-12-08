import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content flex-none">
      <div className="container mx-auto">
        <div className="flex px-2 mx-2">
          <FaGithub className="text-3xl pr-3 inline-block " />
          <Link to="/" className="font-bold text-lg align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
};
Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
