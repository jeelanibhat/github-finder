import React from "react";
import UserResult from "../components/layout/users/UserResult";
import UserSearch from "../components/layout/users/UserSearch";

const Home = () => {
  return (
    <div className="home__wrapper">
      <UserSearch />
      <UserResult />
    </div>
  );
};

export default Home;
