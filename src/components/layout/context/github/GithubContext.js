import React, { useState, createContext } from "react";

const GithubContext = createContext();

const Github_Url = process.env.REACT_APP_GITHUB_URL;
const Github_Token = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const [users, SetUsers] = useState([]);
  const [loading, SetLoading] = useState(true);

  const fetchGithubUsers = async () => {
    const response = await fetch(`${Github_Url}/users`, {
      headers: {
        Authorization: `token ${Github_Token}`,
      },
    });
    const data = await response.json();
    console.log("Git data:", data);
    SetUsers(data);
    SetLoading(false);
  };

  return (
    <GithubContext.Provider value={{ users, loading, fetchGithubUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
