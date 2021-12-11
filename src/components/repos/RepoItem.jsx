import React from "react";
import PropType from "prop-types";
import { FaEye, FaStar, FaUtensils, FaInfo, FaLink } from "react-icons/fa";

const RepoItem = ({ repo }) => {
  const {
    html_url,
    name,
    description,
    watchers_count,
    stargazers_count,
    forks,
    open_issues,
  } = repo;
  return (
    <div className="card rounded-md bg-gray-800 hover:bg-gray-900  mb-2 ">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url} target="_blank" rel="noreferrer">
            <FaLink className=" inline mr-4" /> {name}
          </a>
        </h3>
        <p className="mb-6">{description}</p>
        <div>
          <div className="mr-2 badge badge-info badge-lg">
            <FaEye className="mr-2" /> {watchers_count}
          </div>
          <div className="mr-2 badge badge-success badge-lg">
            <FaStar className="mr-2" /> {stargazers_count}
          </div>
          <div className="mr-2 badge badge-error badge-lg">
            <FaInfo className="mr-2" /> {open_issues}
          </div>
          <div className="mr-2 badge badge-warning badge-lg">
            <FaUtensils className="mr-2" /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropType.object.isRequired,
};

export default RepoItem;
