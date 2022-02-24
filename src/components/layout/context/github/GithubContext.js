import React, { createContext, useReducer, useState, useEffect } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const Github_Url = process.env.REACT_APP_GITHUB_URL;
const Github_Token = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialSate = {
    users: [],
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
    console.log("Git data :", items.length);

    if (items.length !== 0) {
      dispatch({
        type: "FETCH_USERS",
        payload: items,
      });
    } else {
      alert("No users found");
    }
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
        loading: state.loading,
        fetchGithubUsers,
        searchContext,
        setSearchContext,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
