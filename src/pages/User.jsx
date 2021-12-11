import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUsers, FaUserFriends, FaCodepen, FaStore } from "react-icons/fa";

import Spinner from "../components/layout/Spinner";
import { GithubContext } from "../context/github/GithubContext";
import RepoList from "../components/repos/RepoList";

const User = () => {
  const { getUser, isLoading, user, repos, getSortedRepos } =
    useContext(GithubContext);
  const params = useParams();
  const {
    avatar_url,
    name,
    login,
    type,
    hirable,
    bio,
    html_url,
    location,
    blog,
    twitter_username,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  useEffect(() => {
    getUser(params.login);
    // getUserRepos(params.login);
    getSortedRepos(params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading) return <Spinner />;
  return (
    <div className="w-full mx-auto lg:w-10/12">
      <div className="mb-4">
        <Link to="/" className="btn btn-ghost">
          Back to Search
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
        <div className="custom-card-image mb-6 md:mb-0 ">
          <div className="shadow-xl rounded-xl card image-full">
            <figure>
              <img src={avatar_url} alt="Avatar" />
            </figure>
            <div className="card-body justify-end">
              <h2 className="card-title mb-4">{name}</h2>
              <p>{login}</p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="mb-6">
            <div className="text-3xl card-title">
              {name}
              <div className="mx-2 badge badge-success">{type}</div>
              {hirable && <div className="mx-1 badge badge-info">Hirable</div>}
            </div>
            <p>{bio ? bio : "404 - Bio Not Found!!!"}</p>
            <a
              className=" mt-4 card-actions"
              href={html_url}
              rel="noreferrer"
              target="_blank"
            >
              <button className="btn btn-outline">Visit GitHub Profile</button>
            </a>
          </div>
          <div className="w-full rounded-lg shadow-md bg-base-100 stats">
            {location && (
              <div className="stat">
                <div className="stat-title text-md">Location</div>
                <div className="text-lg stat-value">{location}</div>
              </div>
            )}
            {blog && (
              <div className="stat">
                <div className="stat-title text-md">Website</div>
                <div className="text-lg stat-value">
                  <a href={`http://${blog}`} target="_blank" rel="noreferrer">
                    {blog}
                  </a>
                </div>
              </div>
            )}
            {twitter_username && (
              <div className="stat">
                <div className="stat-title text-md">Twitter</div>
                <div className="text-lg stat-value">
                  <a
                    href={`http://twitter.com/${twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {blog}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="stats shadow-md rounded-lg bg-base-100 py-5 mb-6 w-full">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Followers</div>
          <div className="stat-value pr-5 text-5xl md:text-4xl">
            {followers}
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUserFriends className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Following</div>
          <div className="stat-value pr-5 text-5xl md:text-4xl">
            {following}
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaCodepen className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Public Repos</div>
          <div className="stat-value pr-5 text-5xl md:text-4xl">
            {public_repos}
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaStore className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Public Gists</div>
          <div className="stat-value pr-5 text-5xl md:text-4xl">
            {public_gists}
          </div>
        </div>
      </div>

      <RepoList repos={repos} />
    </div>
  );
};

export default User;
