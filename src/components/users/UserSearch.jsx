import React, { useState, useContext } from "react";

import { GithubContext } from "../../context/github/GithubContext";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Enter something!");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const handleClear = () => clearUsers();

  // TODO: Add clear button as x inside the input box
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control relative">
            <input
              type="text"
              className="input bg-gray-300 text-black input w-full pr-20"
              placeholder="Search Users"
              value={text}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn absolute top-0 right-0 rounded-l-none px-6"
            >
              GO
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div className="">
          <button
            onClick={handleClear}
            className="btn btn-ghost btn btn-outline"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
