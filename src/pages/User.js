import React, { useContext, useEffect } from "react";
import GithubContext from "../components/layout/context/github/GithubContext";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const { singleGithubUsers, user } = useContext(GithubContext);
  const params = useParams();

  const {
    name,
    type,
    avatar_url,
    login,
    bio,
    company,
    location,
    email,
    blog,
    public_repos,
    public_gists,
    followers,
    following,
    created_at,
    updated_at,
    html_url,
    followers_url,
    following_url,
    starred_url,
    subscriptions_url,
    twitter_username,
    url,
  } = user;

  useEffect(() => {
    singleGithubUsers(params.login);
  }, []);
  return (
    <div className="single__user-wrapper">
      <div className="back_to_search">
        <Link to="/">Back to search</Link>
      </div>
      <div className="user__info">
        <div className="user__info-left">
          <a href={url}>
            <img src={avatar_url} alt="avatar" />
          </a>
        </div>
        <div className="user__info-right">
          <p>user name : {user.login}</p>
          <p>user type : {user.type}</p>
          <p>user bio :{user.bio}</p>
          <p>user company :{user.company}</p>
          <p>user location :{user.location}</p>
          <p>user email :{user.email}</p>
          <p>user blog :{user.blog}</p>
          <p>user followers :{user.followers}</p>
          <p>user following :{user.following}</p>
          <p>user twitter_username :{user.twitter_username}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
