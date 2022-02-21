import React, { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const Github_Url = process.env.REACT_APP_GITHUB_URL;
const Github_Token = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialSate = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(githubReducer, initialSate);

  const fetchGithubUsers = async () => {
    const response = await fetch(`${Github_Url}/users`, {
      headers: {
        Authorization: `token ${Github_Token}`,
      },
    });
    const data = await response.json();
    console.log("Git data:", data);

    dispatch({
      type: "FETCH_USERS",
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchGithubUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
