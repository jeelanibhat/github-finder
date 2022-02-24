import React from "react";
import { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import GithubContext from "../context/github/GithubContext";

const UserSearch = () => {
  const { searchContext, setSearchContext, clearUsers } =
    useContext(GithubContext);
  const [inputText, setInputText] = useState("Jeelani");

  // onchange handler for the search input
  const handleTextFieldChange = (e) => {
    setInputText(e.target.value);
  };

  // submit function
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (inputText.length > 0) {
      setSearchContext(inputText);
    } else {
      alert("Please enter a valid search term");
    }
  };

  return (
    <div className="user__search-wrapper">
      <h2>Search User</h2>
      <div className="user__search-form">
        <form onClick={(e) => handleSearchSubmit(e)}>
          <TextField
            id="standard-basic"
            label="Search ..."
            variant="standard"
            onChange={(e) => handleTextFieldChange(e)}
            value={inputText}
          />
          <Button type="submit" variant="outlined" endIcon={<SearchIcon />}>
            Search
          </Button>
        </form>
        <p onClick={clearUsers}>Clear</p>
      </div>
    </div>
  );
};

export default UserSearch;
