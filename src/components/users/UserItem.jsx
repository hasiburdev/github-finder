import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card shadow-xl compact bg-base-100 side">
      <div className="flex flex-row space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full shadow w-14 h-14">
            <img src={avatar_url} alt="" />
          </div>
        </div>
        <div className="flex-auto">
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-sm opacity-40"
            to={`/users/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propType = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
