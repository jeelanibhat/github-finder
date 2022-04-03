import React, { createContext, useReducer, useState, useEffect } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const Github_Url = process.env.REACT_APP_GITHUB_URL;
const Github_Token = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialSate = {
    users: [],
    user: {},
    loading: true,
  };

  const [searchContext, setSearchContext] = useState("jeelani");

  const [state, dispatch] = useReducer(githubReducer, initialSate);

  // fetch users
  useEffect(() => {
    fetchGithubUsers();
  }, [searchContext]);

  // fetch users
  const fetchGithubUsers = async () => {
    const response = await fetch(
      `${Github_Url}/search/users?q=${searchContext}`,
      {
        headers: {
          Authorization: `token ${Github_Token}`,
        },
      }
    );
    const { items } = await response.json();

    if (items.length !== 0) {
      dispatch({
        type: "FETCH_USERS",
        payload: items,
      });
    } else {
      alert("No users found");
    }
  };

  // fetch single users
  const singleGithubUsers = async (login) => {
    console.log("login - context api :", login);
    const response = await fetch(`${Github_Url}/users/${login}`, {
      headers: {
        Authorization: `token ${Github_Token}`,
      },
    });

    const data = await response.json();
    dispatch({
      type: "SINGLE_USERS",
      payload: data,
    });
  };

  // Clear users

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
    setSearchContext("");
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        fetchGithubUsers,
        searchContext,
        setSearchContext,
        clearUsers,
        singleGithubUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
