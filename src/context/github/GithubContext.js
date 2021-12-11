import { createContext, useReducer } from "react";

import { githubReducer } from "./GithubReducer.js";

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  // Loads initial users
  const getUsers = async () => {
    setLoading();
    try {
      const response = await fetch(`${process.env.REACT_APP_GITHUB_URI}/users`);
      const data = await response.json();

      dispatch({
        type: "GET_USERS",
        payload: data,
      });
    } catch (error) {}
  };

  // Get user repos
  const getUserRepos = async (login) => {
    setLoading();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_GITHUB_URI}/users/${login}/repos`
      );
      const data = await response.json();
      dispatch({
        type: "GET_REPOS",
        payload: data,
      });
    } catch (error) {}
  };

  // Get Sorted Repo List
  const getSortedRepos = async (login) => {
    setLoading();
    const queryParam = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });
    try {
      const response = await fetch(
        `${process.env.REACT_APP_GITHUB_URI}/users/${login}/repos?${queryParam}`
      );
      const data = await response.json();

      dispatch({
        type: "GET_REPOS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // get Single User Data
  const getUser = async (login) => {
    setLoading();
    try {
      const response = await fetch(`https://api.github.com/users/${login}`);
      if (response.status === 404) {
        window.location = "/notfound";
      } else {
        const data = await response.json();

        dispatch({
          type: "GET_USER",
          payload: data,
        });
      }
    } catch (error) {}
  };

  // Clear users
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        getUser,
        getUsers,
        clearUsers,
        getUserRepos,
        getSortedRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
