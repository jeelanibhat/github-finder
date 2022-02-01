import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound__wrapper">
      <h1>404</h1>
      <h2>Page Not Found!</h2>
      <div className="d-flex align-items-center py-5">
        <HomeIcon className="mr-1" />
        <Link to="/" className="text-white">
          <h2> Back to Home</h2>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
