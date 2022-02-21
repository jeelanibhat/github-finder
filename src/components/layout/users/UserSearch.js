import React from "react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";

const UserSearch = () => {
  const [search, setSearch] = useState("");

  const handleTextFieldChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      alert("Please enter a search term");
    } else {
      console.log("result :", search);
    }
  };

  const clearHandler = () => {
    setSearch("");
  };

  return (
    <div className="user__search-wrapper">
      <h2>Search User</h2>
      <div className="user__search-form">
        <form onSubmit={(e) => handleSearchSubmit(e)}>
          <TextField
            id="standard-basic"
            label="Search ..."
            variant="standard"
            onChange={(e) => handleTextFieldChange(e)}
            value={search}
          />
          <Button type="submit" variant="outlined" endIcon={<SearchIcon />}>
            Search
          </Button>
        </form>
        <p onClick={clearHandler}>Clear</p>
      </div>
    </div>
  );
};

export default UserSearch;
