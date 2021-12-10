import { createContext, useReducer } from "react";

import { githubReducer } from "./githubReducer";

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  // Loads initial users
  const fetchUsers = async () => {
    setLoading();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_GITHUB_URI}/users`,
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        }
      );
      const data = await response.json();

      dispatch({
        type: "GET_USERS",
        payload: data,
      });
    } catch (error) {}
  };

  // Search Users
  const searchUsers = async (text) => {
    setLoading();
    const queryParam = new URLSearchParams({
      q: text,
    });
    try {
      const response = await fetch(
        `${process.env.REACT_APP_GITHUB_URI}/search/users?${queryParam}`,
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        }
      );
      const { items } = await response.json();

      dispatch({
        type: "GET_USERS",
        payload: items,
      });
    } catch (error) {}
  };

  // Clear users
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  const { users, isLoading } = state;

  return (
    <GithubContext.Provider
      value={{
        users,
        isLoading,
        fetchUsers,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
