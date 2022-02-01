import React, { useEffect, useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from "../context/github/GithubContext";

const UserResult = () => {
  const { users, loading, fetchGithubUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchGithubUsers();
  }, []);

  if (!loading) {
    return (
      <div className="user__result_wrapper">
        <h2>User List</h2>
        <div className="user__result_inner-wrap">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  } else {
    return <h2>Loading....</h2>;
  }
};

export default UserResult;
